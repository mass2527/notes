import { noteQueryKeys } from '../queries';
import { useInvalidateQueries } from './use-invalidate-queries';

export const useInvalidateNoteListQuery = (userId: number) => {
  const invalidateNoteListQuery = useInvalidateQueries(
    noteQueryKeys.list(userId),
  );

  return invalidateNoteListQuery;
};
