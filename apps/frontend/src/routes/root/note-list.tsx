import { Link } from 'react-router-dom';
import { useNotesQuery } from './queries';

export default function NoteList() {
  const notesQueryResult = useNotesQuery(1);

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
