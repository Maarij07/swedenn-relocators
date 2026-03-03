/**
 * Theme styling utilities
 */

/**
 * Converts a color to a variant with alpha/opacity
 */
export function varAlpha(color, alpha) {
  if (!color) return 'transparent';
  
  // If it's already an rgba or hsla, replace the alpha
  if (color.includes('rgba') || color.includes('hsla')) {
    return color.replace(/[\d\.]+\)/, `${alpha})`);
  }
  
  // If it's a hex color, convert to rgba
  if (color.startsWith('#')) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  // Return as-is if not recognized
  return color;
}

/**
 * Creates a background gradient style object
 */
export function bgGradient({ color, imgUrl }) {
  const hasImage = imgUrl && imgUrl.trim();
  
  if (!hasImage) {
    return {
      background: `linear-gradient(${color})`,
    };
  }

  return {
    background: `linear-gradient(${color}), url('${imgUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
}

/**
 * Additional theme styles utilities
 */
export const stylesMode = {
  light: {},
  dark: {},
};

export const maxLine = (lines = 1) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
});

export const varHover = () => ({
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    opacity: 0.8,
  },
});
