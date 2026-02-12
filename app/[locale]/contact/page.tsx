import Navbar from '../../components/Navbar';
import Image from 'next/image';

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
    return (
        <main className="min-h-screen bg-white">
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
                                <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] 2xl:text-[3rem] 3xl:text-[3.25rem] 4k:text-[4rem] leading-[1.2] font-extrabold">
                                    <span className="block text-gray-900">Contact Us</span>
                                </h1>

                                <p className="text-[14px] sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] 3xl:text-[20px] 4k:text-[2rem] text-gray-600 leading-[1.7] max-w-xl 3xl:max-w-2xl 4k:max-w-5xl font-medium">
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
                            fill="white"
                            opacity="0.9"
                        />
                        <path
                            d="M0,60 C360,90 720,90 1080,60 C1260,45 1350,30 1440,30 L1440,100 L0,100 Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Our Services for a Seamless <span className="text-blue-600">Move to Sweden</span>
                        </h2>
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

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="sr-only">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-white text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Enter your message here"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors bg-white text-gray-900 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-[#1e293b] text-white font-semibold rounded-lg hover:bg-[#0f172a] transition-colors"
                                    >
                                        Submit Now
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Column: Map */}
                        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden">
                            <Image
                                src="/map1.svg"
                                alt="Map location"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="pb-16 sm:pb-20 lg:pb-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sweden Card */}
                        <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
                            <div className="bg-[#F0F5FF] px-6 py-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm">
                                    <Image
                                        src="https://flagcdn.com/w160/se.png"
                                        alt="Sweden Flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Sweden</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {/* Address */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/place1.svg" alt="Address" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Address</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        Krukmakargatan 19, 118 51 Stockholm, Sweden
                                    </p>
                                </div>

                                {/* Contact Number */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/contact.svg" alt="Phone" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Contact Number</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        +46 72 327 62 76
                                    </p>
                                </div>

                                {/* Email Address */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/contact.svg" alt="Email" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Email Address</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        info@swedenrelocators.se
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <button className="w-full py-3 bg-[#0B3B7C] text-white text-sm font-bold rounded-full hover:bg-[#092e61] transition-colors shadow-lg shadow-blue-900/20">
                                        View On Map
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Denmark Card */}
                        <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
                            <div className="bg-[#F0F5FF] px-6 py-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm">
                                    <Image
                                        src="https://flagcdn.com/w160/dk.png"
                                        alt="Denmark Flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Denmark</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {/* Address */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/place1.svg" alt="Address" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Address</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        Krukmakargatan 19, 118 51 Stockholm, Sweden
                                    </p>
                                </div>

                                {/* Contact Number */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/contact.svg" alt="Phone" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Contact Number</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        +46 72 327 62 76
                                    </p>
                                </div>

                                {/* Email Address */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/contact.svg" alt="Email" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Email Address</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        info@swedenrelocators.se
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <button className="w-full py-3 bg-[#0B3B7C] text-white text-sm font-bold rounded-full hover:bg-[#092e61] transition-colors shadow-lg shadow-blue-900/20">
                                        View On Map
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Portugal Card */}
                        <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
                            <div className="bg-[#F0F5FF] px-6 py-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm">
                                    <Image
                                        src="https://flagcdn.com/w160/pt.png"
                                        alt="Portugal Flag"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Portugal</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {/* Address */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/place1.svg" alt="Address" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Address</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        Krukmakargatan 19, 118 51 Stockholm, Sweden
                                    </p>
                                </div>

                                {/* Contact Number */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/contact.svg" alt="Phone" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Contact Number</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        +46 72 327 62 76
                                    </p>
                                </div>

                                {/* Email Address */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 relative flex-shrink-0">
                                            <Image src="/contact.svg" alt="Email" fill className="object-contain" />
                                        </div>
                                        <span className="font-bold text-gray-900 text-sm">Email Address</span>
                                    </div>
                                    <p className="text-xs text-gray-500 pl-8">
                                        info@swedenrelocators.se
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <button className="w-full py-3 bg-[#0B3B7C] text-white text-sm font-bold rounded-full hover:bg-[#092e61] transition-colors shadow-lg shadow-blue-900/20">
                                        View On Map
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
