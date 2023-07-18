import { useNavigate, useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNote } from './hooks';
import { ChangeEvent } from 'react';
import { useDeleteNote, useUpdateNote } from './mutations';
import { Button } from '../../components/button';
import Input from '../../components/input';
import Textarea from '../../components/textarea';

function NoteEdit() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const [note, setNote] = useNote(Number(noteId));
  const updateNoteMutationResult = useUpdateNote(Number(noteId));
  const navigate = useNavigate();
  const deleteNoteMutationResult = useDeleteNote(Number(noteId));

  if (typeof note === 'undefined') {
    return null;
  }

  const changeNoteFields = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          name="title"
          value={note?.title}
          onChange={changeNoteFields}
        />
        <Textarea
          name="content"
          value={note?.content}
          onChange={changeNoteFields}
        />
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            updateNoteMutationResult.mutate(note, {
              onSuccess: () => {
                navigate(`/notes/${noteId}`);
              },
            });
          }}
        >
          DONE
        </Button>
        <Button
          color="red"
          onClick={() => {
            deleteNoteMutationResult.mutate(undefined, {
              onSuccess: () => {
                navigate('/', { replace: true });
              },
            });
          }}
        >
          DELETE
        </Button>
      </div>
      <div>
        <span>PREVIEW</span>
        <h2>{note?.title}</h2>
        <p>{note?.content}</p>
      </div>
    </div>
  );
}

export default NoteEdit;
