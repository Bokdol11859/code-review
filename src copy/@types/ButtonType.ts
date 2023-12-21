import { CSSProperties } from 'react';

export type ButtonProps = {
  style?: CSSProperties;
  disabled?: boolean;
  variant?: 'default' | 'outlined';
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};
