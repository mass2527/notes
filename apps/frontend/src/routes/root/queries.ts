import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';
import { Note } from '../../types';
import { http } from '../../http';
import { useCurrentUser } from '../../hooks/use-current-user';

const fetchNotes = (userId?: number): Promise<Note[]> => {
  return http.get(`/notes?userId=${userId}`);
};

const useNotesQuery = (userId: number) => {
  return useQuery({
    queryKey: noteQueryKeys.list(userId),
    queryFn: () => fetchNotes(userId),
  });
};

export const useCurrentUserNotesQuery = () => {
  const currentUser = useCurrentUser();

  return useNotesQuery(currentUser.id);
};
