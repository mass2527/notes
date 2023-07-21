import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNoteForm } from './hooks';
import { useDeleteNote, useUpdateNote } from './mutations';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';
import { isWithPlatformMetaKey } from '../../utils/platform';
import { toast } from 'react-hot-toast';
import NotePreviewSkeleton from '../../components/note-preview-skeleton';
import { ReactNode } from 'react';
import { Button, Spacing } from '@philly/react';

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
      <NoteEditLayout
        preview={
          <NotePreview
            className="flex-1"
            header={<Spacing size={32} />}
            note={noteForm}
          />
        }
        editor={
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
        }
      />
    );
  }

  if (status === 'error') {
    return <div>Error...</div>;
  }

  return (
    <NoteEditLayout
      preview={<NotePreviewSkeleton className="flex-1" />}
      editor={
        <NoteEditor
          className="flex-1"
          header={<Spacing size={40} />}
          disabled
        />
      }
    />
  );
}

function NoteEditLayout({
  preview,
  editor,
}: {
  preview: ReactNode;
  editor: ReactNode;
}) {
  return (
    <div className="flex gap-4 h-full">
      {preview}
      {editor}
    </div>
  );
}

export default NoteEdit;
