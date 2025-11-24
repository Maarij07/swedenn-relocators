'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { useTranslation } from 'react-i18next';

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function BlogsPage() {
  const { t } = useTranslation();

  const blogCards = (t('blogsPage.cards', { returnObjects: true }) as Array<{ title: string; description: string }>).map((card, index) => ({
    ...card,
    id: index + 1
  }));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Animations keyframes */}
      <style>{fadeInUp}</style>

      {/* Hero-style header using the same theme background and container as Hero */}
      <section className="relative overflow-hidden bg-[#EBF4FF]">
        <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
            <div
              className="text-center max-w-3xl mx-auto"
              style={{ animation: 'fadeInUp 0.8s ease-out' }}
            >
              <h1 className="text-[1.9rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.1rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 4k:text-[6rem] font-bold leading-tight text-gray-900 mb-4">
                {t('blogsPage.hero.title')}
              </h1>
              <p className="mt-4 text-[14px] sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] 3xl:text-[20px] 4k:text-[2rem] text-gray-600 leading-relaxed">
                {t('blogsPage.hero.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary band: text on white background */}
      <section className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 pt-6 pb-4">
          <div
            className="text-center"
            style={{ animation: 'fadeInUp 0.9s ease-out' }}
          >
            <p className="text-[11px] sm:text-xs md:text-sm 4k:text-xl tracking-[0.18em] uppercase text-blue-600 mb-3">
              {t('blogsPage.secondaryBand.badge')}
            </p>
            <h2 className="text-[1.9rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.1rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 4k:text-[6rem] font-bold leading-tight">
              <span className="text-gray-900">{t('blogsPage.secondaryBand.titleLine1')}</span>
              <span className="text-blue-600">{t('blogsPage.secondaryBand.titleLine2')}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Blog cards grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogCards.map((card, index) => (
              <article
                key={card.id}
                className="bg-white rounded-[24px] shadow-[0_18px_45px_rgba(15,23,42,0.08)] border border-gray-100 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
                style={{
                  animation: 'fadeInUp 0.7s ease-out',
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="relative w-full bg-gray-50">
                  <div className="relative w-full h-44 sm:h-48 md:h-52 flex items-center justify-center">
                    <Image
                      src={`/blogs/b${card.id}.svg`}
                      alt={card.title}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-6 pb-6 pt-4 space-y-3">
                  <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-semibold text-gray-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] text-gray-600 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>

                  <div className="pt-2 mt-auto">
                    <button className="inline-flex items-center justify-center px-5 py-2.5 text-[13px] sm:text-[14px] font-semibold text-white bg-[#032B5F] rounded-full hover:bg-[#021C3D] transition-colors">
                      {t('blogsPage.readMore')}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
