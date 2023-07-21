import { ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '@philly/react';

export function LinkWithQuery({ to, ...props }: ComponentProps<typeof Link>) {
  const { search } = useLocation();

  const pathname = typeof to === 'string' ? to : to.pathname;

  return <Link to={pathname + search} {...props} />;
}
