import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { useNoteQuery } from '../hooks/useNoteQuery';
import Link from '../components/link';
import NotePreview from '../components/note-preview';
import { getFormattedFullDate } from '../utils';

function NoteDetails() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const noteQueryResult = useNoteQuery(Number(noteId));

  if (noteQueryResult.data) {
    return (
      <NotePreview
        header={
          <div className="flex justify-between items-center">
            <time
              dateTime={noteQueryResult.data.updatedAt}
              className="text-neutral-500 text-sm"
            >
              {getFormattedFullDate(new Date(noteQueryResult.data.updatedAt))}
            </time>
            <Link to={`/notes/${noteId}/edit`}>EDIT</Link>
          </div>
        }
        note={noteQueryResult.data}
      />
    );
  }

  if (noteQueryResult.isError) {
    return <div>Note not found</div>;
  }

  return 'Loading...';
}

export default NoteDetails;
