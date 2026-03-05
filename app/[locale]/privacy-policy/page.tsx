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
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});
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

  const toggleSection = (typeId: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [typeId]: !prev[typeId]
    }));
  };

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

      <div className="max-w-[1600px] 2xl:max-w-[1800px] 4k:max-w-[2400px] mx-auto pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
        
        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-16 sm:mb-20 lg:mb-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl xs:text-3.5xl sm:text-4xl lg:text-5xl xl:text-6xl 4k:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-base sm:text-lg 4k:text-xl mb-6">
              We're committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
            </p>
            <p className="text-sm sm:text-base text-gray-500">
              Last updated: {new Date(policy.last_updated_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>



        {/* Expandable Policy Sections */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 space-y-4">
          {policy.data.map((section, index) => (
            <div
              key={section.type_id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
            >
              {/* Section Header - Expandable */}
              <button
                onClick={() => toggleSection(section.type_id)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm sm:text-base">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl 4k:text-3xl font-bold text-gray-900 text-left">
                    {section.type_name}
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    expandedSections[section.type_id] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Section Content - Expandable */}
              {expandedSections[section.type_id] && (
                <div className="px-6 sm:px-8 py-6 sm:py-8 border-t border-gray-200 bg-gradient-to-br from-blue-50/50 to-transparent">
                  <div className="space-y-8 sm:space-y-10">
                    {section.content.map((item, itemIndex) => (
                      <div key={item.id}>
                        {item.title && (
                          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-5 flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-blue-300 rounded-full text-blue-600 text-sm font-semibold">
                              {itemIndex + 1}
                            </span>
                            {item.title}
                          </h4>
                        )}
                        <div 
                          className="text-gray-700 text-base sm:text-lg 4k:text-xl leading-relaxed prose prose-sm sm:prose lg:prose-lg max-w-none"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl border border-blue-200 p-8 sm:p-10 lg:p-12 4k:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 4k:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg 4k:text-xl mb-8">
              We're here to help. Contact us with any questions about this Privacy Policy or how we handle your data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase font-bold text-blue-600 mb-3 tracking-wide">Email</h3>
                <a href="mailto:support@swedenrelocators.se" className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  support@swedenrelocators.se
                </a>
              </div>
              <div>
                <h3 className="text-sm uppercase font-bold text-blue-600 mb-3 tracking-wide">Mailing Address</h3>
                <p className="text-base sm:text-lg text-gray-700 font-medium">
                  SWEDEN RELOCATORS<br />
                  Sallerupsvägen 28D<br />
                  212 18 Malmö, Sweden
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
