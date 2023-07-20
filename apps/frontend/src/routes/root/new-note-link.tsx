import LinkWithQuery from '../../components/link-with-query';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';

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
