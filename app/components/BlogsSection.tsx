'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const BLOGS = [
  {
    id: 1,
    image: '/l1.svg',
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
    image: '/l3.svg',
    date: '10 March 2023',
    title: 'A Guide About Student Fee And Admissions In Sweden',
    description:
      'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
  },
];

const BLOGS_SV = [
  {
    id: 1,
    image: '/l1.svg',
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
    image: '/l3.svg',
    date: '10 mars 2023',
    title: 'Guide till studieavgifter och antagning i Sverige',
    description:
      'En översikt över studieavgifter, stipendier och antagningsprocessen för dig som vill studera i Sverige.',
  },
];

export default function BlogsSection() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  // Select the appropriate blog data based on language
  const blogs = isSv ? BLOGS_SV : BLOGS;

  // Translations for UI elements
  const texts = {
    heading: isSv ? 'Våra bloggar' : 'Our Blogs',
    readMore: isSv ? 'Läs mer' : 'Read More',
    showMore: isSv ? 'Visa fler' : 'Show More',
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        {/* Heading */}
        <h2 className="text-slate-900 font-extrabold tracking-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem] 4k:text-[3.25rem] mb-8 sm:mb-10 lg:mb-12">
          {texts.heading}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-14">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col rounded-3xl bg-slate-50 border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.06)] overflow-hidden"
            >
              <div className="relative w-full h-[220px] sm:h-[240px] lg:h-[260px] bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="flex-1 px-6 sm:px-7 pt-6 sm:pt-7 pb-6 sm:pb-7 flex flex-col gap-3">
                <p className="text-[0.7rem] sm:text-xs text-slate-400 font-medium">
                  {blog.date}
                </p>
                <h3 className="text-slate-900 font-semibold text-sm sm:text-base lg:text-[1.05rem] leading-snug">
                  {blog.title}
                </h3>
                <p className="text-[0.8rem] sm:text-[0.85rem] text-slate-500 leading-relaxed flex-1">
                  {blog.description}
                </p>
                <button className="mt-2 inline-flex items-center text-[0.8rem] sm:text-[0.85rem] font-semibold text-[#2563eb] hover:text-[#1d4ed8]">
                  {texts.readMore}
                  <span className="ml-1 text-xs">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Show more button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 sm:px-8 py-2.5 text-[0.8rem] sm:text-[0.85rem] font-semibold text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:bg-slate-50 transition-colors">
            {texts.showMore}
          </button>
        </div>
      </div>
    </section>
  );
}