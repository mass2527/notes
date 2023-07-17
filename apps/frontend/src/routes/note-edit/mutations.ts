import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Note } from '../../types';
import { http } from '../../http';
import { noteQueryKeys } from '../../queries';
import { useCurrentUser } from '../../hooks/useCurrentUser';

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
  const queryClient = useQueryClient();
  const currentUser = useCurrentUser();

  return useMutation({
    mutationFn: () => deleteNote(noteId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: noteQueryKeys.list(currentUser.id),
      });
    },
  });
};
