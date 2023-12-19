import { useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  isCapture = true
) {
  const ref = useRef<T>(null!);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        const target = e.target as Node;
        if (ref.current && !ref.current.contains(target)) {
          handler();
        }
      }

      document.addEventListener('click', handleClick, isCapture);

      return () =>
        document.removeEventListener('click', handleClick, isCapture);
    },
    [handler, isCapture]
  );

  return ref;
}
