import type { ButtonProps } from '@/@types/ButtonType';

import styled from 'styled-components';

const StyledBaseButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.backgroundPost};
  font-weight: bold;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(66, 153, 225, 0.7);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  color: ${({ theme }) => theme.text};
  transition: icon 0.3s ease-in-out;
  border: ${(props) =>
    props.variant === 'outlined' ? '1px rgba(255,255,255,1)' : 'none'};
`;

export default function Button({
  variant,
  style,
  disabled,
  icon,
  onClick,
  label,
}: ButtonProps) {
  return (
    <StyledBaseButton
      style={style}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      variant={variant}
    >
      {icon}
      {label}
    </StyledBaseButton>
  );
}
