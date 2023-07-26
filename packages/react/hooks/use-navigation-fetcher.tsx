import { ComponentProps, useCallback } from 'react';
import { Navigation, useLocation, useNavigation, Form } from 'react-router-dom';

export const useNavigationFetcher = ({
  action = '',
  method = 'get',
  preserveSearchParams = true,
}: {
  action?: Navigation['formAction'];
  method?: Navigation['formMethod'];
  preserveSearchParams?: boolean;
}) => {
  const { pathname, search } = useLocation();

  const { state, formAction = '', formMethod = 'get' } = useNavigation();

  const isMatched =
    formMethod.toLowerCase() === method.toLowerCase() &&
    formAction.startsWith(`${pathname}${action === '' ? '' : `/${action}`}`);

  return {
    state: isMatched ? state : 'idle',
    Form: useCallback(
      (props: Omit<ComponentProps<typeof Form>, 'method' | 'action'>) => {
        return (
          <Form
            method={method}
            action={preserveSearchParams ? action + search : action}
            {...props}
          />
        );
      },
      [preserveSearchParams, action, search, method],
    ),
  };
};
