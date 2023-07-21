import { LinkWithQuery, useNavigateWithQuery } from '@philly/react';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';

function EditNoteLink({ noteId }: { noteId: number }) {
  const navigateWithQuery = useNavigateWithQuery();

  useDocumentKeydownEventListener((event) => {
    if (event.key === 'e') {
      event.preventDefault();
      navigateWithQuery(`/notes/${noteId}/edit`);
    }
  });

  return <LinkWithQuery to={`/notes/${noteId}/edit`}>EDIT</LinkWithQuery>;
}

export default EditNoteLink;
