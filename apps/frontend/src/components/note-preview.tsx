import { ReactNode } from 'react';
import { NoteForm } from '../types';
import { twMerge } from 'tailwind-merge';
import TextWithMarkdown from './text-with-markdown';

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
        <h1 className="flex-none text-5xl font-extrabold min-h-[1em] break-all">
          {note.title}
        </h1>
        <TextWithMarkdown text={note.content} />
      </div>
    </div>
  );
}

export default NotePreview;
