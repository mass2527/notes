import { useState } from 'react';
import { useNoteQuery } from '../../hooks/use-note-query';
import { NoteForm } from '../../types';

export const useNoteForm = (noteId: number) => {
  const [draft, setDraft] = useState<NoteForm>();
  const { data, status } = useNoteQuery(noteId);

  if (status === 'success') {
    return {
      status,
      noteForm: draft ?? { title: data.title, content: data.content },
      setNoteForm: setDraft as React.Dispatch<React.SetStateAction<NoteForm>>,
    };
  } else {
    return {
      status,
      noteForm: undefined,
      setNoteForm: setDraft as React.Dispatch<React.SetStateAction<undefined>>,
    };
  }
};
