import { useNavigate, useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNote } from './hooks';
import { ChangeEvent } from 'react';
import { useUpdateNote } from './mutations';

function NoteEdit() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const [note, setNote] = useNote(Number(noteId));
  const updateNoteMutationResult = useUpdateNote(Number(noteId));
  const navigate = useNavigate();

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
        <input
          type="text"
          name="title"
          value={note?.title}
          onChange={changeNoteFields}
        />
        <textarea
          name="content"
          value={note?.content}
          onChange={changeNoteFields}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            updateNoteMutationResult.mutate(note, {
              onSuccess: () => {
                navigate(`/notes/${noteId}`);
              },
            });
          }}
        >
          DONE
        </button>
        <button type="button">DELETE</button>
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
