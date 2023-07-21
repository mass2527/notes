import { LinkWithQuery } from 'ui';
import { Note } from '../../types';
import { getFormattedDate } from '../../utils/time';

function NoteListItem({ note }: { note: Note }) {
  return (
    <li>
      <LinkWithQuery
        to={`/notes/${note.id}`}
        className="flex flex-col p-4 border border-neutral-700 rounded-lg"
      >
        <strong>{note.title}</strong>
        <time dateTime={note.updatedAt} className="text-sm text-neutral-500">
          {getFormattedDate(new Date(note.updatedAt))}
        </time>
      </LinkWithQuery>
    </li>
  );
}

export default NoteListItem;
