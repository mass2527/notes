import { Note } from '../../types';
import { getFormattedDate } from '../../utils/time';
import { NavLink } from 'react-router-dom';

function NoteListItem({ note }: { note: Note }) {
  return (
    <li>
      <NavLink
        to={`/notes/${note.id}`}
        className={({ isActive, isPending }) =>
          `flex flex-col p-4 border border-neutral-700 rounded-lg hover:bg-neutral-900 motion-safe:transition-colors motion-safe:ease-in-out motion-safe:duration-150
          ${isPending ? 'text-neutral-500' : isActive ? 'border-white' : ''}`
        }
      >
        <strong>{note.title}</strong>
        <time dateTime={note.updatedAt} className="text-sm text-neutral-500">
          {getFormattedDate(new Date(note.updatedAt))}
        </time>
      </NavLink>
    </li>
  );
}

export default NoteListItem;
