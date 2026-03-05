/**
 * ============================================
 * NAVBAR DROPDOWN COMPLETE STYLING GUIDE
 * ============================================
 * This file contains all CSS, colors, gradients,
 * and styling properties for the navbar dropdown component
 */

import { styled } from '@mui/material/styles';
import Popover, { popoverClasses } from '@mui/material/Popover';

// ============================================
// GRADIENT BACKGROUND SHAPES - SVG BASE64
// ============================================

/**
 * CYAN SHAPE - Top Right Gradient
 * Radial gradient: #00B8D9 (bright cyan) fading to transparent
 * Positioned: top right
 * Opacity: 0.1 overlay on background
 */
const cyanShape =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDQ2NF81NTMzOCkiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDQ2NF81NTMzOCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAgMS44MTgxMmUtMDUpIHJvdGF0ZSgtNDUpIHNjYWxlKDEyMy4yNSkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBCOEQ5Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwQjhEOSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==';

/**
 * RED SHAPE - Bottom Left Gradient
 * Radial gradient: #FF5630 (orange-red) fading to transparent
 * Positioned: left bottom
 * Opacity: 0.1 overlay on background
 */
const redShape =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWxfNDQ2NF81NTMzNykiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfNDQ2NF81NTMzNyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyMCkgcm90YXRlKDEzNSkgc2NhbGUoMTIzLjI1KSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjU2MzAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY1NjMwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K';

// ============================================
// DROPDOWN PAPER COMPONENT - STYLED
// ============================================

/**
 * NavDropdownPaper - The main dropdown container
 * 
 * PROPERTIES:
 * - minWidth: 180px (from CSS var --nav-dropdown-width)
 * - width: 200px
 * - padding: 4px
 * - borderRadius: 12px
 * - backgroundColor: rgba(255, 255, 255, 0.9) - 90% opaque white
 * - backdropFilter: blur(20px) - Applies blur to content behind it
 * - boxShadow: theme.customShadows.dropdown
 * 
 * BACKGROUND GRADIENTS:
 * Background Image 1: Cyan radial gradient (top right)
 * Background Image 2: Red radial gradient (bottom left)
 * Background Size: 50% x 50% each
 * Background Repeat: no-repeat
 * Background Position: 
 *   - LTR (Left to Right): top right, left bottom
 *   - RTL (Right to Left): top left, right bottom
 */
export const NavDropdownPaper = styled('div')(({ theme }) => ({
  // Dimensions
  minWidth: 180,
  width: 'var(--nav-dropdown-width)', // 200px
  
  // Padding & Border Radius
  padding: theme.spacing(2), // 16px
  borderRadius: `${theme.shape.borderRadius * 1.25}px`, // 12px (default borderRadius is 4px * 1.25)
  
  // ========== BACKGROUND STYLING ==========
  // Gradient shapes (SVG)
  backgroundImage: [
    `url(${cyanShape})`,    // Cyan radial gradient
    `url(${redShape})`,     // Red/Orange radial gradient
  ],
  
  // Size of each background image
  backgroundSize: ['50%', '50%'],
  
  // Position (adjusts for RTL)
  backgroundPosition: theme.direction === 'rtl' 
    ? ['top left', 'right bottom']  // RTL positioning
    : ['top right', 'left bottom'], // LTR positioning
  
  backgroundRepeat: 'no-repeat',
  
  // ========== BLUR & TRANSPARENCY ==========
  // Blur effect (20px)
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)', // Webkit support (Safari, Chrome)
  
  // Background color - Semi-transparent white
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // 90% opacity
  
  // ========== SHADOW ==========
  // Dropdown shadow (depth effect)
  boxShadow: '0px 12px 24px -4px rgba(145, 158, 171, 0.08)',
}));

// ============================================
// DROPDOWN POPOVER COMPONENT - STYLED
// ============================================

/**
 * NavDropdown - The Popover wrapper for the dropdown
 * 
 * PROPERTIES:
 * - pointerEvents: 'none' (default - allows clicking through)
 * - pointerEvents: 'auto' (when open - allows interaction)
 * - boxShadow: 'none' (remove default popover shadow)
 * - background: 'transparent' (use background from NavDropdownPaper)
 * - padding: theme.spacing(0, 0.75) = 0px vertical, 6px horizontal
 * - overflow: 'unset' (allow content to overflow)
 * - backdropFilter: 'none' (let NavDropdownPaper handle blur)
 */
export const NavDropdown = styled(Popover)(({ open, theme }) => ({
  // Pointer events - disabled by default, enabled when open
  pointerEvents: 'none',
  
  // Popover paper styling
  [`& .${popoverClasses.paper}`]: {
    // Remove default styling
    boxShadow: 'none',
    overflow: 'unset',
    backdropFilter: 'none',
    background: 'transparent',
    
    // Horizontal padding (6px on each side)
    padding: theme.spacing(0, 0.75),
    
    // Enable pointer events when dropdown is open
    ...(open && { 
      pointerEvents: 'auto',
    }),
  },
}));

export default { NavDropdownPaper, NavDropdown };
