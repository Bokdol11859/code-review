import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: 'contained' | 'outline';
  size: 'S' | 'L';
  children: React.ReactNode;
}

const base =
  'justify-center align-middle flex-shrink-0 hover:opacity-80 active:opacity-[64] disabled:opacity-[32]';

const variants = {
  contained: 'text-accent-text bg-accent-background',
  outline: 'text-accent-text-weak border border-accent-border-weak',
};

const sizes = {
  S: 'w-[120px] h-10 px-4 gap-1 text-S font-bold rounded-regular',
  L: 'w-60 h-14 px-6 gap-1 text-L font-bold rounded-large',
};

function Button({ variant, size, children, ...rest }: ButtonProps) {
  return (
    <button
      className={[base, variants[variant], sizes[size]].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
