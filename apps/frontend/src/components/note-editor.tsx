import { ChangeEvent, KeyboardEventHandler, ReactNode } from 'react';
import { NoteForm } from '../types';
import { twMerge } from 'tailwind-merge';
import { Input, Textarea } from '@philly/react';

function NoteEditor({
  note,
  setNote,
  onKeyDown,
  disabled,
  className,
  header,
}: {
  note?: NoteForm;
  setNote?: React.Dispatch<React.SetStateAction<NoteForm>>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
  className?: string;
  header?: ReactNode;
}) {
  const changeNoteFields = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (setNote) {
      setNote((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  return (
    <div className={twMerge('h-full flex flex-col gap-4', className)}>
      {header}
      <div className="flex flex-col gap-4 h-full">
        <Input
          name="title"
          value={note?.title}
          onChange={changeNoteFields}
          placeholder="Title"
          autoFocus
          onKeyDown={onKeyDown}
          maxLength={100}
          disabled={disabled}
        />
        <Textarea
          name="content"
          value={note?.content}
          onChange={changeNoteFields}
          className="h-full resize-none"
          placeholder="Content"
          onKeyDown={onKeyDown}
          maxLength={3000}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default NoteEditor;
