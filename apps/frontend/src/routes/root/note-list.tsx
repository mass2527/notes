import { Link } from 'react-router-dom';
import { useNotesQuery } from './queries';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export default function NoteList() {
  const currentUser = useCurrentUser();
  const notesQueryResult = useNotesQuery(currentUser.id);

  return (
    <ul>
      {notesQueryResult.data?.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <h3>{note.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
