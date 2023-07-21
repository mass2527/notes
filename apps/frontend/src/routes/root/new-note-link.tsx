import { LinkWithQuery, useNavigateWithQuery } from '@philly/react';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';

function NewNoteLink() {
  const navigateWithQuery = useNavigateWithQuery();

  useDocumentKeydownEventListener((event) => {
    if (event.key === 'n') {
      event.preventDefault();
      navigateWithQuery('/notes/new');
    }
  });

  return <LinkWithQuery to="/notes/new">NEW</LinkWithQuery>;
}

export default NewNoteLink;
