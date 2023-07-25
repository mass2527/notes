import { Button } from '@philly/react';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { Form, useNavigation } from 'react-router-dom';
import { useRef } from 'react';
import invariant from 'tiny-invariant';

function NewNoteButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { state, formAction } = useNavigation();

  useDocumentKeydownEventListener((event) => {
    const buttonElement = buttonRef.current;
    invariant(buttonElement);

    if (event.key === 'n') {
      buttonElement.click();
    }
  });

  return (
    <Form method="post">
      <Button
        ref={buttonRef}
        type="submit"
        isLoading={state !== 'idle' && formAction === '/'}
      >
        New
      </Button>
    </Form>
  );
}

export default NewNoteButton;
