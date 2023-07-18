import { useMutation } from '@tanstack/react-query';
import { EditableNote, Note } from '../../types';
import { http } from '../../http';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useInvalidateNoteListQuery } from '../../hooks/useInvalidateNoteListQuery';

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
  const invalidateNoteQuery = useInvalidateNoteListQuery(currentUser.id);

  return useMutation({
    mutationFn: ({ title, content }: EditableNote) =>
      createNote({ title, content, userId: currentUser.id }),
    onSuccess: () => {
      invalidateNoteQuery();
    },
  });
};
