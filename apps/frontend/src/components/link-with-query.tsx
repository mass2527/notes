import { ComponentProps } from 'react';
import Link from './link';
import { useLocation } from 'react-router-dom';

function LinkWithQuery({ to, ...props }: ComponentProps<typeof Link>) {
  const { search } = useLocation();

  return <Link to={to + search} {...props} />;
}

export default LinkWithQuery;
