import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  color?: 'white' | 'red';
}

export function Button({
  type = 'button',
  variant = 'secondary',
  color = 'white',
  children,
  ...props
}: Props) {
  const Component = 'button';

  return (
    <Component
      type={type}
      className={`py-1 px-4 rounded-full ${
        {
          primary: {
            white: 'bg-white text-black disabled:bg-neutral-500',
            red: 'bg-red-500 text-white disabled:bg-neutral-500 disabled:text-black',
          },
          secondary: {
            white:
              'text-white border border-white disabled:text-neutral-500 disabled:border-neutral-500',
            red: 'text-red-500 border border-red-500 disabled:text-neutral-500 disabled:border-neutral-500',
          },
        }[variant][color]
      }`}
      {...props}
    >
      {children}
    </Component>
  );
}
