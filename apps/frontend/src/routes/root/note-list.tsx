import { useSearchParams } from 'react-router-dom';
import Fuse from 'fuse.js';
import NoteListItem from './note-list-item';
import EmptyNoteListMessage from './empty-note-list-message';
import { useCurrentUserNotesQuery } from './queries';
import NoteListItemSkeleton from './note-list-item-skeleton';

export default function NoteList() {
  const notesQueryResult = useCurrentUserNotesQuery();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  if (notesQueryResult.data) {
    if (notesQueryResult.data.length === 0) {
      return <EmptyNoteListMessage />;
    }

    const fuse = new Fuse(notesQueryResult.data, {
      keys: ['title', 'content'],
      threshold: 0.3,
    });
    const filteredNotes =
      query === ''
        ? notesQueryResult.data
        : fuse.search(query).map(({ item }) => item);

    if (filteredNotes.length === 0) {
      return (
        <div className="text-neutral-500 text-lg">
          <span>No results for</span>{' '}
          <q className="break-words text-white">{query}</q>
        </div>
      );
    }

    return (
      <ul className="flex flex-col gap-4">
        {filteredNotes.map((note) => (
          <NoteListItem key={note.id} note={note} />
        ))}
      </ul>
    );
  }

  if (notesQueryResult.error) {
    return <div>Error...</div>;
  }

  return (
    <ul className="flex flex-col gap-4">
      <NoteListItemSkeleton />
      <NoteListItemSkeleton />
      <NoteListItemSkeleton />
    </ul>
  );
}
