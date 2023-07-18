import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  color?: 'orange' | 'red';
}

export function Button({
  type = 'button',
  variant = 'secondary',
  color = 'orange',
  children,
  ...props
}: Props) {
  const Component = 'button';

  return (
    <Component
      type={type}
      className={`p-1 rounded ${
        {
          primary: {
            orange: 'bg-orange-500 text-white',
            red: 'bg-red-500 text-white',
          },
          secondary: {
            orange: 'border border-orange-500 text-orange-500',
            red: 'border border-red-500 text-red-500',
          },
        }[variant][color]
      }`}
      {...props}
    >
      {children}
    </Component>
  );
}
