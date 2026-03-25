'use client';

import { useTranslation } from 'react-i18next';

export default function RelocateToSwedenPage() {
  const { i18n } = useTranslation();
  const isSv = i18n.language === 'sv';

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-[160px] sm:pt-[180px] lg:pt-[200px] xl:pt-[220px] 4k:pt-[260px] pb-20 sm:pb-24 lg:pb-28 xl:pb-32 4k:pb-40">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <h1 className="text-2xl xs:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl 4k:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          {isSv ? 'Flytta till Sverige' : 'Relocate to Sweden'}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl">
          {isSv ? 'Personnummer och relocation' : 'Personal identification number'}
        </p>
      </div>
    </div>
  );
}
