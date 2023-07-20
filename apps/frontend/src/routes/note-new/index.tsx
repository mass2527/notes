import { useState } from 'react';
import { NoteForm } from '../../types';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { useCreateNote } from './mutations';
import { Button } from '../../components/button';
import Spacing from '../../components/spacing';
import { useNavigateWithQuery } from '../../hooks/use-navigate-with-query';
import { isWithPlatformMetaKey } from '../../utils/platform';

function NoteNew() {
  const [note, setNote] = useState<NoteForm>({
    title: '',
    content: '',
  });
  const createNoteMutationResult = useCreateNote();
  const navigateWithQuery = useNavigateWithQuery();

  const handleNoteCreate = () => {
    createNoteMutationResult.mutate(note, {
      onSuccess: (note) => {
        navigateWithQuery(`/notes/${note.id}`);
      },
    });
  };

  return (
    <div className="flex gap-4 h-full">
      <NotePreview
        header={<Spacing size={32} />}
        className="flex-1"
        note={note}
      />
      <NoteEditor
        className="flex-1"
        header={
          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={() => {
                handleNoteCreate();
              }}
              disabled={note.title === '' || note.content === ''}
              isLoading={createNoteMutationResult.isLoading}
            >
              DONE
            </Button>
          </div>
        }
        note={note}
        setNote={setNote}
        onKeyDown={(event) => {
          if (isWithPlatformMetaKey(event) && event.key === 'Enter') {
            handleNoteCreate();
          }
        }}
      />
    </div>
  );
}

export default NoteNew;
