import { useState } from 'react';
import { NoteForm } from '../../types';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { useCreateNote } from './mutations';
import { isEmpty } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';

function NoteNew() {
  const [note, setNote] = useState<NoteForm>({
    title: '',
    content: '',
  });
  const createNoteMutationResult = useCreateNote();
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 h-full">
      <NotePreview className="flex-1" note={note} />
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
              disabled={isEmpty(note)}
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
