import Navbar from '../../components/Navbar';
import { Briefcase, User, Globe, GraduationCap, Users, TrendingUp } from 'lucide-react';

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

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Animations keyframes */}
            <style>{fadeInUp}</style>

            {/* Hero-style header */}
            <section className="relative overflow-hidden bg-[#EBF4FF]">
                <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-16 sm:pb-20 lg:pb-24">
                    <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                        <div
                            className="text-center max-w-3xl mx-auto"
                            style={{ animation: 'fadeInUp 0.8s ease-out' }}
                        >
                            <h1 className="text-[1.9rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.1rem] 2xl:text-[3.3rem] 3xl:text-[4rem] 4k:text-[6rem] font-bold leading-tight text-gray-900 mb-4">
                                About Us
                            </h1>
                            <p className="mt-4 text-[14px] sm:text-[15px] md:text-base lg:text-[17px] xl:text-[18px] 3xl:text-[20px] 4k:text-[2rem] text-gray-900 leading-relaxed font-semibold uppercase tracking-wide">
                                Welcome To SWEDEN RELOCATORS AB
                            </p>
                            <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 3xl:text-[19px] 4k:text-[1.8rem] text-gray-600 leading-relaxed">
                                SWEDEN RELOCATORS AB was established in 2015.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
                        <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
                            Who We Are
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            Your Trusted <span className="text-blue-600">Relocation</span> Partner
                        </h2>
                        <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed text-justify sm:text-center">
                            <p>
                                Founded in 2015, Sweden Relocators AB specializes in providing tailored relocation and mobility solutions for individuals and organizations moving to Nordic countries. We simplify the process of settling into a new country by offering comprehensive services that cater to both employers and employees. Whether you're relocating for work, education, or investment opportunities, we ensure a seamless transition with services like Destination Assistance, Global Mobility Solutions, Immigration Support, Move Management, and Property Management.
                            </p>
                            <p>
                                Our web- and app-based portal provides an innovative solution for managing relocations. Employers can oversee the progress of employee transfers, while employees can track applications, explore housing and schools, and manage expenses efficiently - all in one place.
                            </p>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="space-y-8">
                        {/* Employer Solutions */}
                        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Employer Solutions</h3>
                                    <p className="text-gray-600 mb-4">We assist employers in managing the complexities of relocating their workforce. Services include:</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Global Mobility Program Design: Tailored strategies for organization-wide compliance.",
                                            "Visa and Work Permit Assistance: Expert support for streamlined immigration processes.",
                                            "Move Coordination: Handling logistics, household goods shipment, and housing for employees and their families.",
                                            "Cultural Integration Programs: Workshops and training to help employees adapt smoothly."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Employee Solutions */}
                        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Solutions</h3>
                                    <p className="text-gray-600 mb-4">For individuals and their families, we provide end-to-end support to ease their transition, including:</p>
                                    <ul className="space-y-3">
                                        {[
                                            "Immigration Services: Assistance with visa applications and residence permits.",
                                            "Housing and School Search: Access to housing options and schools based on lifestyle, budget, and preferences.",
                                            "Orientation and Settling-In Support: Language courses and cultural orientation training.",
                                            "Digital Relocation Tools: Real-time updates and financial management through our app and portal."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Nordic Relocators - Denmark */}
                        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Nordic Relocators - Denmark</h3>
                                    <div className="space-y-4 text-gray-600">
                                        <p>
                                            Expanding our expertise across the Nordic region, Nordic Relocators offers specialized services for moving to Denmark. Whether you're relocating an entire team or a single employee, we provide tailored solutions to address Denmark's specific requirements. From visa applications to housing and cultural integration, our services are designed to ensure a successful move.
                                        </p>
                                        <p>
                                            At Sweden Relocators AB and Nordic Relocators, we're committed to making every relocation efficient, stress-free, and rewarding, helping both employers and employees thrive in their new Nordic environment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specializations Section */}
            <section className="pb-16 sm:pb-20 lg:pb-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
                        <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
                            Specializations
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            What we <span className="text-blue-600">do best</span>
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Student Admission Services */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Student Admission Services</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Assistance in choosing the right degree program and residence permit processing for international students.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Work & Business */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Work & Business</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Assistance in registering a business, buying a new business, and preparing work permit applications for employees and employers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Family Relocation */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Family Relocation</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        We provide assistance in your family visa processing including your dependent parents and other family members.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Investment Solutions */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Investment Solutions</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        There are various opportunities for business ventures, look for the best opportunity to build your future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
