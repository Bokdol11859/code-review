'use client';
import styled from 'styled-components';

const StyledPostExterct = styled.h5`
  color: #808080;
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 14px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 13px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 11px;
  }
`;

export default function PostExterct({ exterct }: { exterct: string }) {
  return <StyledPostExterct>{exterct}</StyledPostExterct>;
}
