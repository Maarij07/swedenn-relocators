'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, FormProvider } from 'react-hook-form';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { RHFTextField } from '../../components/fields/rhf-text-field';
import { RHFTextarea } from '../../components/fields/rhf-textarea';

interface FAQ {
  question: string;
  answer: string;
}

interface SubType {
  faqs: FAQ[];
}

interface FAQType {
  type_id: number;
  type_name: string;
  sub_types: SubType[];
}

interface APIResponse {
  data: FAQType[];
}

interface CachedFAQData {
  allFaqTypes: FAQType[];
  flattenedFaqs: FAQ[];
}

// Cache object to store FAQs data by role and language
const faqCache = new Map<string, CachedFAQData>();

export default function FAQsPage() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [allFaqTypes, setAllFaqTypes] = useState<FAQType[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [selectedRole, setSelectedRole] = useState<'client' | 'company'>('client');
  const isMountedRef = useRef(true);

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const { handleSubmit } = methods;

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchFAQs = async () => {
      // Check if data is already cached for this role
      if (faqCache.has(selectedRole)) {
        const cachedData = faqCache.get(selectedRole)!;
        if (isMountedRef.current) {
          setAllFaqTypes(cachedData.allFaqTypes);
          setFaqs(cachedData.flattenedFaqs);
          setError(null);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/miscellaneous/faqs?faq_for=${selectedRole}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }

        const data: APIResponse = await response.json();
        
        // Flatten all FAQs for "Show All" view
        const flattenedFaqs: FAQ[] = [];
        if (data.data && Array.isArray(data.data)) {
          data.data.forEach((type) => {
            if (type.sub_types && Array.isArray(type.sub_types)) {
              type.sub_types.forEach((subType) => {
                if (subType.faqs && Array.isArray(subType.faqs)) {
                  flattenedFaqs.push(...subType.faqs);
                }
              });
            }
          });
        }

        // Store in cache with role key (not language-specific)
        faqCache.set(selectedRole, {
          allFaqTypes: data.data || [],
          flattenedFaqs
        });

        if (isMountedRef.current) {
          setAllFaqTypes(data.data || []);
          setFaqs(flattenedFaqs);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        if (isMountedRef.current) {
          setError('Failed to load FAQs');
          setFaqs([]);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchFAQs();
  }, [selectedRole]);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
    setOpenIndex(null);

    if (index === 0) {
      // Show All - flatten all FAQs
      const flattenedFaqs: FAQ[] = [];
      allFaqTypes.forEach((type) => {
        if (type.sub_types && Array.isArray(type.sub_types)) {
          type.sub_types.forEach((subType) => {
            if (subType.faqs && Array.isArray(subType.faqs)) {
              flattenedFaqs.push(...subType.faqs);
            }
          });
        }
      });
      setFaqs(flattenedFaqs);
    } else {
      // Filter by selected type
      const selectedType = allFaqTypes[index - 1];
      const filteredFaqs: FAQ[] = [];
      if (selectedType && selectedType.sub_types && Array.isArray(selectedType.sub_types)) {
        selectedType.sub_types.forEach((subType) => {
          if (subType.faqs && Array.isArray(subType.faqs)) {
            filteredFaqs.push(...subType.faqs);
          }
        });
      }
      setFaqs(filteredFaqs);
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FE]">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-[160px]">
        <section className="relative overflow-hidden border border-gray-300 rounded-xl" style={{
          backgroundImage: 'url(/bg-new-in-sweden.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>

          <div className="relative py-8 sm:py-10 lg:py-0 lg:h-[289px] flex items-center px-8 sm:px-10">
            <div className="w-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                    {t('faqs.hero.title')}
                  </p>
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-4 lg:pr-12 font-normal">
                    {t('faqs.hero.description')}
                  </p>
                </div>

                {/* Right - Illustration */}
                <div className="relative w-full hidden lg:flex justify-center lg:justify-end">
                  <Image
                    src="/service-illustration.svg"
                    alt="FAQs illustration"
                    width={300}
                    height={250}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
            {/* Role Tabs */}
            <div className="flex gap-4 mb-8 sm:mb-12">
              <button
                onClick={() => {
                  setSelectedRole('client');
                  setSelectedCardIndex(0);
                  setOpenIndex(null);
                }}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[14px] sm:text-[15px] transition-all ${
                  selectedRole === 'client'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {t('faqs.tabs.client')}
              </button>
              <button
                onClick={() => {
                  setSelectedRole('company');
                  setSelectedCardIndex(0);
                  setOpenIndex(null);
                }}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[14px] sm:text-[15px] transition-all ${
                  selectedRole === 'company'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {t('faqs.tabs.company')}
              </button>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6">
              {(() => {
                const cards = t('faqs.cards', { returnObjects: true }) as Array<{ title: string }>;
                const iconMap = [
                  '/faqs/ic-package.svg',
                  '/faqs/ic-account.svg',
                  '/faqs/ic-payment.svg',
                  '/faqs/ic-delivery.svg',
                  '/faqs/ic-refund.svg',
                  '/faqs/ic-assurances.svg',
                  '/faqs/ic-package.svg'
                ];
                return cards && Array.isArray(cards) ? cards.map((card, index) => (
                  <button
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className={`rounded-2xl p-3 sm:p-5 lg:p-6 xl:p-8 shadow-sm hover:shadow-md transition-all cursor-pointer text-left ${
                      selectedCardIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-white'
                    }`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg mb-3 lg:mb-4 flex items-center justify-center ${
                      selectedCardIndex === index
                        ? 'bg-blue-500'
                        : 'bg-gray-200'
                    }`}>
                      <Image
                        src={iconMap[index]}
                        alt={card.title}
                        width={48}
                        height={48}
                        className="object-contain w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10"
                      />
                    </div>
                    <h3 className={`font-semibold text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[16px] leading-tight mb-2 ${
                      selectedCardIndex === index
                        ? 'text-white'
                        : 'text-gray-900'
                    }`}>
                      {card.title}
                    </h3>
                  </button>
                )) : null;
              })()}
            </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left - FAQs Accordion */}
              <div>
                {/* Section Heading */}
                <div className="mb-8 sm:mb-12">
                  <h2 className="font-black leading-tight text-[24px] sm:text-[28px] lg:text-[36px] text-gray-900">
                    {t('faqs.sectionHeading.titlePart1')} {t('faqs.sectionHeading.titlePart2')}
                  </h2>
                </div>

                {/* FAQs Accordion */}
                <div className="space-y-4">
                  {loading ? (
                    <div className="flex justify-center items-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                  ) : error ? (
                    <p className="text-center text-red-600 py-8">
                      {error}
                    </p>
                  ) : faqs && faqs.length > 0 ? (
                    faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-left font-semibold text-gray-900 text-[15px] sm:text-[16px]">
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                              openIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {openIndex === index && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 text-[13px] sm:text-[14px] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-600">
                      {t('faqs.noFaqs')}
                    </p>
                  )}
                </div>
              </div>

              {/* Right - Contact Form */}
              <div>
                <h2 className="font-black leading-tight text-[24px] sm:text-[28px] lg:text-[36px] text-gray-900 mb-8">
                  {t('faqs.contactForm.heading')}
                </h2>

                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit((data) => {
                    console.log('FAQ Contact Form submitted:', data);
                    // Add your form submission logic here
                  })} className="space-y-6 sm:space-y-7">
                    {/* Name Input */}
                    <div>
                      <RHFTextField
                        name="name"
                        label={t('faqs.contactForm.nameLabel')}
                        placeholder={t('faqs.contactForm.namePlaceholder')}
                        type="text"
                        helperText=""
                        slotProps={{}}
                        rules={{ required: 'Name is required' }}
                        sx={{}}
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <RHFTextField
                        name="email"
                        label={t('faqs.contactForm.emailLabel')}
                        placeholder={t('faqs.contactForm.emailPlaceholder')}
                        type="email"
                        helperText=""
                        slotProps={{}}
                        rules={{ required: 'Email is required' }}
                        sx={{}}
                      />
                    </div>

                    {/* Subject Input */}
                    <div>
                      <RHFTextField
                        name="subject"
                        label={t('faqs.contactForm.subjectLabel')}
                        placeholder={t('faqs.contactForm.subjectPlaceholder')}
                        type="text"
                        helperText=""
                        slotProps={{}}
                        rules={{ required: 'Subject is required' }}
                        sx={{}}
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <RHFTextarea
                        name="message"
                        label={t('faqs.contactForm.messageLabel')}
                        placeholder={t('faqs.contactForm.messagePlaceholder')}
                        rows={6}
                        helperText=""
                        slotProps={{}}
                        rules={{ required: 'Message is required' }}
                        sx={{}}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-[14px] sm:text-[15px] mt-8"
                    >
                      {t('faqs.contactForm.submitButton')}
                    </button>
                  </form>
                </FormProvider>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}
