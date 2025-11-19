import Image from 'next/image';

export default function BusinessMarketplaceSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24 py-12 sm:py-16 lg:py-20 4k:py-24">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-slate-900 font-extrabold tracking-tight text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem] 4k:text-[3.25rem]">
            Buy or <span className="text-[#2563eb]">List your Business</span> To Sell
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Card 1 */}
          <article className="rounded-3xl bg-slate-50 border border-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image src="/b1.svg" alt="Restaurant in Central Malmo" width={32} height={32} className="shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[0.7rem] sm:text-[0.75rem] text-slate-500 font-medium">Restaurant in Central Malmo</p>
                  <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400">The Heart of Malmo, Sweden</p>
                </div>
              </div>
              <span className="inline-flex h-6 items-center rounded-full bg-slate-50 px-2 text-[0.65rem] text-slate-400">
                120 Visitors
              </span>
            </div>

            <div className="px-5 pt-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/r1.svg"
                  alt="Restaurant business for sale"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="px-5 pt-4 pb-5 space-y-3 text-[0.8rem] sm:text-[0.85rem]">
              <div className="flex items-center justify-between text-[0.65rem] text-slate-400">
                <span>Posted date: 2025-08-28 03:00 PM</span>
                <span className="font-semibold text-slate-500">300,000 SEK</span>
              </div>

              <h3 className="text-slate-900 font-semibold text-sm sm:text-base">
                Restaurant Business for Sale
              </h3>

              <div className="space-y-1.5 text-slate-500">
                <div className="flex items-center gap-2">
                  <Image src="/location.svg" alt="Location" width={14} height={14} />
                  <span>Malmo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/time.svg" alt="Updated" width={14} height={14} />
                  <span>Listed on 2025-08-12</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/peoples.svg" alt="Visitors" width={14} height={14} />
                  <span>250 Visitors</span>
                </div>
              </div>

              <div className="pt-3">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[0.8rem] font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:bg-slate-50 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="rounded-3xl bg-slate-50 border border-slate-100 shadow-[0_24px_80px_rgba(15,23,42,0.06)] overflow-hidden">
            <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Image src="/b2.svg" alt="Advertisement Agency" width={32} height={32} className="shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[0.7rem] sm:text-[0.75rem] text-slate-500 font-medium">Advertisement Agency</p>
                  <p className="text-[0.65rem] sm:text-[0.7rem] text-slate-400">Online Business Opportunity</p>
                </div>
              </div>
              <span className="inline-flex h-6 items-center rounded-full bg-slate-50 px-2 text-[0.65rem] text-slate-400">
                85 Visitors
              </span>
            </div>

            <div className="px-5 pt-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/r2.svg"
                  alt="Online advertisement business"
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="px-5 pt-4 pb-5 space-y-3 text-[0.8rem] sm:text-[0.85rem]">
              <div className="flex items-center justify-between text-[0.65rem] text-slate-400">
                <span>Posted date: 2025-08-28 02:30 PM</span>
                <span className="font-semibold text-slate-500">150,000 SEK</span>
              </div>

              <h3 className="text-slate-900 font-semibold text-sm sm:text-base">
                Online Advertisement Agency with clients
              </h3>

              <div className="space-y-1.5 text-slate-500">
                <div className="flex items-center gap-2">
                  <Image src="/location.svg" alt="Location" width={14} height={14} />
                  <span>Malmo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/time.svg" alt="Updated" width={14} height={14} />
                  <span>Listed on 2025-08-23</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/peoples.svg" alt="Visitors" width={14} height={14} />
                  <span>1k Visitors</span>
                </div>
              </div>

              <div className="pt-3">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[0.8rem] font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:bg-slate-50 transition-colors">
                  List Your Business
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
