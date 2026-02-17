'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const BLOGS = [
  {
    id: 1,
    image: '/relocation.svg',
    date: '10 March 2023',
    title: "5 Things To Keep In Mind If You're Relocating To Sweden",
    description:
      'The choice between a train or bus journey depends on various factors such as the distance of the journey, travel time and flexibility.',
  },
  {
    id: 2,
    image: '/l2.svg',
    date: '10 March 2023',
    title: '5 Swedish Foods You Must Try',
    description:
      'Capitalize on low hanging fruit to identify a ballpark value-added activity to beta test. Override the digital divide with additional clicks.',
  },
  {
    id: 3,
    image: '/school.svg',
    date: '10 March 2023',
    title: 'A Guide About Student Fee And Admissions In Sweden',
    description:
      'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  },
  {
    id: 4,
    image: '/business-person-holding-cv.svg',
    date: '15 April 2023',
    title: 'Understanding Swedish Workplace Culture & Employee Benefits',
    description:
      'Explore the unique aspects of Swedish work environment, including flexibility, equality, and comprehensive benefits that make Sweden attractive for professionals.',
  },
];

const BLOGS_SV = [
  {
    id: 1,
    image: '/relocation.svg',
    date: '10 mars 2023',
    title: '5 saker att tänka på när du flyttar till Sverige',
    description:
      'Valet mellan tåg eller buss beror på flera faktorer såsom sträckans längd, restid och hur flexibel du vill vara.',
  },
  {
    id: 2,
    image: '/l2.svg',
    date: '10 mars 2023',
    title: '5 svenska maträtter du måste prova',
    description:
      'Ta vara på möjligheterna – här får du en snabb introduktion till klassiska svenska smaker och hur du upplever dem bäst.',
  },
  {
    id: 3,
    image: '/school.svg',
    date: '10 mars 2023',
    title: 'Guide till studieavgifter och antagning i Sverige',
    description:
      'En översikt över studieavgifter, stipendier och antagningsprocessen för dig som vill studera i Sverige.',
  },
  {
    id: 4,
    image: '/business-person-holding-cv.svg',
    date: '15 april 2023',
    title: 'Förstå svensk arbetskulturen & anställningsförmåner',
    description:
      'Utforska de unika aspekterna av den svenska arbetsmiljön, inklusive flexibilitet, jämlikhet och omfattande förmåner som gör Sverige attraktivt för yrkespersoner.',
  },
];

export default function BlogsSection() {
  const { i18n } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || i18n.language || 'en';
  const isSv = i18n.language === 'sv';
  const [hoveredBlog, setHoveredBlog] = useState<number | null>(null);

  // Select the appropriate blog data based on language
  const blogs = isSv ? BLOGS_SV : BLOGS;

  // Translations for UI elements
  const texts = {
    heading: isSv ? 'Våra bloggar' : 'Our Blogs',
    readMore: isSv ? 'Läs mer' : 'Read More',
    showMore: isSv ? 'Visa fler' : 'Show More',
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-[#0f172a] font-extrabold text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.2] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
            {texts.heading}
          </h2>
          <p className="mt-2 text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] xl:text-[1.75rem] font-bold leading-[1.35] text-[#2563eb] [font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] max-w-4xl mx-auto">
            {isSv ? 'Tips för relocation och karriär i Norden' : 'Relocation and career tips for the Nordics'}
          </p>
        </div>

        {/* Blog Layout: Featured on Left, Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 sm:mb-14 lg:mb-16">
          {/* Featured Blog Card - Left (50%) */}
          {blogs.length > 0 && (
            <div
              key={blogs[0].id}
              className="lg:col-span-1 group rounded-3xl bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-slate-100"
              onMouseEnter={() => setHoveredBlog(blogs[0].id)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden bg-[#EBF4FF]">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-contain object-center transition-transform duration-500 ease-out ${
                    hoveredBlog === blogs[0].id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-7 lg:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">
                  {isSv ? 'ARTIKEL' : 'ARTICLE'}
                </p>
                <h3 className="text-lg sm:text-xl lg:text-lg font-bold text-slate-900 mb-2 leading-tight line-clamp-2">
                  {blogs[0].title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {blogs[0].description}
                </p>
                <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm group/btn">
                  {texts.readMore}
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          )}

          {/* Blog Cards Grid - Right (50%) */}
          <div className="lg:col-span-1 space-y-6">
            {blogs.slice(1).map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col sm:flex-row gap-5 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2"
                onMouseEnter={() => setHoveredBlog(blog.id)}
                onMouseLeave={() => setHoveredBlog(null)}
              >
                {/* Image Section */}
                <div className="relative w-full sm:w-[200px] lg:w-[180px] 4k:w-[240px] h-[220px] sm:h-[180px] lg:h-[160px] 4k:h-[200px] flex-shrink-0 overflow-hidden bg-[#EBF4FF]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className={`object-contain object-center transition-transform duration-500 ease-out ${
                      hoveredBlog === blog.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5 sm:p-6 lg:p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">
                      {isSv ? 'ARTIKEL' : 'ARTICLE'}
                    </p>
                    <h3 className="text-base sm:text-lg lg:text-[0.95rem] 4k:text-lg font-bold text-slate-900 mb-2 leading-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-start mt-3">
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-xs sm:text-sm group/btn">
                      {texts.readMore}
                      <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Show more button */}
        <div className="flex justify-center">
          <Link href={`/${locale}/blogs`}>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 sm:px-10 py-3 text-sm sm:text-base font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5">
              {texts.showMore}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}