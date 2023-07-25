import { ChangeEvent, KeyboardEventHandler, ReactNode } from 'react';
import { NoteForm } from '../types';
import { twMerge } from 'tailwind-merge';
import { Input, Textarea } from '@philly/react';

function NoteEditor(
  props: (
    | {
        note: NoteForm;
        setNote: React.Dispatch<React.SetStateAction<NoteForm>>;
        onKeyDown?: KeyboardEventHandler<
          HTMLInputElement | HTMLTextAreaElement
        >;
        disabled: false;
      }
    | {
        disabled: true;
      }
  ) & { className?: string; header?: ReactNode },
) {
  const changeNoteFields = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!props.disabled) {
      props.setNote({
        ...props.note,
        [event.target.name]: event.target.value,
      });
    }
  };

  return (
    <div className={twMerge('h-full flex flex-col gap-4', props.className)}>
      {props.header}
      <div className="flex flex-col gap-4 h-full">
        <Input
          name="title"
          value={props.disabled ? '' : props.note.title}
          onChange={changeNoteFields}
          placeholder="Title"
          autoFocus
          onKeyDown={props.disabled ? undefined : props.onKeyDown}
          maxLength={100}
          disabled={props.disabled}
        />
        <Textarea
          name="content"
          value={props.disabled ? '' : props.note.content}
          onChange={changeNoteFields}
          className="h-full resize-none"
          placeholder="Content"
          onKeyDown={props.disabled ? undefined : props.onKeyDown}
          maxLength={3000}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
}

export default NoteEditor;
