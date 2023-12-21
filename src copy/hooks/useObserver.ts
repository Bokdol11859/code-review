import { useEffect, useRef } from 'react';

import { InfiniteQueryObserverResult } from '@tanstack/react-query';

type observerProps = {
  threshold: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
};

export default function useObserver({
  threshold = 0.1,
  hasNextPage,
  fetchNextPage,
}: observerProps) {
  const target = useRef<HTMLDivElement | null>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target || !target.current) {
      return;
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });
    observer.observe(target?.current);
    return () => observer.disconnect();
  }),
    [target, threshold, observerCallback];

  return {
    target,
  };
}
