import { QueryClient } from '@tanstack/react-query';
import { createNotesQuery } from './queries';
import { Note } from '../../types';

export const rootLoader = (queryClient: QueryClient) => async () => {
  // TODO: replace userId
  const notesQuery = createNotesQuery(1);

  return (
    queryClient.getQueryData<Note[]>(notesQuery.queryKey) ??
    (await queryClient.fetchQuery<Note[]>(notesQuery))
  );
};
