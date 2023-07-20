import { ReactNode } from 'react';
import { NoteForm } from '../types';
import { twMerge } from 'tailwind-merge';

function NotePreview({
  header,
  note,
  className,
}: {
  header?: ReactNode;
  note: NoteForm;
  className?: string;
}) {
  return (
    <div className={twMerge('flex flex-col gap-2 h-full', className)}>
      {header}
      <div className="flex flex-col gap-6 overflow-auto">
        <h2 className="flex-none text-5xl font-extrabold min-h-[1em] break-all">
          {note.title}
        </h2>
        <p className="break-all whitespace-pre-wrap">{note.content}</p>
      </div>
    </div>
  );
}

export default NotePreview;
