import { useState, useEffect } from 'react';

export default function useScroll({
  target,
  options,
}: {
  target: HTMLElement | null | HTMLElement[];
  options: IntersectionObserverInit;
}) {
  const [isFetching, setIsFetching] = useState(false);
  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsFetching(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(intersectionCallback, options);
    if (target instanceof HTMLElement) {
      observer.observe(target);
      return;
    }

    if (target instanceof Array) {
      target.forEach((eachTarget) => {
        observer.observe(eachTarget);
      });
    }
  }, [options, target]);

  return { isFetching };
}
