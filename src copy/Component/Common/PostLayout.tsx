'use client';
import styled from 'styled-components';
const StyledPostLayOut = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
  border-radius: 25px;
  margin: 25px auto;
  background: ${({ theme }) => theme.backgroundPost};
  max-width: 800px;
  width: 60%;

  @media ${({ theme }) => theme.device.laptop} {
    width: 80%;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

export default function PostLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return <StyledPostLayOut>{children}</StyledPostLayOut>;
}
