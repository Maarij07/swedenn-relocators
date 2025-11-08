'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      
      {/* Top Info Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="flex items-center justify-between h-9 sm:h-10 4k:h-16 text-[11px] sm:text-xs 4k:text-xl text-gray-600">
            
            {/* Left side stats */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 4k:gap-12">
              <span className="whitespace-nowrap">Employment Rate: 69.6%</span>
              <span className="whitespace-nowrap">Education Rate: 85.2%</span>
              <span className="whitespace-nowrap">Gender Ratio: 1:1</span>
              <span className="flex items-center gap-1.5 4k:gap-3">
                <span className="text-base 4k:text-2xl">🇸🇪</span>
                <span>Sweden</span>
              </span>
            </div>
            
            {/* Right side - FLAG & LANGUAGE */}
            <div className="ml-auto flex items-center gap-4 lg:gap-6 4k:gap-12">
              {/* Swedish Flag */}
              <div className="flex items-center gap-1.5 4k:gap-3">
                <div className="w-4 h-3 4k:w-8 4k:h-6 bg-blue-600 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/3 bg-blue-600"></div>
                  <div className="absolute top-1/3 left-0 w-full h-1/3 bg-yellow-400"></div>
                  <div className="absolute top-2/3 left-0 w-full h-1/3 bg-blue-600"></div>
                  <div className="absolute top-0 left-1/4 w-1/6 h-full bg-yellow-400"></div>
                </div>
                <span>Swedish</span>
              </div>
              
              {/* English Flag */}
              <button className="flex items-center gap-1.5 4k:gap-3 hover:opacity-80 transition-opacity">
                <div className="w-4 h-3 4k:w-8 4k:h-6 bg-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600"></div>
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(90deg, transparent 30%, white 30%, white 35%, transparent 35%, transparent 65%, white 65%, white 70%, transparent 70%),
                                linear-gradient(transparent 45%, white 45%, white 55%, transparent 55%)`
                  }}></div>
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(90deg, transparent 30%, red 30%, red 35%, transparent 35%, transparent 65%, red 65%, red 70%, transparent 70%),
                                linear-gradient(transparent 45%, red 45%, red 55%, transparent 55%)`
                  }}></div>
                </div>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
          <div className="flex items-center justify-between h-16 sm:h-20 4k:h-32">
            
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <div className="relative w-36 sm:w-44 lg:w-48 4k:w-96 h-10 sm:h-12 4k:h-24">
                <Image 
                  src="/logo.png" 
                  alt="Sweden Relocators" 
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 4k:gap-14">
              <a 
                href="/new-in-sweden" 
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                New in Sweden
              </a>
              
              <button className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium">
                Services
                <svg className="w-4 h-4 4k:w-7 4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <a 
                href="/about" 
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                About us
              </a>
              
              <button className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium">
                Housing
                <svg className="w-4 h-4 4k:w-7 4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button className="flex items-center gap-1 text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium">
                Assessment
                <svg className="w-4 h-4 4k:w-7 4k:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <a 
                href="/contact" 
                className="text-sm xl:text-[15px] 4k:text-2xl text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap font-medium"
              >
                Contact us
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 4k:gap-6 flex-shrink-0">
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap">
                Book an Appointment
              </button>
              <button className="px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-2 space-y-1 border-t border-gray-100">
              <a href="/new-in-sweden" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                New in Sweden
              </a>
              <a href="/services" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Services
              </a>
              <a href="/about" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                About us
              </a>
              <a href="/housing" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Housing
              </a>
              <a href="/assessment" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Assessment
              </a>
              <a href="/contact" className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                Contact us
              </a>
              
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <button className="w-full px-4 py-3 text-base text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Book an Appointment
                </button>
                <button className="w-full px-4 py-3 text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}