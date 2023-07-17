import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';
import { Note } from '../../types';
import { http } from '../../http';

const fetchNotes = (userId?: number): Promise<Note[]> => {
  return http.get(`/notes?userId=${userId}`);
};

export const useNotesQuery = (userId: number) => {
  return useQuery({
    queryKey: noteQueryKeys.list(userId),
    queryFn: () => fetchNotes(userId),
  });
};
