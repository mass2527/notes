import { QueryKey, useQueryClient } from '@tanstack/react-query';
import { noteQueryKeys } from '../queries';

const useInvalidateQueries = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };
};

export const useInvalidateNoteListQuery = (userId: number) => {
  const invalidateNoteListQuery = useInvalidateQueries(
    noteQueryKeys.list(userId),
  );

  return invalidateNoteListQuery;
};
