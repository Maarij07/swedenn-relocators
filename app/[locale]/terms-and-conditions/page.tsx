'use client';

import Navbar from '../../components/Navbar';
import { useEffect, useState, useRef } from 'react';

interface TermsContent {
  id: number;
  content: string;
}

interface SubType {
  sub_type_id: number | null;
  sub_type_name: string | null;
  content: TermsContent[];
}

interface TermsSection {
  type_id: number;
  type_name: string;
  sub_types: SubType[];
}

interface TermsAndConditionsResponse {
  data: {
    last_updated_at: string;
    data: TermsSection[];
  };
}

interface CachedTermsData {
  allTermsSections: TermsSection[];
}

// Cache for terms and conditions data by role
const termsCache = new Map<'client' | 'company', CachedTermsData>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export default function TermsAndConditionsPage() {
  const [terms, setTerms] = useState<TermsSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<'client' | 'company'>('client');
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchTermsAndConditions = async () => {
      // Check if data is already cached
      if (termsCache.has(selectedRole)) {
        const cachedData = termsCache.get(selectedRole)!;
        if (isMountedRef.current) {
          setTerms(cachedData.allTermsSections);
          setError(null);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/miscellaneous/termsAndConditions?role=${selectedRole}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch terms and conditions');
        }

        const data: TermsAndConditionsResponse = await response.json();
        
        // Store in cache - data.data is the array of TermsSection
        termsCache.set(selectedRole, {
          allTermsSections: data.data.data || [],
        });

        if (isMountedRef.current) {
          setTerms(data.data.data || []);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching terms and conditions:', err);
        if (isMountedRef.current) {
          setError('Failed to load terms and conditions');
          setTerms([]);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchTermsAndConditions();
  }, [selectedRole]);

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

  if (error) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <Navbar />
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-20">
          <div className="text-center">
            <p className="text-gray-600 text-lg">{error}</p>
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
            Terms and Conditions
          </h1>
        </section>

        {/* Role Tabs */}
        <div className="flex gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => {
              setSelectedRole('client');
            }}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[14px] sm:text-[15px] transition-all ${
              selectedRole === 'client'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Client
          </button>
          <button
            onClick={() => {
              setSelectedRole('company');
            }}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[14px] sm:text-[15px] transition-all ${
              selectedRole === 'company'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Company
          </button>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {terms && terms.length > 0 ? (
            terms.map((section) => (
              <section key={section.type_id} className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {section.type_name}
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  {section.sub_types && section.sub_types.map((subType, subIndex) => (
                    <div key={subIndex}>
                      {subType.sub_type_name && (
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                          {subType.sub_type_name}
                        </h3>
                      )}
                      <div className="space-y-4">
                        {subType.content && subType.content.map((item) => (
                          <div key={item.id} className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                            <div 
                              className="text-gray-700 text-base sm:text-lg leading-relaxed prose prose-sm sm:prose lg:prose-lg max-w-none"
                              dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="text-center">
              <p className="text-gray-600 text-lg">No terms and conditions available</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
