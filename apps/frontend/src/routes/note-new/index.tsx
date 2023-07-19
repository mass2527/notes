import { useState } from 'react';
import { NoteForm } from '../../types';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { useCreateNote } from './mutations';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import Spacing from '../../components/spacing';

function NoteNew() {
  const [note, setNote] = useState<NoteForm>({
    title: '',
    content: '',
  });
  const createNoteMutationResult = useCreateNote();
  const navigate = useNavigate();

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
              onClick={() => {
                createNoteMutationResult.mutate(note, {
                  onSuccess: (note) => {
                    navigate(`/notes/${note.id}`);
                  },
                });
              }}
              disabled={note.title === '' || note.content === ''}
            >
              DONE
            </Button>
          </div>
        }
        note={note}
        setNote={setNote}
      />
    </div>
  );
}

export default NoteNew;
