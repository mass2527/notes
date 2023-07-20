import { ButtonHTMLAttributes } from 'react';
import { LoadingIcon } from './icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  color?: 'white' | 'red';
  isLoading?: boolean;
}

export function Button({
  type = 'button',
  variant = 'secondary',
  color = 'white',
  disabled,
  isLoading = false,
  children,
  ...props
}: Props) {
  return (
    <button
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      type={type}
      className={`flex justify-center items-center gap-2 px-3 h-10 rounded-md
      ${
        {
          primary: {
            white: 'bg-white text-black disabled:text-neutral-300',
            red: 'bg-red-500 text-white disabled:text-neutral-700',
          },
          secondary: {
            white: 'text-white border border-white disabled:text-neutral-500',
            red: 'text-red-500 border border-red-500 disabled:text-neutral-500',
          },
        }[variant][color]
      }
      `}
      {...props}
    >
      {isLoading && <LoadingIcon />}
      {children}
    </button>
  );
}
