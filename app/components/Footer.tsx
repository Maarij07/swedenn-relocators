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
      setNewsletterMsg("You're subscribed! Thanks for joining.");
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
        <div className="py-10 sm:py-14 lg:py-20 4k:py-28 border-t border-[#1f2933] mt-10">

          {/* ── TOP ROW: Description + Nav columns ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">

            {/* Description */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                {isSv
                  ? 'Vi är en relocation‑leverantör som arbetar med alla typer av laglig flytt från och till Sverige. Vi erbjuder digitalt stödda ansökningsprocesser och hjälper dig med rådgivning och tjänster för att etablera dig i landet.'
                  : 'We are a Relocation Services Provider Company which deals with all sort of legal relocation from and to Sweden. We offers quality guidance, effective advice and provides information to our clients to settle down in the country.'}
              </p>
            </div>

            {/* Sections */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'SEKTIONER' : 'SECTIONS'}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#cbd5e1]">
                <li><a href={`/${locale}/about`} className="hover:text-white transition-colors">{isSv ? 'Om oss' : 'About us'}</a></li>
                <li><a href={`/${locale}/contact`} className="hover:text-white transition-colors">{isSv ? 'Kontakta oss' : 'Contact us'}</a></li>
                <li><a href={`/${locale}/services`} className="hover:text-white transition-colors">{isSv ? 'Tjänster' : 'Services'}</a></li>
                <li><a href={`/${locale}/blogs`} className="hover:text-white transition-colors">{isSv ? 'Bloggar' : 'Blogs'}</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'NYTTIGA LÄNKAR' : 'USEFUL LINKS'}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#cbd5e1]">
                <li><a href={`/${locale}/faqs`} className="hover:text-white transition-colors">{isSv ? 'Vanliga frågor' : 'FAQs'}</a></li>
                <li><a href={`/${locale}/career`} className="hover:text-white transition-colors">{isSv ? 'Karriär' : 'Careers'}</a></li>
                <li><a href={`/${locale}/testimonials`} className="hover:text-white transition-colors">{isSv ? 'Omdömen' : 'Testimonials'}</a></li>
                <li><a href={`/${locale}/gallery`} className="hover:text-white transition-colors">{isSv ? 'Galleri' : 'Gallery'}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'JURIDIK' : 'LEGAL'}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#cbd5e1]">
                <li><a href={`/${locale}/terms-and-conditions`} className="hover:text-white transition-colors">{isSv ? 'Villkor' : 'Terms and condition'}</a></li>
                <li><a href={`/${locale}/privacy-policy`} className="hover:text-white transition-colors">{isSv ? 'Integritetspolicy' : 'Privacy policy'}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'KONTAKT' : 'CONTACT'}
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-[#cbd5e1]">
                <p>info@swedenrelocators.se</p>
                <p>support@swedenrelocators.se</p>
              </div>
            </div>
          </div>

          {/* ── NEWSLETTER ── */}
          <div className="border-t border-[#1f2933] pt-8 sm:pt-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#e2e8f0] mb-1">
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
                  className="w-full sm:w-auto sm:flex-1 lg:w-44 bg-[#1a2332] border border-[#2d3f55] text-[#cbd5e1] placeholder-[#4a5568] text-xs sm:text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[#247FE1] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full sm:w-auto sm:flex-1 lg:w-60 bg-[#1a2332] border border-[#2d3f55] text-[#cbd5e1] placeholder-[#4a5568] text-xs sm:text-sm rounded-lg px-4 py-2.5 outline-none focus:border-[#247FE1] transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#247FE1] hover:bg-[#1a6fd4] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
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

          {/* ── DIVIDER ── */}
          <div className="border-t border-[#1f2933] my-8 sm:my-10 lg:my-12"></div>

          {/* ── BOTTOM ROW: Reach Us · Visit Us · App + Social + GDPR ── */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-10 mb-10 sm:mb-12 lg:mb-16">

            {/* Reach Us */}
            <div className="flex-shrink-0 lg:w-48 xl:w-56">
              <h4 className="text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'KONTAKTA OSS' : 'REACH US'}
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm text-[#cbd5e1]">
                <p>support@swedenrelocators.se</p>
                <p>info@swedenrelocators.se</p>
                <p>+46 723 276 276</p>
                <p>+46 10 2146 276</p>
                <div className="space-y-1.5 pt-2">
                  {[
                    { flag: 'se', label: 'REG 559025-2648' },
                    { flag: 'dk', label: 'CVR 41200677' },
                    { flag: 'no', label: 'Reg: 935 858 457' },
                    { flag: 'pt', label: 'NIPC: 516843052' },
                  ].map(({ flag, label }) => (
                    <div key={flag} className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/24x18/${flag}.png`}
                        alt={flag}
                        className="w-4 h-4 rounded-full object-cover border border-[#1f2937] flex-shrink-0"
                      />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex-shrink-0 lg:w-56 xl:w-64">
              <h4 className="text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase text-[#e2e8f0]">
                {isSv ? 'BESÖK OSS' : 'VISIT US'}
              </h4>
              <div className="space-y-4">
                <div className="relative w-fit h-32 rounded-lg overflow-hidden">
                  <Image src="/map.svg" alt="Our offices" width={280} height={128} className="object-cover" />
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#cbd5e1]">
                  <div className="flex items-start gap-2">
                    <img src="https://flagcdn.com/24x18/se.png" alt="Sweden" className="w-5 h-4 rounded-sm flex-shrink-0 mt-0.5 object-cover border border-gray-600" />
                    <p className="font-semibold">Amiralsgatan 86E 214 37 Malmo, Sweden</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src="https://flagcdn.com/24x18/dk.png" alt="Denmark" className="w-5 h-4 rounded-sm flex-shrink-0 mt-0.5 object-cover border border-gray-600" />
                    <p className="font-semibold">Roskildevej 30B, 2620 Albertslund, Denmark</p>
                  </div>
                </div>
              </div>
            </div>

            {/* App + Social + GDPR */}
            <div className="flex-1 flex flex-col gap-6">

              {/* App heading + Partner button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h4 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#e2e8f0]">
                  {isSv ? 'VÅR APP' : 'GET OUR FREE APP'}
                </h4>
                <a
                  href={`/${locale}/partners`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  {isSv ? 'BLI VÅR PARTNER' : 'JOIN OUR PARTNER NETWORK'}
                </a>
              </div>

              {/* Download buttons */}
              <div>
                <p className="text-xs sm:text-sm text-[#cbd5e1] mb-3">
                  {isSv ? 'Ladda ner vår app' : 'Download our App'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://apps.apple.com/ca/app/sweden-relocators/id1621885091"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <Image src="/apple.svg" alt="Apple" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
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
                    <Image src="/playstore.svg" alt="Google Play" width={20} height={20} className="w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] font-normal text-slate-500 uppercase tracking-wide">Get it on</span>
                      <span className="text-sm font-semibold text-slate-900">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social + GDPR */}
              <div className="flex items-end justify-between gap-4">
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#e2e8f0]">
                    {isSv ? 'ANSLUT TILL OSS' : 'CONNECT WITH US'}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { href: 'https://www.facebook.com/Swedenrelocators/', src: '/f1.svg', label: 'Facebook' },
                      { href: 'https://x.com/swedenrelocator', src: '/f2.svg', label: 'Twitter' },
                      { href: 'https://www.instagram.com/sweden_relocators/', src: '/f3.svg', label: 'Instagram' },
                      { href: 'https://www.youtube.com/channel/UCa5vSxO9UajNMUluDBloi2w', src: '/f4.svg', label: 'YouTube' },
                      { href: 'https://www.linkedin.com/in/swedenrelocators/', src: '/f5.svg', label: 'LinkedIn' },
                      { href: 'https://www.tiktok.com/@swedenrelocators', src: '/f6.svg', label: 'TikTok' },
                      { href: 'https://wa.me/46723276276', src: '/icons8-whatsapp.svg', label: 'WhatsApp' },
                    ].map(({ href, src, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(15,23,42,0.3)] hover:bg-slate-100 transition-colors"
                        aria-label={label}
                      >
                        <Image src={src} alt={label} width={16} height={16} className="object-contain" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/GDPR.svg"
                    alt="GDPR Compliant"
                    width={128}
                    height={128}
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="border-t border-[#1f2933] pt-6 flex items-center justify-center">
            <p className="text-xs sm:text-sm text-[#94a3b8] text-center">
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
