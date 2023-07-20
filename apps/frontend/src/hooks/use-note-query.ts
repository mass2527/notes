import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../queries';
import { Note } from '../types';
import { http } from '../http';

const fetchNote = (noteId: number): Promise<Note> => {
  return http.get(`/notes/${noteId}`);
};

export const useNoteQuery = (noteId: number) => {
  return useQuery({
    queryKey: noteQueryKeys.detail(noteId),
    queryFn: () => fetchNote(noteId),
  });
};
