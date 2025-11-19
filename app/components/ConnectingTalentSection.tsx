'use client';

import Image from 'next/image';

export default function ConnectingTalentSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-28">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-wide text-blue-400">
            From the moment you arrive to the time you depart
          </p>
          <h2 className="mt-2 text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 4k:text-[4rem] font-extrabold leading-tight text-slate-900">
            Connecting <span className="text-blue-600">Companies</span> with the <span className="text-blue-600">Right Talent</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 4k:gap-14">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 sm:w-[79px] sm:h-[79px] rounded-xl bg-blue-500 shadow-sm overflow-hidden">
                    <Image src="/b1.svg" alt="Employers" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl 4k:text-3xl font-bold text-slate-900">Simplify Recruitment</h3>
                    <p className="text-sm sm:text-base 4k:text-lg text-slate-500">For Employers Looking for Global Talent</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600">⋮</button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-slate-600">
                <Image src="/people.svg" alt="Candidates" width={18} height={18} />
                <span className="text-sm sm:text-base">223 candidates</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Remote/Physical Jobs</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Optimum Salary</li>
                </ul>
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Full/Part Timings</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Hierarchical Positions</li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors">Announce Job</button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 sm:w-[79px] sm:h-[79px] rounded-xl bg-blue-500 shadow-sm overflow-hidden">
                    <Image src="/b2.svg" alt="Job Seeker" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl 4k:text-3xl font-bold text-slate-900">Profile-Job Seeker</h3>
                    <p className="text-xs sm:text-sm text-slate-500">Posted date: 28 Jul 2025 7:00 AM</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600">⋮</button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-slate-600">
                <Image src="/peoples.svg" alt="Companies" width={18} height={18} />
                <span className="text-sm sm:text-base">2,203 companies</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Desired Location</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Best Salary Offerings</li>
                </ul>
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Flexible Availability</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-slate-300" />Future Career Goals</li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="px-5 py-2.5 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-slate-800 transition-colors">Create C.V</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}