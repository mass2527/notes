import { Button, useNavigationFetcher } from '@philly/react';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { useRef } from 'react';
import invariant from 'tiny-invariant';

function NewNoteButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fetcher = useNavigationFetcher({
    method: 'post',
  });

  useDocumentKeydownEventListener((event) => {
    const buttonElement = buttonRef.current;
    invariant(buttonElement);

    if (event.key === 'n') {
      buttonElement.click();
    }
  });

  return (
    <fetcher.Form>
      <Button
        ref={buttonRef}
        type="submit"
        isLoading={fetcher.state !== 'idle'}
      >
        New
      </Button>
    </fetcher.Form>
  );
}

export default NewNoteButton;
