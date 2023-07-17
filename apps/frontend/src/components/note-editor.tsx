import { ChangeEvent } from 'react';
import { EditableNote } from '../types';

function NoteEditor({
  note,
  setNote,
}: {
  note: EditableNote;
  setNote: React.Dispatch<React.SetStateAction<EditableNote>>;
}) {
  const changeNoteFields = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNote((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={changeNoteFields}
      />
      <textarea
        name="content"
        value={note.content}
        onChange={changeNoteFields}
      />
    </div>
  );
}

export default NoteEditor;
