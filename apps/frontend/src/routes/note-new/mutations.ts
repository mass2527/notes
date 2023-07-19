import { useMutation } from '@tanstack/react-query';
import { NoteForm, Note } from '../../types';
import { http } from '../../http';
import { useCurrentUser } from '../../hooks/use-current-user';
import { useInvalidateNoteListQuery } from '../../hooks/use-invalidate-note-list-query';

const createNote = ({
  title,
  content,
  userId,
}: NoteForm & { userId: number }): Promise<Note> => {
  return http.post(`/notes?userId=${userId}`, {
    title,
    content,
  });
};

export const useCreateNote = () => {
  const currentUser = useCurrentUser();
  const invalidateNoteQuery = useInvalidateNoteListQuery(currentUser.id);

  return useMutation({
    mutationFn: ({ title, content }: NoteForm) =>
      createNote({ title, content, userId: currentUser.id }),
    onSuccess: () => {
      invalidateNoteQuery();
    },
  });
};
