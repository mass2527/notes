import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNote } from './hooks';
import { useDeleteNote, useUpdateNote } from './mutations';
import { Button } from '../../components/button';
import NotePreview from '../../components/note-preview';
import Spacing from '../../components/spacing';
import NoteEditor from '../../components/note-editor';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';

function NoteEdit() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const { status, note, setNote } = useNote(Number(noteId));
  const updateNoteMutationResult = useUpdateNote(Number(noteId));
  const navigateWithQuery = useNavigateWithQuery();
  const deleteNoteMutationResult = useDeleteNote(Number(noteId));

  if (status === 'success') {
    return (
      <div className="flex gap-4 h-full">
        <NotePreview
          className="flex-1"
          header={<Spacing size={32} />}
          note={note}
        />
        <NoteEditor
          className="flex-1"
          header={
            <div className="flex justify-end gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  updateNoteMutationResult.mutate(note, {
                    onSuccess: () => {
                      navigateWithQuery(`/notes/${noteId}`);
                    },
                  });
                }}
                disabled={
                  note.title === '' ||
                  note.content === '' ||
                  updateNoteMutationResult.isLoading
                }
              >
                DONE
              </Button>
              <Button
                color="red"
                onClick={() => {
                  deleteNoteMutationResult.mutate(undefined, {
                    onSuccess: () => {
                      navigateWithQuery('/', { replace: true });
                    },
                  });
                }}
                disabled={deleteNoteMutationResult.isLoading}
              >
                DELETE
              </Button>
            </div>
          }
          note={note}
          setNote={setNote}
        />
      </div>
    );
  }

  if (status === 'error') {
    return <div>Error...</div>;
  }

  return <div>Loading...</div>;
}

export default NoteEdit;
