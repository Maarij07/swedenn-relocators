'use client';

import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { Briefcase, User, Globe, GraduationCap, Users, TrendingUp } from 'lucide-react';
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
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Animations keyframes */}
            <style>{fadeInUp}</style>

            {/* Hero Section - Card Style */}
            <section className="relative overflow-hidden border border-gray-300 rounded-lg mx-auto" style={{
                backgroundImage: 'url(/bg-new-in-sweden.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '1400px',
                maxWidth: 'calc(100% - 32px)',
                height: '289px',
                margin: '200px auto 0',
                marginTop: '160px'
            }}>
                {/* Overlay - Dark with #141A21 at 88% opacity */}
                <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(20, 26, 33, 0.88)' }}></div>

                <div className="relative h-full pt-6 sm:pt-8 pb-6 sm:pb-8 px-8 sm:px-10">
                    <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto h-full">
                        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
                            {/* Left Content */}
                            <div>
                                <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-bold text-white mb-2">
                                    About Us
                                </h1>
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-300 leading-[1.5] mb-2 font-medium">
                                    Your Trusted Nordic Relocation Partner Since 2015
                                </p>
                                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-400 leading-[1.5] pr-12 font-normal">
                                    We transform complex relocations into seamless journeys. From visa processing to finding your perfect home, from business setup to cultural integration—we handle every detail so you can focus on your new beginning in the Nordic region.
                                </p>
                            </div>

                            {/* Right - Illustration */}
                            <div className="relative w-full flex justify-center lg:justify-end">
                                <Image
                                    src="/service-illustration.svg"
                                    alt="About Sweden Relocators illustration"
                                    width={300}
                                    height={250}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
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
                            className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] order-2 lg:order-1"
                        >
                            <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
                                Who We Are
                            </p>
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-6">
                                Your Trusted <span className="text-blue-600">Relocation</span> Partner
                            </h2>
                            <div className="space-y-5 text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed">
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
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 px-8 py-3.5 bg-[#1a2332] text-white text-[15px] font-semibold rounded-lg hover:bg-[#2a3442] transition-colors duration-300 shadow-md"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Right - Illustration with Decorative Elements */}
                        <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2 h-[500px]">
                            {/* Orange decorative shape - bottom left */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-tl-[80px] rounded-br-[80px] -z-10"
                                style={{ transform: 'rotate(-15deg)' }}
                            />

                            {/* Orange decorative shape - top right */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-500 to-orange-700 rounded-tl-[60px] rounded-br-[60px] -z-10"
                                style={{ transform: 'rotate(15deg)' }}
                            />

                            {/* Floating Stats Card - Top Left */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-8 left-4 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
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
                                className="absolute bottom-24 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
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
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
                    
                    {/* Employer Solutions */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-24">
                        {/* Left - Illustration with Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative w-full flex items-center justify-center lg:justify-center order-2 lg:order-1"
                        >
                            {/* Yellow decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Blue decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
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
                                className="absolute bottom-20 left-12 bg-white p-3 rounded-xl shadow-xl z-10 border border-gray-100"
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
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-4">
                                Employer Solutions
                            </h2>
                            <p className="text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed mb-6">
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
                                        className="flex items-start gap-3 text-[#5f6c7b]"
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
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-24">
                        {/* Left - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-4">
                                Employee Solutions
                            </h2>
                            <p className="text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed mb-6">
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
                                        className="flex items-start gap-3 text-[#5f6c7b]"
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
                            className="relative w-full flex items-center justify-center lg:justify-center order-1 lg:order-2"
                        >
                            {/* Pink decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Green decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-green-200 to-green-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Home Icon Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute top-12 right-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
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
                                className="absolute bottom-20 right-12 bg-white p-3 rounded-xl shadow-xl z-10 border border-gray-100"
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
                                    src="/employee-solution.svg"
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
                            className="relative w-full flex items-center justify-center lg:justify-center order-2 lg:order-1"
                        >
                            {/* Purple decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full -z-10 opacity-60"
                            />

                            {/* Orange decorative shape */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full -z-10 opacity-50"
                            />

                            {/* Floating Denmark Flag Card */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4}}
                                className="absolute top-12 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 border border-gray-100"
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
                                className="absolute bottom-20 left-12 bg-white p-3 rounded-xl shadow-xl z-10 border border-gray-100"
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
                                    src="/relocators-denmark.svg"
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
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-[#1a2332] leading-tight mb-4">
                                Nordic Relocators - Denmark
                            </h2>
                            <div className="space-y-5 text-[#5f6c7b] text-[15px] sm:text-[16px] leading-relaxed mb-6">
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
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                                    <Image
                                        src="/image5.png"
                                        alt="Student Admission Services"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Student Admission Services</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    Assistance in choosing the right degree program and residence permit processing for international students.
                                </p>
                            </div>
                        </motion.div>

                        {/* Work & Business */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                                    <Image
                                        src="/image2.png"
                                        alt="Work & Business"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Work & Business</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    Assistance in registering a business, buying a new business, and preparing work permit applications for employees and employers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Family Relocation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                                    <Image
                                        src="/image1.png"
                                        alt="Family Relocation"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Family Relocation</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    We provide assistance in your family visa processing including your dependent parents and other family members.
                                </p>
                            </div>
                        </motion.div>

                        {/* Investment Solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                                    <Image
                                        src="/image3.png"
                                        alt="Investment Solutions"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Solutions</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    There are various opportunities for business ventures, look for the best opportunity to build your future.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
