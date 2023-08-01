import { Button, useNavigationFetcher } from '@philly/react';

function NoteDeleteButton() {
  const fetcher = useNavigationFetcher({
    action: 'delete',
    method: 'delete',
  });

  return (
    <fetcher.Form>
      <Button
        type="submit"
        color="red"
        isLoading={fetcher.state === 'submitting'}
      >
        Delete
      </Button>
    </fetcher.Form>
  );
}

export default NoteDeleteButton;
