import { useRef, useState, useEffect, useCallback } from 'react';

interface CarouselConfig {
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function useCarousel(config: CarouselConfig = {}) {
  const { autoPlay = true, autoPlayInterval = 5000 } = config;
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const checkScroll = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const firstChild = container.firstElementChild as HTMLElement | null;
      const styles = getComputedStyle(container);
      const gapPx = parseInt(styles.columnGap || styles.gap || '0', 10) || 0;
      const cardWidth = firstChild ? firstChild.getBoundingClientRect().width : 320;
      const step = cardWidth + gapPx; // scroll by exactly one card

      const newScrollLeft =
        direction === 'left' ? container.scrollLeft - step : container.scrollLeft + step;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 300);
    }
  }, [checkScroll]);

  const autoPlayScroll = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        // Reset to start
        carouselRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // Scroll right
        scroll('right');
      }
      
      setTimeout(checkScroll, 300);
    }
  }, [scroll, checkScroll]);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  useEffect(() => {
    if (!autoPlay) return;

    autoPlayTimerRef.current = setInterval(autoPlayScroll, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, autoPlayScroll]);

  return {
    carouselRef,
    canScrollLeft,
    canScrollRight,
    onScroll: checkScroll,
    scroll,
  };
}
