import { useState, useEffect } from 'react';

export default function useToc() {
  const [id, setId] = useState<string>('');

  useEffect(() => {
    const getH2Element = Array.from(document.querySelectorAll('h2'));
    const getH3Element = Array.from(document.querySelectorAll('h3'));

    const getAllHeaderElement = [...getH2Element, ...getH3Element];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const getTOCElement = document.getElementsByClassName(
            entry.target.textContent as string
          );
          if (!getTOCElement[0]) {
            return;
          }
          if (getTOCElement && entry.isIntersecting) {
            setId(getTOCElement[0].id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-50px 0px 0px 0px',
      }
    );

    getAllHeaderElement.forEach((eachHeaderElement) => {
      io.observe(eachHeaderElement);
    });

    return () => io.disconnect();
  }, []);

  return { id };
}
