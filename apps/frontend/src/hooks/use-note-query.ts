import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../queries';
import { Note } from '../types';
import { http } from '../http';

const fetchNote = (noteId: number): Promise<Note> => {
  return http.get(`/notes/${noteId}`);
};

export const createNoteQuery = (noteId: number) => ({
  queryKey: noteQueryKeys.detail(noteId),
  queryFn: () => fetchNote(noteId),
});

export const useNoteQuery = (
  noteId: number,
  options: { initialData?: Note } = {},
) => {
  return useQuery({ ...createNoteQuery(noteId), ...options });
};
