import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNoteForm } from './hooks';
import { useDeleteNote, useUpdateNote } from './mutations';
import { Button } from '../../components/button';
import NotePreview from '../../components/note-preview';
import Spacing from '../../components/spacing';
import NoteEditor from '../../components/note-editor';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';
import { isWithPlatformMetaKey } from '../../utils/platform';
import { toast } from 'react-hot-toast';

function NoteEdit() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const { status, noteForm, setNoteForm } = useNoteForm(Number(noteId));
  const updateNoteMutationResult = useUpdateNote(Number(noteId));
  const navigateWithQuery = useNavigateWithQuery();
  const deleteNoteMutationResult = useDeleteNote(Number(noteId));

  if (status === 'success') {
    const handleNoteEdit = () => {
      updateNoteMutationResult.mutate(noteForm, {
        onSuccess: () => {
          navigateWithQuery(`/notes/${noteId}`);
        },
        onError: () => {
          toast.error('Failed to edit note');
        },
      });
    };

    const handleNoteDelete = () => {
      deleteNoteMutationResult.mutate(undefined, {
        onSuccess: () => {
          navigateWithQuery('/', { replace: true });
        },
        onError: () => {
          toast.error('Failed to delete note');
        },
      });
    };

    return (
      <div className="flex gap-4 h-full">
        <NotePreview
          className="flex-1"
          header={<Spacing size={32} />}
          note={noteForm}
        />
        <NoteEditor
          className="flex-1"
          header={
            <div className="flex justify-end gap-4">
              <Button
                variant="primary"
                onClick={handleNoteEdit}
                disabled={noteForm.title === '' || noteForm.content === ''}
                isLoading={updateNoteMutationResult.isLoading}
              >
                Edit
              </Button>
              <Button
                color="red"
                onClick={handleNoteDelete}
                isLoading={deleteNoteMutationResult.isLoading}
              >
                Delete
              </Button>
            </div>
          }
          note={noteForm}
          setNote={setNoteForm}
          onKeyDown={(event) => {
            if (isWithPlatformMetaKey(event) && event.key === 'Enter') {
              handleNoteEdit();
            }
          }}
          disabled={
            updateNoteMutationResult.isLoading ||
            deleteNoteMutationResult.isLoading
          }
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
