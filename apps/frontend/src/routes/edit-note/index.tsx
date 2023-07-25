import { Form, useNavigation, useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNoteForm } from './use-note-form';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { isWithPlatformMetaKey } from '../../utils/platform';
import NotePreviewSkeleton from '../../components/note-preview-skeleton';
import { ReactNode, useRef } from 'react';
import { Button, Spacing } from '@philly/react';

function EditNote() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const { status, noteForm, setNoteForm } = useNoteForm(Number(noteId));
  const { state, formAction } = useNavigation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isSubmitting =
    state === 'submitting' && /^\/notes\/\d+\/edit$/.test(formAction ?? '');

  if (status === 'success') {
    return (
      <NoteEditLayout
        preview={
          <NotePreview
            className="flex-1"
            header={<Spacing size={40} />}
            note={noteForm}
          />
        }
        editor={
          <Form method="post" className="flex-1">
            <NoteEditor
              header={
                <div className="flex justify-end gap-4">
                  <Button
                    ref={buttonRef}
                    type="submit"
                    variant="primary"
                    disabled={noteForm.title === '' || noteForm.content === ''}
                    isLoading={isSubmitting}
                  >
                    Save
                  </Button>
                </div>
              }
              note={noteForm}
              setNote={setNoteForm}
              onKeyDown={(event) => {
                if (isWithPlatformMetaKey(event) && event.key === 'Enter') {
                  const buttonElement = buttonRef.current;
                  invariant(buttonElement);

                  buttonRef.current.click();
                }
              }}
              disabled={isSubmitting}
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
