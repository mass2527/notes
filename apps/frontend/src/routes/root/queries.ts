import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';
import { Note } from '../../types';

const fetchNotes = (userId: number): Promise<Note[]> => {
  return fetch(`http://localhost:3000/notes?userId=${userId}`).then((res) =>
    res.json(),
  );
};

export const useNotesQuery = (userId: number) => {
  return useQuery({
    queryKey: noteQueryKeys.list(userId),
    queryFn: () => fetchNotes(userId),
  });
};
