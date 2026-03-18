import { useState, useEffect, useCallback } from 'react';
import axiosInstance, { endpoints } from './axios';

// Cache configuration (in milliseconds)
const CACHE_KEY = 'vacancies_cache';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

interface CacheData {
  data: any;
  timestamp: number;
}

interface VacanciesResponse {
  data: {
    jobs: any[];
    pagination: any;
  };
  requestValues: string;
  message: string;
}

/**
 * Custom hook to fetch vacancy listings with caching
 * Implements localStorage caching with TTL for optimal performance
 */
export const useVacancies = () => {
  const [vacancies, setVacancies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<any>(null);

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
      console.error('Error reading cache:', err);
      return null;
    }
  }, []);

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
      console.error('Error setting cache:', err);
    }
  }, []);

  // Clear cache manually if needed
  const clearCache = useCallback(() => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(CACHE_KEY);
  }, []);

  // Fetch vacancies with cache support
  const fetchVacancies = useCallback(async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first (unless forced refresh)
      if (!forceRefresh) {
        const cached = getCache();
        if (cached) {
          setVacancies(cached.data.jobs || []);
          setPagination(cached.data.pagination || null);
          setLoading(false);
          return;
        }
      }

      // Fetch from API
      const response = await axiosInstance.get<VacanciesResponse>(
        endpoints.vacancy.listings
      );

      const jobsData = response.data.data;

      // Set both state and cache
      setVacancies(jobsData.jobs || []);
      setPagination(jobsData.pagination || null);
      setCache(jobsData);
    } catch (err: any) {
      const errorMessage = err?.message || 'Failed to fetch vacancies';
      setError(errorMessage);
      console.error('Error fetching vacancies:', err);

      // If API fails, try to use stale cache as fallback
      const staleCache = localStorage.getItem(CACHE_KEY);
      if (staleCache) {
        try {
          const parsed = JSON.parse(staleCache);
          setVacancies(parsed.data?.jobs || []);
          setPagination(parsed.data?.pagination || null);
          setError(null); // Clear error if we have fallback data
        } catch {
          // Ignore parsing errors
        }
      }
    } finally {
      setLoading(false);
    }
  }, [getCache, setCache]);

  // Initial fetch
  useEffect(() => {
    fetchVacancies();
  }, [fetchVacancies]);

  return {
    vacancies,
    loading,
    error,
    pagination,
    refetch: () => fetchVacancies(true), // Force refresh
    clearCache,
  };
};

export default useVacancies;
