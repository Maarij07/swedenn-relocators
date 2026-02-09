'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { useParams } from 'next/navigation';

export default function Footer() {
  const { i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isSv = i18n.language === 'sv';

  return (
    <footer className="bg-[#0f141a] text-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <div className="py-10 sm:py-14 lg:py-16 4k:py-20 border-t border-[#1f2933] mt-10">
          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 xl:gap-16 mb-10 lg:mb-12">
            {/* Column 1 - Logo & description */}
            <div className="space-y-5 max-w-sm">
              <div className="flex items-center gap-3">
                {/* Logo without extra white background */}
                <div className="w-11 h-11 flex items-center justify-center">
                  <Image src="/favicon.ico" alt="Sweden Relocators" width={32} height={32} />
                </div>
                <p className="font-semibold text-sm sm:text-base tracking-wide"></p>
              </div>

              <p className="text-xs sm:text-[13px] text-[#cbd5e1] leading-relaxed">
                {isSv
                  ? 'Vi är en relocation‑leverantör som arbetar med alla typer av laglig flytt till Sverige. Vi erbjuder digitalt stödda ansökningsprocesser och hjälper dig med rådgivning och tjänster för att etablera dig i landet.'
                  : 'We are a Relocation Services Provider company who deals with all kinds of legal relocation to Sweden. We offer digitally assisted application processes and provide guidance and services to settle down in the country.'}
              </p>

              <div className="space-y-2 text-xs sm:text-[13px] text-[#e2e8f0]">
                <p className="font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">
                  {isSv ? 'KONTAKTA OSS' : 'REACH US'}
                </p>
                <p>support@swedenrelocators.se</p>
                <p>info@swedenrelocators.se</p>
                <p>+46 723 276 276-7</p>
                <p>+46 10 2146 276</p>

                {/* REG / CVR with rounded flags */}
                <div className="space-y-1 pt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/24x18/se.png"
                      alt="Sweden flag"
                      className="w-5 h-5 rounded-full object-cover border border-[#1f2937]"
                    />
                    <span>REG 559025-2648</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/24x18/dk.png"
                      alt="Denmark flag"
                      className="w-5 h-5 rounded-full object-cover border border-[#1f2937]"
                    />
                    <span>CVR 41200677</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 - Sections & Visit us (map) */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm sm:text-[15px] font-semibold mb-3 tracking-wide">
                  {isSv ? 'SEKTIONER' : 'SECTIONS'}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#cbd5e1]">
                  <li>
                    <a href={`/${locale}/about`} className="hover:text-white transition-colors">
                      {isSv ? 'Om oss' : 'About us'}
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/contact`} className="hover:text-white transition-colors">
                      {isSv ? 'Kontakta oss' : 'Contact us'}
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/services`} className="hover:text-white transition-colors">
                      {isSv ? 'Våra tjänster' : 'Our services'}
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/blogs`} className="hover:text-white transition-colors">
                      {isSv ? 'Bloggar' : 'Blogs'}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm sm:text-[15px] font-semibold tracking-wide">
                  {isSv ? 'BESÖK OSS' : 'VISIT US'}
                </h4>
                <div className="flex items-center gap-3">
                  <div className="relative w-32 h-20 sm:w-36 sm:h-24">
                    <Image src="/map.svg" alt="Our offices" fill className="object-contain" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-[13px] text-[#cbd5e1]">
                    <p>
                      <span className="font-semibold">Arenagatan 208C,</span> 215 32 Malmö, Sweden
                    </p>
                    <p>
                      <span className="font-semibold">Frederikskaj 10F,</span> 2450 Copenhagen, Denmark
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Useful & Legal */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm sm:text-[15px] font-semibold mb-3 tracking-wide">
                  {isSv ? 'NYTTIGA LÄNKAR' : 'USEFUL LINKS'}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#cbd5e1]">
                  <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Vanliga frågor' : 'FAQs'}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Karriär' : 'Careers'}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Omdömen' : 'Testimonials'}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm sm:text-[15px] font-semibold mb-3 tracking-wide">
                  {isSv ? 'JURIDIK' : 'LEGAL'}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#cbd5e1]">
                  <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Villkor' : 'Terms and conditions'}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Integritetspolicy' : 'Privacy policy'}</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4 - Contact, app & socials */}
            <div className="space-y-6">
              <div className="space-y-2 text-xs sm:text-[13px] text-[#e2e8f0]">
                <h4 className="text-sm sm:text-[15px] font-semibold tracking-wide">
                  {isSv ? 'KONTAKT' : 'CONTACT'}
                </h4>
                <p>info@swedenrelocators.se</p>
                <p>support@swedenrelocators.se</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm sm:text-[15px] font-semibold tracking-wide">
                  {isSv ? 'LADDA NER VÅR GRATISAPP' : 'GET OUR FREE APP'}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#cbd5e1]">
                  {isSv ? 'Ladda ner vår app' : 'Download our App'}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all duration-300"
                  >
                    <Image
                      src="/apple.svg"
                      alt="Apple"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-[0.38rem] font-light text-slate-600 uppercase tracking-wide">
                        DOWNLOAD ON THE
                      </span>
                      <span className="font-semibold text-[0.65rem] text-slate-900 -mt-0.5">
                        App Store
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all duration-300"
                  >
                    <Image
                      src="/playstore.svg"
                      alt="Google Play"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-[0.38rem] font-light text-slate-600 uppercase tracking-wide">
                        GET IT ON
                      </span>
                      <span className="font-semibold text-[0.65rem] text-slate-900 -mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm sm:text-[15px] font-semibold tracking-wide">
                  {isSv ? 'FÖLJ OSS' : 'FOLLOW US'}
                </h4>
                <div className="flex items-center gap-2.5">
                  {[
                    { icon: '/f1.svg', url: 'https://facebook.com/swedenrelocators', label: 'Facebook' },
                    { icon: '/f2.svg', url: 'https://instagram.com/swedenrelocators', label: 'Instagram' },
                    { icon: '/f3.svg', url: 'https://linkedin.com/company/swedenrelocators', label: 'LinkedIn' },
                    { icon: '/f4.svg', url: 'https://twitter.com/swedenrelocators', label: 'Twitter' },
                    { icon: '/f5.svg', url: 'https://youtube.com/@swedenrelocators', label: 'YouTube' },
                    { icon: '/f6.svg', url: 'https://wa.me/46723276276', label: 'WhatsApp' },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_6px_18px_rgba(15,23,42,0.45)] hover:bg-slate-100 transition-colors"
                      aria-label={social.label}
                    >
                      <Image src={social.icon} alt={social.label} width={16} height={16} className="object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1f2933] pt-5 mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[11px] sm:text-xs text-[#94a3b8] text-center sm:text-left">
              {isSv
                ? '© 2024 SWEDEN RELOCATORS AB. Drivs av RELOFY TECH AB.'
                : '© 2024 SWEDEN RELOCATORS AB. Powered by RELOFY TECH AB.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
