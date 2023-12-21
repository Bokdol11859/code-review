'use client';
import { useEffect } from 'react';

import styled, { css } from 'styled-components';

const PostLayOutPC = css`
  min-width: 60%;
  max-width: 60%;
`;
const PostLayOutMobile = css`
  min-width: 80%;
  max-width: 80%;
`;

const StyledPostLayOut = styled.article`
  ${PostLayOutPC}
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  margin-bottom: 50px;
  font-size: 20px;

  @media ${({ theme }) => theme.device.laptop} {
    ${PostLayOutPC}
  }

  @media ${({ theme }) => theme.device.tablet} {
    ${PostLayOutPC}
  }

  @media ${({ theme }) => theme.device.mobile} {
    ${PostLayOutMobile}
  }
`;

export default function BlogLayOut({
  children,
}: {
  children: React.ReactNode[];
}) {
  useEffect(() => {
    const getH2Element = Array.from(document.querySelectorAll('h2'));
    const getH3Element = Array.from(document.querySelectorAll('h3'));

    const getAllHeaderElement = [...getH2Element, ...getH3Element];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const getTOC = entry.target.textContent as string;
          const getTOCElement = document.getElementsByClassName(
            entry.target.textContent as string
          );
          if (!getTOCElement[0]) {
            return;
          }
          if (getTOCElement && entry.isIntersecting) {
            getTOCElement[0].classList.add('active');
          } else if (getTOCElement && !entry.isIntersecting) {
            getTOCElement[0].classList.remove('active');
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

  return <StyledPostLayOut>{children}</StyledPostLayOut>;
}
