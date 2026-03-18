'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

export default function ContactPage() {
    interface ContactItem {
        name: string;
        registration_no: string;
        address: string;
        country: string;
        contact_number: string;
        secondary_contact_number?: string;
        email: string;
        latitude?: number | null;
        longitude?: number | null;
        is_head_office?: boolean;
    }

    const [contacts, setContacts] = useState<ContactItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitMsg, setSubmitMsg] = useState<string | null>(null);
    const [submitErr, setSubmitErr] = useState<string | null>(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const onChange =
        (key: keyof typeof form) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((f) => ({ ...f, [key]: e.target.value }));
        };

    const validEmail = (value: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitMsg(null);
        setSubmitErr(null);
        // basic validation
        if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
            setSubmitErr('Please fill out all fields.');
            return;
        }
        if (!validEmail(form.email)) {
            setSubmitErr('Please enter a valid email address.');
            return;
        }
        try {
            setSubmitting(true);
            const baseUrl = process.env.NEXT_PUBLIC_API_URL;
            const fd = new FormData();
            fd.append('name', form.name.trim());
            fd.append('email', form.email.trim());
            fd.append('subject', form.subject.trim());
            fd.append('message', form.message.trim());
            const res = await fetch(`${baseUrl}/miscellaneous/contact/form/email`, {
                method: 'POST',
                body: fd,
            });
            if (!res.ok) {
                const text = await res.text().catch(() => '');
                throw new Error(text || 'Failed to send email');
            }
            const payload: any = await res.json().catch(() => ({}));
            setSubmitMsg(payload?.message || 'Email sent successfully.');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch (err: any) {
            setSubmitErr('Unable to send your message. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // simple in-memory cache with TTL
    const CACHE_KEY = '__srContactsCache';
    const CACHE_TTL = 1000 * 60 * 60; // 1 hour

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const now = Date.now();
                const g: any = globalThis as any;
                if (g[CACHE_KEY] && now - g[CACHE_KEY].ts < CACHE_TTL) {
                    setContacts(g[CACHE_KEY].data as ContactItem[]);
                    setLoading(false);
                    return;
                }
                const baseUrl = process.env.NEXT_PUBLIC_API_URL;
                const res = await fetch(`${baseUrl}/miscellaneous/contact/details`);
                if (!res.ok) throw new Error('Failed to fetch contact details');
                const raw: any = await res.json();
                const list: ContactItem[] = Array.isArray(raw?.data) ? raw.data : [];
                // Keep a stable order: Sweden, Denmark, Norway, Portugal; include others if present
                const order = ['Sweden', 'Denmark', 'Norway', 'Portugal'];
                const sorted = [
                    ...order.map(c => list.find(i => i.country === c)).filter(Boolean) as ContactItem[],
                    ...list.filter(i => !order.includes(i.country)),
                ];
                setContacts(sorted);
                g[CACHE_KEY] = { data: sorted, ts: now };
                setError(null);
            } catch (e) {
                setError('Failed to load contact locations');
                setContacts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    const flagCodeFor = (country: string) => {
        const map: Record<string, string> = {
            Sweden: 'se',
            Denmark: 'dk',
            Norway: 'no',
            Portugal: 'pt',
            'United Kingdom': 'gb',
        };
        return map[country] || 'se';
    };

    const mapsLink = (address: string) =>
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <main className="min-h-screen bg-[#F8F9FE]">
            <Navbar />

            {/* Animations keyframes */}
            <style>{fadeInUp}</style>

            {/* Hero-style header */}
            <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#EBF4FF]/50 to-[#EBF4FF]">
                <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 3xl:pb-36 4k:pb-40">
                    <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 3xl:gap-24 4k:gap-32 items-center">
                            {/* LEFT SIDE */}
                            <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9 3xl:space-y-12 4k:space-y-16" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 leading-tight">
                                    Contact Us
                                </h1>

                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
                                    Find us at your nearest location, or reach us digitally anytime through our web and app.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 3xl:gap-6 4k:gap-8 pt-2">
                                    <button className="px-7 sm:px-8 md:px-9 3xl:px-14 4k:px-22 py-3 sm:py-3.5 md:py-4 3xl:py-6 4k:py-9 text-[14px] sm:text-[15px] md:text-base 3xl:text-lg 4k:text-3xl font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                                        Get in Touch
                                    </button>
                                    <button className="px-7 sm:px-8 md:px-9 3xl:px-14 4k:px-22 py-3 sm:py-3.5 md:py-4 3xl:py-6 4k:py-9 text-[14px] sm:text-[15px] md:text-base 3xl:text-lg 4k:text-3xl font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
                                        Visit Locations
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT SIDE - ILLUSTRATION */}
                            <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0 lg:ml-auto" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                                <div className="relative rounded-2xl sm:rounded-3xl 3xl:rounded-[2.5rem] 4k:rounded-[4rem] overflow-hidden">
                                    <Image
                                        src="/contact-us-illustration.svg"
                                        alt="Contact Us"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WAVE */}
                <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
                    <svg
                        className="relative block w-full h-[100px] sm:h-[120px] lg:h-[140px] 3xl:h-[180px] 4k:h-[240px]"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 100"
                    >
                        <path
                            d="M0,50 C360,80 720,80 1080,50 C1260,35 1350,20 1440,20 L1440,100 L0,100 Z"
                            fill="#F8F9FE"
                            opacity="0.9"
                        />
                        <path
                            d="M0,60 C360,90 720,90 1080,60 C1260,45 1350,30 1440,30 L1440,100 L0,100 Z"
                            fill="#F8F9FE"
                        />
                    </svg>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    {/* Section Header */}
                    <div className="flex flex-col items-center mx-auto mb-16 sm:mb-20" style={{width:'1500px', maxWidth:'calc(100% - 12px)'}}>
                        <div className="bg-[#f2f7fd] border-l-4 border-[#247FE1] rounded-xl px-6 py-7 flex flex-col items-center w-full">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-2">
                                Our Services for a Seamless
                            </h2>
                            <span className="block text-[#247FE1] text-base sm:text-lg lg:text-xl font-semibold text-center mt-1">
                                Move to Sweden
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Column: Form */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                    Feel free to contact us.
                                </h3>
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    We'll be glad to hear from you, buddy.
                                </h3>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        value={form.name}
                                        onChange={onChange('name')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-[#F4F6F8] text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={onChange('email')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-[#F4F6F8] text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        value={form.subject}
                                        onChange={onChange('subject')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-[#F4F6F8] text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Enter your message here"
                                        value={form.message}
                                        onChange={onChange('message')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-white text-gray-900 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="px-8 py-3 bg-[#1e293b] text-white font-semibold rounded-lg hover:bg-[#0f172a] transition-colors disabled:opacity-60"
                                    >
                                        {submitting ? 'Sending…' : 'Submit Now'}
                                    </button>
                                </div>
                                {submitErr && (
                                    <p className="text-sm text-red-600">{submitErr}</p>
                                )}
                                {submitMsg && (
                                    <p className="text-sm text-green-600">{submitMsg}</p>
                                )}
                            </form>
                        </div>

                        {/* Right Column: Map */}
                        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8267642744984!2d18.060925077051243!3d59.31677387463709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e551556c8d%3A0x8b0e1e8e0e8e0e8e!2sKrukmakargatan%2019%2C%20118%2051%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sweden Office Location"
                                className="absolute inset-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="pb-16 sm:pb-20 lg:pb-24 bg-transparent">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    {loading && (
                        <p className="text-gray-600 text-sm">Loading locations…</p>
                    )}
                    {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                    )}
                    {!loading && !error && (
                        <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-gray-100">
                            {/* Header */}
                            <div className="bg-[#0f172a] px-8 py-6 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-white text-base sm:text-lg lg:text-xl font-bold">Our Global Offices</h2>
                                    <p className="text-white/60 text-xs sm:text-sm">Find us across Europe</p>
                                </div>
                            </div>

                            {/* Office columns — row-based layout for perfect cross-column alignment */}
                            <div className="bg-[#F8F9FE]">

                                {/* Row 1: Country names */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                                    {contacts.slice(0, 4).map((loc) => (
                                        <div key={`name-${loc.country}`} className="px-6 sm:px-8 py-5 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden relative shadow flex-shrink-0">
                                                <Image
                                                    src={`https://flagcdn.com/w160/${flagCodeFor(loc.country)}.png`}
                                                    alt={`${loc.country} Flag`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{loc.country}</h3>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 2: Address */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                                    {contacts.slice(0, 4).map((loc) => (
                                        <div key={`addr-${loc.country}`} className="px-6 sm:px-8 py-5 flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-5 h-5 text-[#247FE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Address</p>
                                                <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{loc.address}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 3: Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                                    {contacts.slice(0, 4).map((loc) => (
                                        <div key={`phone-${loc.country}`} className="px-6 sm:px-8 py-5 flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-5 h-5 text-[#247FE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Phone</p>
                                                <p className="text-xs sm:text-sm lg:text-base text-gray-700">{loc.contact_number}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 4: Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
                                    {contacts.slice(0, 4).map((loc) => (
                                        <div key={`email-${loc.country}`} className="px-6 sm:px-8 py-5 flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-5 h-5 text-[#247FE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Email</p>
                                                <p className="text-xs sm:text-sm lg:text-base text-gray-700 break-all">{loc.email}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 5: View on Map */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                                    {contacts.slice(0, 4).map((loc) => (
                                        <div key={`map-${loc.country}`} className="px-6 sm:px-8 py-5">
                                            <a
                                                href={mapsLink(loc.address)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[#247FE1] text-xs sm:text-sm lg:text-base font-semibold hover:gap-3 transition-all duration-200"
                                            >
                                                <span>View on Map</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
