import { useState } from 'react';
import { EditableNote } from '../../types';
import NotePreview from '../../components/note-preview';
import NoteEditor from '../../components/note-editor';
import { useCreateNote } from './mutations';
import { isEmpty } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';

function NoteNew() {
  const [note, setNote] = useState<EditableNote>({
    title: '',
    content: '',
  });
  const createNoteMutationResult = useCreateNote();
  const navigate = useNavigate();

  return (
    <div>
      <NoteEditor note={note} setNote={setNote} />
      <NotePreview
        header={
          <div>
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
      />
    </div>
  );
}

export default NoteNew;
