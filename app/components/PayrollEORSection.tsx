'use client';

import Image from 'next/image';

export default function PayrollEORSection() {
  return (
    <section className="bg-[#EBF4FF]">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-slate-900 font-extrabold leading-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 4k:text-[4rem]">
            Expand Globally, Manage Locally
          </h2>
          <p className="mt-2 text-blue-600 font-extrabold text-[1.25rem] sm:text-[1.35rem] lg:text-[1.5rem] 4k:text-[2rem]">
            Payroll & EOR Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/doc1.svg" alt="EOR" width={48} height={48} className="shrink-0" />
                <h3 className="text-slate-900 font-bold text-lg sm:text-xl">Employer of Record (EOR)</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Expand your workforce globally without setting up a local entity. Our Employer of Record solutions allow your company to hire and manage employees in Sweden and Denmark compliantly while we handle all legal, administrative, and payroll responsibilities.
              </p>
              <ul className="space-y-1.5 mb-6">
                {[
                  'International companies hiring employees in Sweden or Denmark.',
                  'Startups testing new markets before establishing a local branch.',
                  'Businesses relocating staff who require compliant employment structures.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                    <Image src="/bullet.svg" alt="•" width={10} height={10} className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors">
                Read More
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/doc2.svg" alt="Payroll" width={32} height={32} className="shrink-0" />
                <h3 className="text-slate-900 font-bold text-lg sm:text-xl">Pay Roll Services</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Managing payroll in Sweden and Denmark can be complex, with strict labor laws, tax regulations, and social security requirements. Our Payroll Services ensure that your operations are accurate, on time, and in full compliance with local legislation.
              </p>
              <ul className="space-y-1.5 mb-6">
                {[
                  'International companies hiring in Sweden or Denmark.',
                  'Local businesses looking for professional payroll management.',
                  'Companies expanding without needing complex payroll workflows.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
                    <Image src="/bullet.svg" alt="•" width={10} height={10} className="mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
