'use client';

import { uuid4 } from '@sentry/utils';
import styled from 'styled-components';

import useToc from '@/hooks/useToc';

import replaceStrWithBlank from '../../../lib/replaceStr';

const StyledTOCList = styled.ul`
  position: fixed;
  max-width: 235px;
  height: auto;
  max-height: 75vh;
  word-wrap: break-word;
  text-align: justify;
  width: 235px;
  margin-top: 100px;
  right: 0;
  opacity: 1;
  font-size: 15px;
  overflow-y: scroll;
  list-style-type: none;

  @media ${({ theme }) => theme.device.laptop} {
    opacity: 0;
  }

  @media ${({ theme }) => theme.device.tablet} {
    opacity: 0;
  }

  @media ${({ theme }) => theme.device.mobile} {
    opacity: 0;
  }
`;

const StyledTOCLink = styled.a`
  &:hover {
    color: rgb(0, 131, 120);
  }

  &:active {
    color: rgb(0, 131, 120);
  }
`;

export default function TOC({ toc }: { toc: string[] }) {
  const { id } = useToc();

  const TOC = toc.map((eachToc) => {
    const makeTOC = replaceStrWithBlank([eachToc, ['#', '##', '###', '####']]);

    const handleClickTOC = (e: React.MouseEvent<HTMLElement>) => {
      const activeElement = document.querySelector('.active');
      if (activeElement) {
        activeElement.classList.remove('active');
      }
      e.currentTarget.classList.add('active');
    };
    return (
      <>
        <li key={uuid4()}>
          <div>
            <StyledTOCLink
              className={`${makeTOC} ${id === makeTOC && 'active'}`}
              href={`#${makeTOC}`}
              id={makeTOC}
              onClick={handleClickTOC}
            >
              {makeTOC}
            </StyledTOCLink>
          </div>
        </li>
      </>
    );
  });

  return <StyledTOCList>{TOC}</StyledTOCList>;
}
