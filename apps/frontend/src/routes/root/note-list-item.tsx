import { NavLinkWithQuery } from '@philly/react';
import { Note } from '../../types';
import { getFormattedDate } from '../../utils/time';

function NoteListItem({ note }: { note: Note }) {
  return (
    <li>
      <NavLinkWithQuery
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
      </NavLinkWithQuery>
    </li>
  );
}

export default NoteListItem;
