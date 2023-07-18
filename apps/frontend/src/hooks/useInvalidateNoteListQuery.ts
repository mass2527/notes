import { noteQueryKeys } from '../queries';
import { useInvalidateQueries } from './useInvalidateQueries';

export const useInvalidateNoteListQuery = (userId: number) => {
  const invalidateNoteListQuery = useInvalidateQueries(
    noteQueryKeys.list(userId),
  );

  return invalidateNoteListQuery;
};
