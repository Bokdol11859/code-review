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
  return <StyledPostLayOut>{children}</StyledPostLayOut>;
}
