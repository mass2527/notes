import { ChangeEvent } from 'react';
import { EditableNote } from '../types';
import Input from './input';
import Textarea from './textarea';

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
      <Input
        type="text"
        name="title"
        value={note.title}
        onChange={changeNoteFields}
      />
      <Textarea
        name="content"
        value={note.content}
        onChange={changeNoteFields}
      />
    </div>
  );
}

export default NoteEditor;
