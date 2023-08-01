import { QueryClient } from '@tanstack/react-query';
import { createNotesQuery } from './queries';
import { Note } from '../../types';
import { LoaderFunctionArgs } from 'react-router-dom';

export const rootLoader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    // TODO: replace userId
    const notesQuery = createNotesQuery(1);
    const url = new URL(request.url);
    const q = url.searchParams.get('q') ?? '';

    return {
      notes:
        queryClient.getQueryData<Note[]>(notesQuery.queryKey) ??
        (await queryClient.fetchQuery<Note[]>(notesQuery)),
      q,
    };
  };
