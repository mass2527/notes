import { useState } from 'react';
import { useNoteQuery } from '../../hooks/use-note-query';
import { NoteForm } from '../../types';

export const useNote = (noteId: number) => {
  const [draft, setDraft] = useState<NoteForm>();
  const { data, status } = useNoteQuery(noteId);

  if (status === 'success') {
    return {
      status,
      note: draft ?? { title: data.title, content: data.content },
      setNote: setDraft as React.Dispatch<React.SetStateAction<NoteForm>>,
    };
  } else {
    return {
      status,
      note: undefined,
      setNote: setDraft as React.Dispatch<React.SetStateAction<undefined>>,
    };
  }
};
