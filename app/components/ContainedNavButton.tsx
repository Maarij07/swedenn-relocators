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
    'px-5 xl:px-6 4k:px-12 py-2.5 xl:py-3 4k:py-6 text-sm xl:text-[15px] 4k:text-2xl font-semibold text-white bg-[#1C252E] rounded-lg hover:bg-[#2C3A47] hover:shadow-[0px_8px_16px_-4px_rgba(28,37,46,0.48)] transition-all duration-200 whitespace-nowrap';

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
