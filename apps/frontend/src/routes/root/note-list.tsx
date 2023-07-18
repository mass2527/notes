import { Link } from 'react-router-dom';
import { useNotesQuery } from './queries';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { getFormattedDate } from '../../utils';

export default function NoteList() {
  const currentUser = useCurrentUser();
  const notesQueryResult = useNotesQuery(currentUser.id);

  return (
    <ul>
      {notesQueryResult.data?.map((note) => (
        <li key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <strong>{note.title}</strong>
            <time dateTime={note.updatedAt}>
              {getFormattedDate(new Date(note.updatedAt))}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
