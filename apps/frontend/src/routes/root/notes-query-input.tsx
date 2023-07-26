import { useRef } from 'react';
import invariant from 'tiny-invariant';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { isWithPlatformMetaKey } from '../../utils/platform';
import { Input } from '@philly/react';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';
import { UnwrapLoader } from '../../utils/types';
import { rootLoader } from './loader';

function NotesQueryInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { q } = useLoaderData() as UnwrapLoader<typeof rootLoader>;
  const submit = useSubmit();

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
          submit(event.currentTarget.form);
        }}
      />
    </Form>
  );
}

export default NotesQueryInput;
