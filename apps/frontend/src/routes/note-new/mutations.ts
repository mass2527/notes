import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EditableNote, Note } from '../../types';
import { http } from '../../http';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { noteQueryKeys } from '../../queries';

const createNote = ({
  title,
  content,
  userId,
}: EditableNote & { userId: number }): Promise<Note> => {
  return http.post(`/notes?userId=${userId}`, {
    title,
    content,
  });
};

export const useCreateNote = () => {
  const currentUser = useCurrentUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ title, content }: EditableNote) =>
      createNote({ title, content, userId: currentUser.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: noteQueryKeys.list(currentUser.id),
      });
    },
  });
};
