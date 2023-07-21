import { ComponentProps } from 'react';
import { Link as LinkComponent } from 'react-router-dom';

interface Props extends ComponentProps<typeof LinkComponent> {}

export function Link({ to, children, ...props }: Props) {
  return (
    <LinkComponent
      to={to}
      className="p-1 rounded-[6px] text-blue-500 hover:underline"
      {...props}
    >
      {children}
    </LinkComponent>
  );
}
