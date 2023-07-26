import { ReactNode, useEffect, useRef } from 'react';
import { NoteForm } from '../types';
import { twMerge } from 'tailwind-merge';
import TextWithMarkdown from './text-with-markdown';
import invariant from 'tiny-invariant';

function NotePreview({
  header,
  note,
  className,
}: {
  header?: ReactNode;
  note: NoteForm;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = divRef.current;
    invariant(divElement);

    divElement.scrollTop = divElement.scrollHeight;
  }, [note.content]);

  return (
    <div className={twMerge('flex flex-col gap-2 h-full', className)}>
      {header}
      <div ref={divRef} className="flex flex-col gap-6 overflow-auto">
        <h1 className="flex-none text-5xl font-extrabold min-h-[1em] break-all">
          {note.title}
        </h1>
        <TextWithMarkdown text={note.content} />
      </div>
    </div>
  );
}

export default NotePreview;
