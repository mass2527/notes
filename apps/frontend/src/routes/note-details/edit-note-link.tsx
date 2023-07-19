import LinkWithQuery from '../../components/link-with-query';
import { useKeyDown } from '../../hooks/use-key-down';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';

function EditNoteLink({ noteId }: { noteId: number }) {
  const navigateWithQuery = useNavigateWithQuery();

  useKeyDown((event) => {
    if (event.key === 'e') {
      event.preventDefault();
      navigateWithQuery(`/notes/${noteId}/edit`);
    }
  });

  return <LinkWithQuery to={`/notes/${noteId}/edit`}>EDIT</LinkWithQuery>;
}

export default EditNoteLink;
