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
        <div className="py-12 sm:py-16 lg:py-20 4k:py-28 border-t border-[#1f2933] mt-10">
          {/* Top Row - Logo, Sections, Useful Links, Legal, Contact */}
          <div className="grid grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Column 1 - Logo & description */}
            <div className="col-span-1">
              <div className="flex items-start gap-2 mb-2 -mt-2">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <Image src="/favicon.ico" alt="Sweden Relocators" width={28} height={28} />
                </div>
              </div>

              <p className="text-[11px] sm:text-[12px] text-[#cbd5e1] leading-relaxed">
                {isSv
                  ? 'Vi är en relocation‑leverantör som arbetar med alla typer av laglig flytt till Sverige. Vi erbjuder digitalt stödda ansökningsprocesser och hjälper dig med rådgivning och tjänster för att etablera dig i landet.'
                  : 'We are a Relocation Services Provider Company which deals with all sort of legal relocation to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down in the country.'}
              </p>
            </div>

            {/* Column 2 - Sections */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'SEKTIONER' : 'SECTIONS'}
              </h4>
              <ul className="space-y-1.5 text-[11px] sm:text-[12px] text-[#cbd5e1]">
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
                    {isSv ? 'Tjänster' : 'Services'}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/blogs`} className="hover:text-white transition-colors">
                    {isSv ? 'Bloggar' : 'Blogs'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Useful Links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'NYTTIGA LÄNKAR' : 'USEFUL LINKS'}
              </h4>
              <ul className="space-y-1.5 text-[11px] sm:text-[12px] text-[#cbd5e1]">
                <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Vanliga frågor' : 'FAQs'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Karriär' : 'Careers'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Omdömen' : 'Testimonials'}</a></li>
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'JURIDIK' : 'LEGAL'}
              </h4>
              <ul className="space-y-1.5 text-[11px] sm:text-[12px] text-[#cbd5e1]">
                <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Villkor' : 'Terms and condition'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Integritetspolicy' : 'Privacy policy'}</a></li>
              </ul>
            </div>

            {/* Column 5 - Contact */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'KONTAKT' : 'CONTACT'}
              </h4>
              <div className="space-y-1.5 text-[11px] sm:text-[12px] text-[#cbd5e1]">
                <p>info@swedenrelocators.se</p>
                <p>support@swedenrelocators.se</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1f2933] my-10 lg:my-12"></div>

          {/* Bottom Row - Reach Us, Visit Us, Get App, Partner Network */}
          <div className="grid grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Reach Us */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'KONTAKTA OSS' : 'REACH US'}
              </h4>
              <div className="space-y-2 text-[11px] sm:text-[12px] text-[#cbd5e1]">
                <p>support@swedenrelocators.se</p>
                <p>info@swedenrelocators.se</p>
                <p>+46 723 276 276</p>
                <p>+46 10 2146 276</p>

                {/* REG / CVR with rounded flags */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/24x18/se.png"
                      alt="Sweden flag"
                      className="w-4 h-4 rounded-full object-cover border border-[#1f2937]"
                    />
                    <span>REG 559025-2648</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/24x18/dk.png"
                      alt="Denmark flag"
                      className="w-4 h-4 rounded-full object-cover border border-[#1f2937]"
                    />
                    <span>CVR 41200677</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div className="col-span-2 ml-27">
              <h4 className="text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'BESÖK OSS' : 'VISIT US'}
              </h4>
              <div className="space-y-4">
                <div className="relative w-fit h-32 rounded-lg overflow-hidden bg-[#1a2332]">
                  <Image src="/map.svg" alt="Our offices" width={280} height={128} className="object-cover" />
                </div>
                <div className="space-y-2 text-[11px] sm:text-[12px] text-[#cbd5e1]">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    </svg>
                    <div>
                      <p className="font-semibold">Arenagatan 86E 214 37 Malmö, Sweden</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    </svg>
                    <div>
                      <p className="font-semibold">Roskildevel 30B, 2620 Albertslund, Denmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-span-2 flex flex-col max-w-md">
              {/* Top: GET OUR FREE APP heading and JOIN OUR PARTNER NETWORK button */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <h4 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#e2e8f0] whitespace-nowrap">
                  {isSv ? 'VÅR APP' : 'GET OUR FREE APP'}
                </h4>
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[9px] sm:text-[10px] font-semibold rounded-lg transition-colors whitespace-nowrap">
                  {isSv ? 'BLI VÅR PARTNER' : 'JOIN OUR PARTNER NETWORK'}
                </button>
              </div>

              {/* Download our App text and buttons */}
              <div>
                <p className="text-[11px] sm:text-[12px] text-[#cbd5e1] mb-3">
                  {isSv ? 'Ladda ner vår app' : 'Download our App'}
                </p>
                <div className="flex gap-3 mb-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
                  >
                    <Image
                      src="/apple.svg"
                      alt="Apple"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-[0.35rem] font-light text-slate-600 uppercase tracking-wide">
                        DOWNLOAD ON THE
                      </span>
                      <span className="font-semibold text-[0.55rem] text-slate-900 -mt-0.5">
                        App Store
                      </span>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
                  >
                    <Image
                      src="/playstore.svg"
                      alt="Google Play"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-[0.35rem] font-light text-slate-600 uppercase tracking-wide">
                        GET IT ON
                      </span>
                      <span className="font-semibold text-[0.55rem] text-slate-900 -mt-0.5">
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Follow Us */}
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#e2e8f0]">
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
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
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
          <div className="border-t border-[#1f2933] pt-6 flex items-center justify-center">
            <p className="text-[10px] sm:text-[11px] text-[#94a3b8] text-center">
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
