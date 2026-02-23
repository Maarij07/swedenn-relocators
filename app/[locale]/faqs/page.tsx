'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { translateFAQs } from '../../utils/translationService';

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

export default function FAQsPage() {
  const { t } = useTranslation();
  const params = useParams();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [allFaqTypes, setAllFaqTypes] = useState<FAQType[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/miscellaneous/faqs?faq_for=client`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }

        const data: APIResponse = await response.json();
        setAllFaqTypes(data.data || []);
        
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

        setFaqs(flattenedFaqs);
        setError(null);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setError('Failed to load FAQs');
        setFaqs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto" style={{
        backgroundImage: 'url(/bg-new-in-sweden.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '1400px',
        maxWidth: 'calc(100% - 32px)',
        height: '289px',
        margin: '200px auto 0',
        marginTop: '160px'
      }}>
        <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>

        <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-8 sm:px-10">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
              <div>
                <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                  {t('faqs.hero.title')}
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-12 font-normal">
                  {t('faqs.hero.description')}
                </p>
              </div>

              {/* Right - Illustration */}
              <div className="relative w-full flex justify-center lg:justify-end">
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

      {/* Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{
            width: '1400px',
            maxWidth: 'calc(100% - 32px)'
          }}>
            <div className="grid lg:grid-cols-7 gap-4 sm:gap-6">
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
                    className={`rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all cursor-pointer text-left ${
                      selectedCardIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-white'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center ${
                      selectedCardIndex === index
                        ? 'bg-blue-500'
                        : 'bg-gray-200'
                    }`}>
                      <Image
                        src={iconMap[index]}
                        alt={card.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <h3 className={`font-semibold text-[15px] sm:text-[16px] mb-2 ${
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
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="mx-auto" style={{
            width: '1400px',
            maxWidth: 'calc(100% - 32px)'
          }}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left - FAQs Accordion */}
              <div>
                {/* Section Heading */}
                <div className="mb-8 sm:mb-12">
                  <h2 className="font-black leading-tight text-[32px] sm:text-[36px] text-gray-900">
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
                <h2 className="font-black leading-tight text-[32px] sm:text-[36px] text-gray-900 mb-8">
                  {t('faqs.contactForm.heading')}
                </h2>

                <form className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      placeholder={t('faqs.contactForm.namePlaceholder')}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[14px] sm:text-[15px]"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder={t('faqs.contactForm.emailPlaceholder')}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[14px] sm:text-[15px]"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <input
                      type="text"
                      placeholder={t('faqs.contactForm.subjectPlaceholder')}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[14px] sm:text-[15px]"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      placeholder={t('faqs.contactForm.messagePlaceholder')}
                      rows={6}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[14px] sm:text-[15px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-[14px] sm:text-[15px]"
                  >
                    {t('faqs.contactForm.submitButton')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
