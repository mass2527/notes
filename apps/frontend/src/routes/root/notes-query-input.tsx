import { useEffect, useRef } from 'react';
import invariant from 'tiny-invariant';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { isWithPlatformMetaKey } from '../../utils/platform';
import { Input } from '@philly/react';
import { Form, useLoaderData, useLocation, useSubmit } from 'react-router-dom';
import { UnwrapLoader } from '../../utils/types';
import { rootLoader } from './loader';

function NotesQueryInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { q } = useLoaderData() as UnwrapLoader<typeof rootLoader>;
  const submit = useSubmit();
  const location = useLocation();

  useEffect(() => {
    const inputElement = inputRef.current;
    invariant(inputElement);

    inputElement.value = q;
  }, [q]);

  useDocumentKeydownEventListener((event) => {
    const inputElement = inputRef.current;
    invariant(inputElement);

    if (
      event.key === '/' ||
      (isWithPlatformMetaKey(event) && event.key === 'k')
    ) {
      event.preventDefault();
      inputElement.focus();
    }
  });

  return (
    <Form role="search">
      <Input
        type="search"
        name="q"
        ref={inputRef}
        aria-label="Search notes"
        placeholder="Search"
        maxLength={64}
        defaultValue={q}
        onChange={(event) => {
          const isFirstSearch = q === '';
          submit(event.currentTarget.form, {
            replace: !isFirstSearch,
            action: location.pathname,
          });
        }}
      />
    </Form>
  );
}

export default NotesQueryInput;
