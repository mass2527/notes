import { useMutation } from '@tanstack/react-query';
import { Note } from '../../types';
import { http } from '../../http';

const updateNote = (
  noteId: number,
  { title, content }: Pick<Note, 'title' | 'content'>,
): Promise<Note> => {
  return http.patch(`/notes/${noteId}`, {
    title,
    content,
  });
};

export const useUpdateNote = (noteId: number) => {
  return useMutation({
    mutationFn: ({ title, content }: Pick<Note, 'title' | 'content'>) =>
      updateNote(noteId, { title, content }),
  });
};

const deleteNote = (noteId: number) => {
  return http.delete(`/notes/${noteId}`);
};

export const useDeleteNote = (noteId: number) => {
  return useMutation({
    mutationFn: () => deleteNote(noteId),
  });
};
