import { ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '@philly/react';

export function LinkWithQuery({ to, ...props }: ComponentProps<typeof Link>) {
  const { search } = useLocation();

  return <Link to={to + search} {...props} />;
}
