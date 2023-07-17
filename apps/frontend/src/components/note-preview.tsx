import { ReactNode } from 'react';
import { EditableNote } from '../types';

function NotePreview({
  header,
  note,
}: {
  header: ReactNode;
  note: EditableNote;
}) {
  return (
    <div>
      <div>{header}</div>
      <div>
        <span>PREVIEW</span>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default NotePreview;
