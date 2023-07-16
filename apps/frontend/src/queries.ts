export const noteQueryKeys = {
  all: [{ scope: 'notes' }] as const,
  lists: () => [{ ...noteQueryKeys.all[0], entity: 'list' }] as const,
  list: (userId: number) => [{ ...noteQueryKeys.lists(), userId }] as const,
  details: () => [{ ...noteQueryKeys.all[0], entity: 'detail' }] as const,
  detail: (noteId: number) =>
    [{ ...noteQueryKeys.details()[0], noteId }] as const,
};
