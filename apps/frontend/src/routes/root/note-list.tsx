import { Link } from 'react-router-dom';
import { useNotesQuery } from './queries';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { getFormattedDate } from '../../utils';

export default function NoteList() {
  const currentUser = useCurrentUser();
  const notesQueryResult = useNotesQuery(currentUser.id);

  return (
    <ul className="flex flex-col gap-4">
      {notesQueryResult.data?.map((note) => (
        <li key={note.id}>
          <Link
            to={`/notes/${note.id}`}
            className="flex flex-col p-4 border border-neutral-700 rounded-lg"
          >
            <strong>{note.title}</strong>
            <time
              dateTime={note.updatedAt}
              className="text-sm text-neutral-500"
            >
              {getFormattedDate(new Date(note.updatedAt))}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
