'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { Briefcase, User, Globe } from 'lucide-react';
import { motion } from 'framer-motion';


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
        <main className="min-h-screen bg-[#F8F9FE]">
            <Navbar />

            {/* Animations keyframes */}
            <style>{fadeInUp}</style>

            {/* Hero Section - Contact Style */}
            <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-[#EBF4FF]/50 to-[#EBF4FF]">
                <div className="pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 3xl:pb-36 4k:pb-40">
                    <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 3xl:gap-24 4k:gap-32 items-center">
                            {/* LEFT SIDE */}
                            <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9 3xl:space-y-12 4k:space-y-16" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 leading-tight">
                                    About Us
                                </h1>

                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl leading-relaxed">
                                    Your Trusted Nordic Relocation Partner Since 2015
                                </p>

                                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-2xl">
                                    We transform complex relocations into seamless journeys. From visa processing to finding your perfect home, from business setup to cultural integration—we handle every detail so you can focus on your new beginning in the Nordic region.
                                </p>
                            </div>

                            {/* RIGHT SIDE - ILLUSTRATION */}
                            <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0 lg:ml-auto" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                                <div className="relative rounded-2xl sm:rounded-3xl 3xl:rounded-[2.5rem] 4k:rounded-[4rem] overflow-hidden">
                                    <Image
                                        src="/businessman-analyzing-data.svg"
                                        alt="About Us Illustration"
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

            {/* Who We Are Section */}
            <section className="py-16 sm:py-20 lg:py-28 mt-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left - Content Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] order-2 lg:order-1 border-l-4 border-l-blue-500"
                        >
                            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
                                Who We Are
                            </p>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                                Your Trusted <span className="text-blue-600">Relocation</span> Partner
                            </h2>
                            <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                                <p>
                                    Founded in 2015, Sweden Relocators AB specializes in providing tailored relocation and mobility solutions for individuals and organizations moving to Nordic countries. We simplify the process of settling into a new country by offering comprehensive services that cater to both employers and employees.
                                </p>
                                <p>
                                    Whether you're relocating for work, education, or investment opportunities, we ensure a seamless transition with services like Destination Assistance, Global Mobility Solutions, Immigration Support, Move Management, and Property Management.
                                </p>
                                <p>
                                    Our web- and app-based portal provides an innovative solution for managing relocations. Employers can oversee the progress of employee transfers, while employees can track applications, explore housing and schools, and manage expenses efficiently—all in one place.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right - Illustration with Decorative Elements */}
                        <div className="relative w-full hidden lg:flex justify-center lg:justify-end order-1 lg:order-2 h-[260px] sm:h-[380px] lg:h-[500px]">
                            {/* Orange decorative shape - bottom left */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-tl-[80px] rounded-br-[80px] -z-10"
                                style={{ transform: 'rotate(-15deg)' }}
                            />

                            {/* Orange decorative shape - top right */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-br from-orange-500 to-orange-700 rounded-tl-[60px] rounded-br-[60px] -z-10"
                                style={{ transform: 'rotate(15deg)' }}
                            />

                            {/* Floating Stats Card - Top Left */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-8 left-4 bg-[#F8F9FE] p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-8deg)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl font-bold text-blue-600">2015</div>
                                    <div className="text-xs text-gray-600 leading-tight">Founded<br/>Since</div>
                                </div>
                            </motion.div>

                            {/* Floating Trust Badge - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-24 left-8 bg-[#F8F9FE] p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(5deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-xs font-semibold text-gray-700">Trusted</div>
                                </div>
                            </motion.div>

                            {/* Floating Services Badge - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                className="absolute top-12 right-8 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full shadow-xl z-10"
                            >
                                <Globe size={24} className="text-white" />
                            </motion.div>

                            {/* Main Illustration - No Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/c1.svg"
                                    alt="Sweden Relocators services illustration"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Solutions Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FE]">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    
                    {/* Employer Solutions */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-10 sm:mb-16 lg:mb-24">
                        {/* Left - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full hidden lg:flex items-center justify-center lg:justify-center order-2 lg:order-1"
                        >
                            {/* Yellow decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Blue decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-12 left-8 bg-[#F8F9FE] p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-8deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <Briefcase size={20} className="text-blue-600" />
                                    <div className="text-sm font-bold text-gray-800">Global Mobility</div>
                                </div>
                            </motion.div>

                            {/* Floating Check Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 left-12 bg-[#F8F9FE] p-3 rounded-xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(5deg)' }}
                            >
                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>

                            {/* Main Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/employer-solution.svg"
                                    alt="Employer Solutions"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 bg-[#F8F9FE] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-r-4 border-r-blue-500"
                        >
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Employer Solutions
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                                We assist employers in managing the complexities of relocating their workforce. Our comprehensive services ensure smooth transitions for your entire team.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Global Mobility Program Design: Tailored strategies for organization-wide compliance.",
                                    "Visa and Work Permit Assistance: Expert support for streamlined immigration processes.",
                                    "Move Coordination: Handling logistics, household goods shipment, and housing for employees and their families.",
                                    "Cultural Integration Programs: Workshops and training to help employees adapt smoothly."
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-gray-700"
                                    >
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Employee Solutions */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-10 sm:mb-16 lg:mb-24">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 bg-[#F8F9FE] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-l-4 border-l-blue-500"
                        >
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Employee & Family Solutions
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                                For individuals and their families, we provide end-to-end support to ease their transition into their new Nordic home.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Immigration Services: Assistance with visa applications and residence permits.",
                                    "Housing and School Search: Access to housing options and schools based on lifestyle, budget, and preferences.",
                                    "Orientation and Settling-In Support: Language courses and cultural orientation training.",
                                    "Digital Relocation Tools: Real-time updates and financial management through our app and portal."
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-gray-700"
                                    >
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Right - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full hidden lg:flex items-center justify-center lg:justify-center order-1 lg:order-2"
                        >
                            {/* Pink decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Green decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Home Icon Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-12 right-8 bg-[#F8F9FE] p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(8deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <User size={20} className="text-blue-600" />
                                    <div className="text-sm font-bold text-gray-800">Personal Support</div>
                                </div>
                            </motion.div>

                            {/* Floating Check Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 right-12 bg-[#F8F9FE] p-3 rounded-xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-5deg)' }}
                            >
                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>

                            {/* Main Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/employee-solutions.svg"
                                    alt="Employee Solutions"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Nordic Relocators - Denmark */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                        {/* Left - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full hidden lg:flex items-center justify-center lg:justify-center order-2 lg:order-1"
                        >
                            {/* Purple decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Orange decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Denmark Flag Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4}}
                                className="absolute top-12 left-8 bg-[#F8F9FE] p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(-8deg)' }}
                            >
                                <div className="flex items-center gap-2">
                                    <Globe size={20} className="text-blue-600" />
                                    <div className="text-sm font-bold text-gray-800">Nordic Expert</div>
                                </div>
                            </motion.div>

                            {/* Floating Check Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-20 left-12 bg-[#F8F9FE] p-3 rounded-xl shadow-xl z-10 border border-gray-100"
                                style={{ transform: 'rotate(5deg)' }}
                            >
                                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </motion.div>

                            {/* Main Illustration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-0"
                            >
                                <Image
                                    src="/Nordic-Relocators.svg"
                                    alt="Nordic Relocators Denmark"
                                    width={500}
                                    height={500}
                                    className="object-contain w-full max-w-[500px]"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 bg-[#F8F9FE] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-r-4 border-r-blue-500"
                        >
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4">
                                Nordic Relocators - Denmark
                            </h2>
                            <div className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                                <p>
                                    Expanding our expertise across the Nordic region, Nordic Relocators offers specialized services for moving to Denmark. Whether you're relocating an entire team or a single employee, we provide tailored solutions to address Denmark's specific requirements.
                                </p>
                                <p>
                                    From visa applications to housing and cultural integration, our services are designed to ensure a successful move. At Sweden Relocators AB and Nordic Relocators, we're committed to making every relocation efficient, stress-free, and rewarding, helping both employers and employees thrive in their new Nordic environment.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </main>
    );
}
