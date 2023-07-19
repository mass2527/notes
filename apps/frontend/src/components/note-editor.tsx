import { ChangeEvent, ReactNode } from 'react';
import { NoteForm, Note } from '../types';
import Input from './input';
import Textarea from './textarea';
import { twMerge } from 'tailwind-merge';

function NoteEditor({
  className,
  header,
  note,
  setNote,
}: {
  className?: string;
  header?: ReactNode;
  note: NoteForm;
  setNote: React.Dispatch<React.SetStateAction<NoteForm>>;
}) {
  const changeNoteFields = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={twMerge('flex flex-col gap-4', className)}>
      {header}
      <div className="flex flex-col gap-4 h-full">
        <Input
          type="text"
          name="title"
          value={note.title}
          onChange={changeNoteFields}
          placeholder="Note's title..."
        />
        <Textarea
          name="content"
          value={note.content}
          onChange={changeNoteFields}
          className="h-full"
          placeholder="Note's content..."
        />
      </div>
    </div>
  );
}

export default NoteEditor;
