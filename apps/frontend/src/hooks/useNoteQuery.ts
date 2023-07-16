import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../queries';
import { Note } from '../types';

const fetchNote = (noteId: number): Promise<Note> => {
  return fetch(`http://localhost:3000/notes/${noteId}`).then((res) =>
    res.json(),
  );
};

export const useNoteQuery = (noteId: number) => {
  return useQuery({
    queryKey: noteQueryKeys.detail(noteId),
    queryFn: () => fetchNote(noteId),
    enabled: Boolean(noteId),
  });
};
