import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';

export const useNavigateWithQuery = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (
    to: string | { pathname: string; hash?: string },
    options?: NavigateOptions,
  ) =>
    navigate(
      {
        pathname: typeof to === 'string' ? to : to.pathname,
        search,
        hash: typeof to === 'string' ? undefined : to.hash,
      },
      options,
    );
};
