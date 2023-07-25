import { Form, useNavigation, useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';
import NotePreview from '../../components/note-preview';
import { getFormattedFullDate } from '../../utils/time';
import EditNoteLink from './edit-note-link';
import NotePreviewSkeleton from '../../components/note-preview-skeleton';
import { useNote } from './useNote';
import { Button } from '@philly/react';

function Note() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const noteQueryResult = useNote(Number(noteId));
  const { state, formAction } = useNavigation();

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
            <div className="flex items-center gap-4">
              <EditNoteLink noteId={Number(noteId)} />
              <Form method="delete" action="delete">
                <Button
                  type="submit"
                  color="red"
                  isLoading={
                    state === 'submitting' &&
                    /^\/notes\/\d+\/delete$/.test(formAction)
                  }
                >
                  Delete
                </Button>
              </Form>
            </div>
          </div>
        }
        note={noteQueryResult.data}
      />
    );
  }

  if (noteQueryResult.isError) {
    return <div>Error...</div>;
  }

  return <NotePreviewSkeleton />;
}

export default Note;
