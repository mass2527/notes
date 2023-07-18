import { useMutation } from '@tanstack/react-query';
import { EditableNote, Note } from '../../types';
import { http } from '../../http';
import { useInvalidateCurrentUserNoteListQuery } from '../../hooks/useInvalidateCurrentUserNoteListQuery';

const updateNote = (
  noteId: number,
  { title, content }: EditableNote,
): Promise<Note> => {
  return http.patch(`/notes/${noteId}`, {
    title,
    content,
  });
};

export const useUpdateNote = (noteId: number) => {
  const invalidateCurrentUserNoteListQuery =
    useInvalidateCurrentUserNoteListQuery();

  return useMutation({
    mutationFn: ({ title, content }: EditableNote) =>
      updateNote(noteId, { title, content }),
    onSuccess: () => {
      invalidateCurrentUserNoteListQuery();
    },
  });
};

const deleteNote = (noteId: number) => {
  return http.delete(`/notes/${noteId}`);
};

export const useDeleteNote = (noteId: number) => {
  const invalidateCurrentUserNoteListQuery =
    useInvalidateCurrentUserNoteListQuery();

  return useMutation({
    mutationFn: () => deleteNote(noteId),
    onSuccess: () => {
      invalidateCurrentUserNoteListQuery();
    },
  });
};
