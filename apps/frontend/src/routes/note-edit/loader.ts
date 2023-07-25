import { QueryClient } from '@tanstack/react-query';
import { createNoteQuery } from '../../hooks/use-note-query';
import { Note } from '../../types';
import { LoaderFunctionArgs } from 'react-router-dom';
import invariant from 'tiny-invariant';

export const noteEditLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    invariant(params.noteId);
    const noteQuery = createNoteQuery(Number(params.noteId));

    return (
      queryClient.getQueryData<Note>(noteQuery.queryKey) ??
      (await queryClient.fetchQuery<Note>(noteQuery))
    );
  };
