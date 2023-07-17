import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../queries';
import { Note } from '../types';

const fetchNote = async (noteId: number): Promise<Note> => {
  const response = await fetch(`http://localhost:3000/notes/${noteId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error);
  }

  return data;
};

export const useNoteQuery = (noteId: number) => {
  return useQuery({
    queryKey: noteQueryKeys.detail(noteId),
    queryFn: () => fetchNote(noteId),
    enabled: Boolean(noteId),
  });
};
