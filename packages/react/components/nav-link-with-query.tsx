import { ComponentProps } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function NavLinkWithQuery({
  to,
  ...props
}: ComponentProps<typeof NavLink>) {
  const { search } = useLocation();

  const pathname = typeof to === 'string' ? to : to.pathname;

  return <NavLink to={pathname + search} {...props} />;
}
