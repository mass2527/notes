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
    <div className={twMerge('flex flex-col gap-2', className)}>
      {header}
      <div className="flex flex-col gap-6 h-full">
        <h2 className="text-5xl font-extrabold">{note.title}</h2>
        <p className="h-full overflow-auto">{note.content}</p>
      </div>
    </div>
  );
}

export default NotePreview;
