import { Form, useNavigation, useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNoteForm } from './use-note-form';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { isWithPlatformMetaKey } from '../../utils/platform';
import NotePreviewSkeleton from '../../components/note-preview-skeleton';
import { ReactNode } from 'react';
import { Button, Spacing } from '@philly/react';

function EditNote() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const { status, noteForm, setNoteForm } = useNoteForm(Number(noteId));
  const { state } = useNavigation();

  if (status === 'success') {
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
          <Form method="post" className="flex-1">
            <NoteEditor
              header={
                <div className="flex justify-end gap-4">
                  <Button type="submit" variant="primary">
                    Save
                  </Button>
                </div>
              }
              note={noteForm}
              setNote={setNoteForm}
              onKeyDown={(event) => {
                if (isWithPlatformMetaKey(event) && event.key === 'Enter') {
                  // handleNoteEdit();
                }
              }}
              disabled={state === 'submitting'}
            />
          </Form>
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

export default EditNote;
