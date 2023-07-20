import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { useNoteQuery } from '../../hooks/use-note-query';
import NotePreview from '../../components/note-preview';
import { getFormattedFullDate } from '../../utils/time';
import EditNoteLink from './edit-note-link';

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
            <EditNoteLink noteId={Number(noteId)} />
          </div>
        }
        note={noteQueryResult.data}
      />
    );
  }

  if (noteQueryResult.isError) {
    return <div>Error...</div>;
  }

  return <div>Loading...</div>;
}

export default NoteDetails;