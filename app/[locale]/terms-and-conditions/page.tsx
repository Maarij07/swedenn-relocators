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
  const [activeSection, setActiveSection] = useState<number>(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMountedRef = useRef(true);
  const sectionRefsRef = useRef<{ [key: number]: HTMLElement | null }>({});

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
          setActiveSection(0);
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

        let data: TermsAndConditionsResponse = await response.json();
        
        // Store in cache - data.data is the array of TermsSection
        termsCache.set(selectedRole, {
          allTermsSections: data.data.data || [],
        });

        if (isMountedRef.current) {
          setTerms(data.data.data || []);
          setError(null);
          setActiveSection(0);
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

  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < terms.length; i++) {
        const element = sectionRefsRef.current[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(i);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [terms]);

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

  const handleScrollToSection = (index: number) => {
    const element = sectionRefsRef.current[index];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
      setSidebarOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="max-w-[1600px] 2xl:max-w-[1800px] 4k:max-w-[2400px] mx-auto pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
        
        {/* Header Section */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl xs:text-3.5xl sm:text-4xl lg:text-5xl xl:text-6xl 4k:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 text-base sm:text-lg 4k:text-xl max-w-2xl">
            Please read these terms carefully before using our service. By accessing and using this platform, you agree to be bound by these conditions.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 mb-8 sm:mb-12 flex gap-3 border-b border-gray-200">
          <button
            onClick={() => {
              setSelectedRole('client');
              setActiveSection(0);
            }}
            className={`px-6 sm:px-8 py-4 font-semibold text-[14px] sm:text-[15px] 4k:text-lg transition-all border-b-2 ${
              selectedRole === 'client'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Client Terms
          </button>
          <button
            onClick={() => {
              setSelectedRole('company');
              setActiveSection(0);
            }}
            className={`px-6 sm:px-8 py-4 font-semibold text-[14px] sm:text-[15px] 4k:text-lg transition-all border-b-2 ${
              selectedRole === 'company'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Company Terms
          </button>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex gap-8 lg:gap-12 xl:gap-16 4k:gap-20 px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-8 right-8 bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Left Sidebar Navigation */}
          <aside className={`${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block fixed lg:relative left-0 top-0 lg:top-auto w-full sm:w-72 lg:w-60 xl:w-72 4k:w-96 h-screen lg:h-auto bg-white lg:bg-transparent z-50 lg:z-0 overflow-y-auto lg:overflow-visible pt-32 sm:pt-40 lg:pt-0`}>
            <div className="sticky top-32 sm:top-40 lg:top-0 bg-white lg:bg-transparent p-6 sm:p-8 lg:p-0 border-b lg:border-b-0 border-gray-200">
              <h3 className="text-sm font-bold uppercase text-gray-500 mb-6 tracking-wide">Contents</h3>
              <nav className="space-y-3">
                {terms && terms.map((section, index) => (
                  <button
                    key={section.type_id}
                    onClick={() => handleScrollToSection(index)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all text-sm sm:text-base 4k:text-lg font-medium ${
                      activeSection === index
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <span className="font-bold text-blue-600 mr-2">{index + 1}.</span>
                    {section.type_name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </aside>

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/30 z-40 top-0"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {terms && terms.length > 0 ? (
              <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                {terms.map((section, sectionIndex) => (
                  <section
                    key={section.type_id}
                    ref={(el) => {
                      if (el) sectionRefsRef.current[sectionIndex] = el;
                    }}
                    className="scroll-mt-40 sm:scroll-mt-48 lg:scroll-mt-32"
                  >
                    {/* Section Header */}
                    <div className="mb-8 sm:mb-10 pb-6 border-b-2 border-gray-200">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 bg-blue-50 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 4k:w-20 4k:h-20 rounded-lg">
                            {sectionIndex + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 leading-tight">
                            {section.type_name}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Section Content */}
                    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                      {section.sub_types && section.sub_types.map((subType, subIndex) => (
                        <div key={subIndex} className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 4k:p-12 border border-gray-200 hover:border-gray-300 transition-colors">
                          {subType.sub_type_name && (
                            <h3 className="text-lg sm:text-xl lg:text-2xl 4k:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
                              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 text-blue-600 rounded-full text-sm sm:text-base font-semibold mr-3 sm:mr-4 flex-shrink-0">
                                {subIndex + 1}
                              </div>
                              {subType.sub_type_name}
                            </h3>
                          )}
                          <div className="space-y-4 sm:space-y-6">
                            {subType.content && subType.content.map((item) => (
                              <div key={item.id} className="border-l-4 border-blue-400 pl-4 sm:pl-6 py-1">
                                <div 
                                  className="text-gray-700 text-base sm:text-lg 4k:text-xl leading-relaxed prose prose-sm sm:prose lg:prose-lg max-w-none"
                                  dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg 4k:text-xl">No terms and conditions available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
