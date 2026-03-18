'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

export default function Footer() {
  const { i18n } = useTranslation();
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isSv = i18n.language === 'sv';

  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterName) return;
    setNewsletterStatus('loading');
    try {
      const formData = new FormData();
      formData.append('email', newsletterEmail);
      formData.append('full_name', newsletterName);
      formData.append('source', 'website');
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/miscellaneous/newsletter/subscribe`, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Failed');
      setNewsletterStatus('success');
      setNewsletterMsg('You\'re subscribed! Thanks for joining.');
      setNewsletterName('');
      setNewsletterEmail('');
    } catch {
      setNewsletterStatus('error');
      setNewsletterMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-[#0f141a] text-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <div className="py-12 sm:py-16 lg:py-20 4k:py-28 border-t border-[#1f2933] mt-10">
          {/* Top Row - Logo, Sections, Useful Links, Legal, Contact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-12 lg:mb-16">
            {/* Column 1 - Logo & description */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                {isSv
                  ? 'Vi är en relocation‑leverantör som arbetar med alla typer av laglig flytt från och till Sverige. Vi erbjuder digitalt stödda ansökningsprocesser och hjälper dig med rådgivning och tjänster för att etablera dig i landet.'
                  : 'We are a Relocation Services Provider Company which deals with all sort of legal relocation from and to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down in the country.'}
              </p>
            </div>

            {/* Column 2 - Sections */}
            <div>
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'SEKTIONER' : 'SECTIONS'}
              </h4>
              <ul className="space-y-1.5 text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1]">
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
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'NYTTIGA LÄNKAR' : 'USEFUL LINKS'}
              </h4>
              <ul className="space-y-1.5 text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1]">
                <li><a href={`/${locale}/faqs`} className="hover:text-white transition-colors">{isSv ? 'Vanliga frågor' : 'FAQs'}</a></li>
                <li><a href={`/${locale}/career`} className="hover:text-white transition-colors">{isSv ? 'Karriär' : 'Careers'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{isSv ? 'Omdömen' : 'Testimonials'}</a></li>
                <li><a href={`/${locale}/gallery`} className="hover:text-white transition-colors">{isSv ? 'Galleri' : 'Gallery'}</a></li>
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'JURIDIK' : 'LEGAL'}
              </h4>
              <ul className="space-y-1.5 text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1]">
                <li><a href={`/${locale}/terms-and-conditions`} className="hover:text-white transition-colors">{isSv ? 'Villkor' : 'Terms and condition'}</a></li>
                <li><a href={`/${locale}/privacy-policy`} className="hover:text-white transition-colors">{isSv ? 'Integritetspolicy' : 'Privacy policy'}</a></li>
              </ul>
            </div>

            {/* Column 5 - Contact */}
            <div>
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'KONTAKT' : 'CONTACT'}
              </h4>
              <div className="space-y-1.5 text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1]">
                <p>info@swedenrelocators.se</p>
                <p>support@swedenrelocators.se</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-[#1f2933] mt-10 lg:mt-12 pt-10 lg:pt-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#e2e8f0] mb-1">
                  Subscribe to our Newsletter
                </h4>
                <p className="text-xs sm:text-sm text-[#cbd5e1]">
                  Stay updated with relocation news, tips, and offers.
                </p>
              </div>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row w-full lg:w-auto gap-2"
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={newsletterName}
                  onChange={(e) => setNewsletterName(e.target.value)}
                  required
                  className="flex-1 lg:w-48 bg-[#1a2332] border border-[#2d3f55] text-[#cbd5e1] placeholder-[#4a5568] text-xs sm:text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[#247FE1] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 lg:w-64 bg-[#1a2332] border border-[#2d3f55] text-[#cbd5e1] placeholder-[#4a5568] text-xs sm:text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[#247FE1] transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-5 py-2.5 bg-[#247FE1] hover:bg-[#1a6fd4] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
            {newsletterStatus === 'success' && (
              <p className="mt-3 text-xs sm:text-sm text-green-400">{newsletterMsg}</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="mt-3 text-xs sm:text-sm text-red-400">{newsletterMsg}</p>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-[#1f2933] my-10 lg:my-12"></div>

          {/* Bottom Row - Reach Us, Visit Us, GDPR, Get App, Partner Network */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 mb-12 lg:mb-16">
            {/* Reach Us */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2">
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'KONTAKTA OSS' : 'REACH US'}
              </h4>
              <div className="space-y-2 text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1]\">
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
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/24x18/no.png"
                      alt="Norway flag"
                      className="w-4 h-4 rounded-full object-cover border border-[#1f2937]"
                    />
                    <span>Reg: 935 858 457</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/24x18/pt.png"
                      alt="Portugal flag"
                      className="w-4 h-4 rounded-full object-cover border border-[#1f2937]"
                    />
                    <span>NIPC: 516843052</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-3 lg:ml-0">
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-4 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'BESÖK OSS' : 'VISIT US'}
              </h4>
              <div className="space-y-4">
                <div className="relative w-fit h-32 rounded-lg overflow-hidden ">
                  <Image src="/map.svg" alt="Our offices" width={280} height={128} className="object-cover" />
                </div>
                <div className="space-y-2 text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1]">
                  <div className="flex items-start gap-2">
                    <img
                      src="https://flagcdn.com/24x18/se.png"
                      alt="Sweden"
                      className="w-5 h-4 rounded-sm flex-shrink-0 mt-0.5 object-cover border border-gray-600"
                    />
                    <div>
                      <p className="font-semibold">Amiralsgatan 86E 214 37 Malmo, Sweden</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      src="https://flagcdn.com/24x18/dk.png"
                      alt="Denmark"
                      className="w-5 h-4 rounded-sm flex-shrink-0 mt-0.5 object-cover border border-gray-600"
                    />
                    <div>
                      <p className="font-semibold">Roskildevej 30B, 2620 Albertslund, Denmark</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Our Free App & Partner Network & GDPR Badge */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-7 flex flex-col">
              {/* Top: GET OUR FREE APP heading and JOIN OUR PARTNER NETWORK button */}
              <div className="flex items-start justify-between gap-4 mb-6">
              <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                  {isSv ? 'VÅR APP' : 'GET OUR FREE APP'}
                </h4>
                <a
                  href={`/${locale}/partners`}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  {isSv ? 'BLI VÅR PARTNER' : 'JOIN OUR PARTNER NETWORK'}
                </a>
              </div>

              {/* Download our App text and buttons */}
              <div>
                <p className="text-sm xl:text-[15px] 4k:text-2xl text-[#cbd5e1] mb-3">
                  {isSv ? 'Ladda ner vår app' : 'Download our App'}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://apps.apple.com/ca/app/sweden-relocators/id1621885091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <Image
                      src="/apple.svg"
                      alt="Apple"
                      width={20}
                      height={20}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-normal text-slate-500 uppercase tracking-wide">Download on the</span>
                      <span className="text-sm font-semibold text-slate-900">App Store</span>
                    </div>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=se.swedenrelocators.sweden_relocators"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <Image
                      src="/playstore.svg"
                      alt="Google Play"
                      width={20}
                      height={20}
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-normal text-slate-500 uppercase tracking-wide">Get it on</span>
                      <span className="text-sm font-semibold text-slate-900">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Follow Us & GDPR */}
              <div className="-mt-16 flex items-end justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <h4 className="text-sm xl:text-[15px] 4k:text-2xl font-semibold tracking-wide uppercase text-[#e2e8f0]">
                    {isSv ? 'ANSLUT TILL OSS' : 'CONNECT WITH US'}
                  </h4>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://www.facebook.com/Swedenrelocators/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="Facebook"
                    >
                      <Image src="/f1.svg" alt="Facebook" width={16} height={16} className="object-contain" />
                    </a>
                    <a
                      href="https://x.com/swedenrelocator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="Twitter"
                    >
                      <Image src="/f2.svg" alt="Twitter" width={16} height={16} className="object-contain" />
                    </a>
                    <a
                      href="https://www.instagram.com/sweden_relocators/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="Instagram"
                    >
                      <Image src="/f3.svg" alt="Instagram" width={16} height={16} className="object-contain" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCa5vSxO9UajNMUluDBloi2w"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="YouTube"
                    >
                      <Image src="/f4.svg" alt="YouTube" width={16} height={16} className="object-contain" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/swedenrelocators/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Image src="/f5.svg" alt="LinkedIn" width={16} height={16} className="object-contain" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@swedenrelocators"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="TikTok"
                    >
                      <Image src="/f6.svg" alt="TikTok" width={16} height={16} className="object-contain" />
                    </a>
                    <a
                      href="https://wa.me/46723276276"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <Image src="/icons8-whatsapp.svg" alt="WhatsApp" width={16} height={16} className="object-contain" />
                    </a>
                  </div>
                </div>

                {/* GDPR Badge next to social icons */}
                <div className="flex-shrink-0">
                  <Image
                    src="/GDPR.svg"
                    alt="GDPR Compliant"
                    width={168}
                    height={168}
                    className="w-32 h-32 lg:w-36 lg:h-36 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1f2933] pt-6 flex items-center justify-center">
            <p className="text-sm sm:text-base text-[#94a3b8] text-center">
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
