import { RefObject, useEffect, useMemo, useState } from 'react';

export default function useOnScreen(ref: RefObject<any>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== 'undefined') {
      return new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    } else {
      return null;
    }
  }, [ref]);

  useEffect(() => {
    observer?.observe(ref.current);
    return () => observer?.disconnect();
  }, []);

  return isIntersecting;
}
