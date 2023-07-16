import { useParams } from 'react-router-dom';
import invariant from 'tiny-invariant';

import { useNote } from './hooks';
import { ChangeEvent } from 'react';

function NoteEdit() {
  const { noteId } = useParams<'noteId'>();
  invariant(noteId);
  const [note, setNote] = useNote(Number(noteId));

  if (typeof note === 'undefined') {
    return null;
  }

  const updateNote = (
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
          value={note.title}
          onChange={updateNote}
        />
        <textarea name="content" value={note.content} onChange={updateNote} />
      </div>
      <div>
        <button type="button">DONE</button>
        <button type="button">DELETE</button>
      </div>
      <div>
        <span>PREVIEW</span>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NoteEdit;
