import { useState, useEffect, useCallback } from 'react';
import axiosInstance, { endpoints } from './axios';

// Cache configuration (in milliseconds)
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

interface CacheData {
  data: any;
  timestamp: number;
}

interface VacancyDetailsResponse {
  data: any;
  requestValues: string;
  message: string;
}

/**
 * Custom hook to fetch vacancy details with caching
 * Implements localStorage caching with TTL for optimal performance
 * Each vacancy has its own cache entry
 */
export const useVacancyDetails = (vacancyId: number | string) => {
  const [vacancy, setVacancy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CACHE_KEY = `vacancy_details_${vacancyId}`;

  // Get cache from localStorage
  const getCache = useCallback((): CacheData | null => {
    if (typeof window === 'undefined') return null;

    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;

      const parsedCache: CacheData = JSON.parse(cached);
      const now = Date.now();

      // Check if cache is still valid
      if (now - parsedCache.timestamp < CACHE_TTL) {
        return parsedCache;
      }

      // Cache expired, remove it
      localStorage.removeItem(CACHE_KEY);
      return null;
    } catch (err) {
      console.error('Error reading vacancy details cache:', err);
      return null;
    }
  }, [CACHE_KEY]);

  // Set cache in localStorage
  const setCache = useCallback((data: any) => {
    if (typeof window === 'undefined') return;

    try {
      const cacheData: CacheData = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (err) {
      console.error('Error setting vacancy details cache:', err);
    }
  }, [CACHE_KEY]);

  // Clear cache manually if needed
  const clearCache = useCallback(() => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CACHE_KEY);
  }, [CACHE_KEY]);

  // Fetch vacancy details with cache support
  const fetchVacancyDetails = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first (unless forced refresh)
      if (!forceRefresh) {
        const cached = getCache();
        if (cached) {
          setVacancy(cached.data);
          setLoading(false);
          return;
        }
      }

      // Fetch from API
      const endpoint = typeof endpoints.vacancy.details === 'function' 
        ? endpoints.vacancy.details(Number(vacancyId)) 
        : `/miscellaneous/vacancy/${vacancyId}/details`;
        
      const response = await axiosInstance.get<VacancyDetailsResponse>(endpoint);

      const vacancyData = response.data.data;

      // Set both state and cache
      setVacancy(vacancyData);
      setCache(vacancyData);
    } catch (err: any) {
      const errorMessage = err?.message || 'Failed to fetch vacancy details';
      setError(errorMessage);
      console.error('Error fetching vacancy details:', err);

      // If API fails, try to use stale cache as fallback
      const staleCache = localStorage.getItem(CACHE_KEY);
      if (staleCache) {
        try {
          const parsed = JSON.parse(staleCache);
          setVacancy(parsed.data);
          setError(null); // Clear error if we have fallback data
        } catch {
          // Ignore parsing errors
        }
      }
    } finally {
      setLoading(false);
    }
  }, [vacancyId, getCache, setCache, CACHE_KEY]);

  // Initial fetch
  useEffect(() => {
    if (vacancyId) {
      fetchVacancyDetails();
    }
  }, [vacancyId, fetchVacancyDetails]);

  return {
    vacancy,
    loading,
    error,
    refetch: () => fetchVacancyDetails(true), // Force refresh
    clearCache,
  };
};

export default useVacancyDetails;
