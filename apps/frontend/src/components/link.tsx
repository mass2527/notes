import { ComponentProps } from 'react';
import { Link as LinkComponent } from 'react-router-dom';

interface Props extends ComponentProps<typeof LinkComponent> {
  variant?: 'primary' | 'secondary';
  color?: 'orange' | 'red';
}

function Link({
  to,
  variant = 'secondary',
  color = 'orange',
  children,
  ...props
}: Props) {
  return (
    <LinkComponent
      to={to}
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
    </LinkComponent>
  );
}

export default Link;
