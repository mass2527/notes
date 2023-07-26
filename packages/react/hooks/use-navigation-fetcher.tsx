import { ComponentProps } from 'react';
import { Navigation, useLocation, useNavigation, Form } from 'react-router-dom';

export const useNavigationFetcher = ({
  action: _action,
  method = 'get',
  preserveSearchParams = true,
}: {
  action: Navigation['formAction'];
  method: Navigation['formMethod'];
  preserveSearchParams?: boolean;
}) => {
  const { pathname, search } = useLocation();
  const { state, formAction = '', formMethod = 'get' } = useNavigation();

  const action = preserveSearchParams ? `${_action}${search}` : _action;

  const isMatched =
    formMethod.toLowerCase() === method.toLowerCase() &&
    formAction.startsWith(`${pathname}/${action}`);

  return {
    isSubmitting: isMatched && state === 'submitting',
    Form: (props: Omit<ComponentProps<typeof Form>, 'method' | 'action'>) => {
      return <Form method={method} action={action} {...props} />;
    },
  };
};
