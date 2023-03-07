import { useEffect, useState } from 'react';

export const useWindowTop = () => {
  const [isWindowTopReached, setIsWindowTopReached] = useState(true);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      scrollY === 0 ? setIsWindowTopReached(true) : setIsWindowTopReached(false);
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [isWindowTopReached]);

  return isWindowTopReached;
};
