import { Link, useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { useNoteQuery } from '../hooks/useNoteQuery';

function NoteDetails() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const noteQueryResult = useNoteQuery(Number(noteId));

  if (noteQueryResult.data) {
    return (
      <div>
        <div>
          <time dateTime={noteQueryResult.data.updatedAt}>
            {noteQueryResult.data.updatedAt}
          </time>
          <Link to={`/notes/${noteId}/edit`}>EDIT</Link>
        </div>
        <h2>{noteQueryResult.data.title}</h2>
        <p>{noteQueryResult.data.content}</p>
      </div>
    );
  }

  if (noteQueryResult.isError) {
    return <div>Note not found</div>;
  }

  return 'Loading...';
}

export default NoteDetails;
