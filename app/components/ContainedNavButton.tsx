'use client';

import React from 'react';

interface ContainedNavButtonProps {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * ContainedNavButton Component
 * 
 * Styled as per design guidelines:
 * - Background: dark grey (Grey[800] - #1F294E)
 * - Text: white (#FFFFFF)
 * - Border: none
 * - Hover: adds elevation shadow (z8 level), opacity to 0.93
 * - Transition: 250ms ease-out
 * 
 * @param href - URL destination
 * @param label - Button text/label
 * @param target - Link target (_blank, etc)
 * @param rel - Link rel attribute (noopener noreferrer)
 * @param className - Additional Tailwind classes for custom styling
 * @param onClick - Optional click handler
 */
export default function ContainedNavButton({
  href,
  label,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  onClick,
}: ContainedNavButtonProps) {
  const baseStyles =
    'px-4 4k:px-12 py-[6px] 4k:py-6 text-[0.875rem] leading-[1.75] 4k:text-2xl font-bold text-white bg-[#1C252E] rounded-lg shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] hover:bg-[#2C3A47] hover:shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)] transition-all duration-200 whitespace-nowrap';

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
