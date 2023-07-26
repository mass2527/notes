import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNoteForm } from './use-note-form';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import NotePreviewSkeleton from '../../components/note-preview-skeleton';
import { ReactNode, useRef } from 'react';
import { Button, Spacing, useNavigationFetcher } from '@philly/react';
import { isWithPlatformMetaKey } from '../../utils/platform';

function EditNote() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const { status, noteForm, setNoteForm } = useNoteForm(Number(noteId));
  const buttonRef = useRef<HTMLButtonElement>(null);

  const fetcher = useNavigationFetcher({
    method: 'post',
  });

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
          <fetcher.Form className="flex-1">
            <NoteEditor
              header={
                <div className="flex justify-end gap-4">
                  <Button
                    ref={buttonRef}
                    type="submit"
                    variant="primary"
                    disabled={noteForm.title === '' || noteForm.content === ''}
                    isLoading={fetcher.state === 'submitting'}
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
              disabled={fetcher.state === 'submitting'}
            />
          </fetcher.Form>
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
