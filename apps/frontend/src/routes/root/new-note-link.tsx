import LinkWithQuery from '../../components/link-with-query';
import { useKeyDown } from '../../hooks/use-key-down';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';

function NewNoteLink() {
  const navigateWithQuery = useNavigateWithQuery();

  useKeyDown((event) => {
    if (event.key === 'n') {
      event.preventDefault();
      navigateWithQuery('/notes/new');
    }
  });

  return <LinkWithQuery to="/notes/new">NEW</LinkWithQuery>;
}

export default NewNoteLink;
