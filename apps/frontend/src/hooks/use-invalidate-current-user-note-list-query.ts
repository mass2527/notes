import { useCurrentUser } from './use-current-user';
import { useInvalidateNoteListQuery } from './use-invalidate-note-list-query';

export const useInvalidateCurrentUserNoteListQuery = () => {
  const currentUser = useCurrentUser();
  const invalidateCurrentUserNoteListQuery = useInvalidateNoteListQuery(
    currentUser.id,
  );

  return invalidateCurrentUserNoteListQuery;
};
