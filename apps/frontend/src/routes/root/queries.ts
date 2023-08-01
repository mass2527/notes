import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';
import { Note } from '../../types';
import { http } from '../../http';
import { useCurrentUser } from '../../hooks/use-current-user';
import { useLoaderData } from 'react-router-dom';
import { UnwrapLoader } from '../../utils/types';
import { rootLoader } from './loader';

const fetchNotes = (userId?: number): Promise<Note[]> => {
  return http.get(`/notes?userId=${userId}`);
};

export const createNotesQuery = (userId: number) => ({
  queryKey: noteQueryKeys.list(userId),
  queryFn: () => fetchNotes(userId),
});

const useNotesQuery = (
  userId: number,
  options: { initialData?: Note[] } = {},
) => {
  return useQuery({
    ...createNotesQuery(userId),
    ...options,
  });
};

export const useCurrentUserNotesQuery = () => {
  const currentUser = useCurrentUser();
  const { notes } = useLoaderData() as UnwrapLoader<typeof rootLoader>;

  return useNotesQuery(currentUser.id, { initialData: notes });
};
