import { useCurrentUser } from './useCurrentUser';
import { useInvalidateNoteListQuery } from './useInvalidateNoteListQuery';

export const useInvalidateCurrentUserNoteListQuery = () => {
  const currentUser = useCurrentUser();
  const invalidateCurrentUserNoteListQuery = useInvalidateNoteListQuery(
    currentUser.id,
  );

  return invalidateCurrentUserNoteListQuery;
};
