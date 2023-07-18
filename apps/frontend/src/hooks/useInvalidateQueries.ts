import { QueryKey, useQueryClient } from '@tanstack/react-query';

export const useInvalidateQueries = (queryKey: QueryKey) => {
  const queryClient = useQueryClient();

  return () => {
    queryClient.invalidateQueries({
      queryKey,
    });
  };
};
