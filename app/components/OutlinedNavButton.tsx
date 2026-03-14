'use client';

import React from 'react';

interface OutlinedNavButtonProps {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * OutlinedNavButton Component
 * 
 * Styled as per design guidelines:
 * - Border: light grey (grey.500/32)
 * - Text: dark grey (#1F2937)
 * - Background: transparent
 * - Hover: border becomes dark, subtle grey background, outline shadow
 * - Transition: 200ms ease-in-out
 * 
 * @param href - URL destination
 * @param label - Button text/label
 * @param target - Link target (_blank, etc)
 * @param rel - Link rel attribute (noopener noreferrer)
 * @param className - Additional Tailwind classes for custom styling
 * @param onClick - Optional click handler
 */
export default function OutlinedNavButton({
  href,
  label,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  onClick,
}: OutlinedNavButtonProps) {
  const baseStyles =
    'px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-medium text-[#1C252E] bg-transparent border border-[#1C252E]/40 rounded-lg hover:border-[#1C252E] hover:shadow-[0_0_0_0.75px_#1C252E] transition-all duration-200 whitespace-nowrap';

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
