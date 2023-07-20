import { useSearchParams } from 'react-router-dom';
import Fuse from 'fuse.js';
import NoteListItem from './note-list-item';
import EmptyNoteListMessage from './empty-note-list-message';
import { useCurrentUserNotesQuery } from './queries';

export default function NoteList() {
  const notesQueryResult = useCurrentUserNotesQuery();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  if (notesQueryResult.data) {
    const fuse = new Fuse(notesQueryResult.data, {
      keys: ['title', 'content'],
    });
    const filteredNotes =
      query === ''
        ? notesQueryResult.data
        : fuse.search(query).map(({ item }) => item);

    return (
      <ul className="flex flex-col gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteListItem key={note.id} note={note} />
          ))
        ) : (
          <EmptyNoteListMessage />
        )}
      </ul>
    );
  }

  if (notesQueryResult.error) {
    return <div>Error...</div>;
  }

  return <div>Loading...</div>;
}
