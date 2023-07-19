import { Link } from 'react-router-dom';
import { useNotesQuery } from './queries';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { getFormattedDate } from '../../utils';

export default function NoteList() {
  const currentUser = useCurrentUser();
  const notesQueryResult = useNotesQuery(currentUser.id);

  if (notesQueryResult.data) {
    return (
      <ul className="flex flex-col gap-4">
        {notesQueryResult.data.length > 0 ? (
          notesQueryResult.data.map((note) => (
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
          ))
        ) : (
          <p>
            <strong>
              Click the <span className="underline">NEW</span> link
            </strong>
            <br />
            to create your first note!
          </p>
        )}
      </ul>
    );
  }

  if (notesQueryResult.error) {
    return <div>Error...</div>;
  }

  return <div>Loading...</div>;
}
