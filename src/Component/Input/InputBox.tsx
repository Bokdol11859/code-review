import styled from 'styled-components';

const InputBox = styled.div<{
  width?: string;
  isError?: boolean;
  color?: string;
}>`
  display: flex;
  height: 45px;
  width: ${({ width }) => width ?? '100%'};

  padding: 12px;

  box-sizing: border-box;
  background: ${({ color }) => color ?? 'gray'};

  border: 1px solid ${({ isError }) => (isError ? '#ec2f1b' : '#ecebf1')};
  border-radius: 7px;
`;

export default InputBox;
