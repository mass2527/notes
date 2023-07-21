import { ComponentProps } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'ui';

function LinkWithQuery({ to, ...props }: ComponentProps<typeof Link>) {
  const { search } = useLocation();

  return <Link to={to + search} {...props} />;
}

export default LinkWithQuery;
