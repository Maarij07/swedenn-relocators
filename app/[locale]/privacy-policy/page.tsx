'use client';

import Navbar from '../../components/Navbar';
import { useEffect, useState, useRef } from 'react';

interface PolicyContent {
  id: number;
  title: string | null;
  content: string;
}

interface PolicySection {
  type_id: number;
  type_name: string;
  content: PolicyContent[];
}

interface PrivacyPolicyResponse {
  data: {
    last_updated_at: string;
    data: PolicySection[];
  };
}

// Cache for privacy policy data
const privacyPolicyCache = new Map<string, { data: PrivacyPolicyResponse['data']; timestamp: number }>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export default function PrivacyPolicyPage() {
  const [policy, setPolicy] = useState<PrivacyPolicyResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      const cacheKey = 'privacy-policy';
      const now = Date.now();

      // Check cache first
      if (privacyPolicyCache.has(cacheKey)) {
        const cachedData = privacyPolicyCache.get(cacheKey)!;
        if (now - cachedData.timestamp < CACHE_DURATION) {
          if (isMountedRef.current) {
            setPolicy(cachedData.data);
            setLoading(false);
          }
          return;
        }
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/miscellaneous/privacy/policy`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy');
        }

        const data: PrivacyPolicyResponse = await response.json();
        
        // Cache the data
        privacyPolicyCache.set(cacheKey, {
          data: data.data,
          timestamp: now,
        });

        if (isMountedRef.current) {
          setPolicy(data.data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching privacy policy:', err);
        if (isMountedRef.current) {
          setError('Failed to load privacy policy');
          setPolicy(null);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchPrivacyPolicy();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="flex justify-center items-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </main>
    );
  }

  if (error || !policy) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-20">
          <div className="text-center">
            <p className="text-gray-600 text-lg">{error || 'Privacy policy not found'}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
        
        {/* Header */}
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Last updated: {new Date(policy.last_updated_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </section>

        {/* Policy Sections */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {policy.data.map((section) => (
            <section key={section.type_id} className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                {section.type_name}
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {section.content.map((item) => (
                  <div key={item.id} className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                    {item.title && (
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                    )}
                    <div 
                      className="text-gray-700 text-base sm:text-lg leading-relaxed prose prose-sm sm:prose lg:prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
