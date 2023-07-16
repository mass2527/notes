import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';

type Note = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
};

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
