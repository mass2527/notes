import { QueryClient } from '@tanstack/react-query';

export type UnwrapLoader<
  T extends (queryClient: QueryClient) => () => Promise<unknown>,
> = Awaited<ReturnType<ReturnType<T>>>;
