import { ComponentProps, useCallback } from 'react';
import {
  Navigation,
  useLocation,
  useNavigation,
  Form,
  useFormAction,
} from 'react-router-dom';

export const useNavigationFetcher = ({
  action = '',
  method = 'get',
}: {
  action?: Navigation['formAction'];
  method?: Navigation['formMethod'];
}) => {
  const { search } = useLocation();
  const { state, formAction = '', formMethod = 'get' } = useNavigation();

  const isMethodMatched = formMethod.toLowerCase() === method.toLowerCase();

  const formActionWithoutQuery = formAction.split('?')[0];
  const resolvedAction = useFormAction(action);
  const isActionMatched = formActionWithoutQuery === resolvedAction;

  const isMatched = isMethodMatched && isActionMatched;

  return {
    state: isMatched ? state : 'idle',
    Form: useCallback(
      (props: Omit<ComponentProps<typeof Form>, 'method' | 'action'>) => {
        return <Form method={method} action={action + search} {...props} />;
      },
      [action, search, method],
    ),
  };
};
