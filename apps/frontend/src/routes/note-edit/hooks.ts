import { useState } from 'react';
import { useNoteQuery } from '../../hooks/useNoteQuery';
import { Note } from '../../types';

export const useNote = (noteId: number) => {
  const [draft, setDraft] = useState<Note>();
  const { data } = useNoteQuery(noteId);

  return [draft ?? data, setDraft] as const;
};
