import { QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

export type UnwrapLoader<
  T extends (
    queryClient: QueryClient,
  ) => (args: LoaderFunctionArgs) => Promise<unknown>,
> = Awaited<ReturnType<ReturnType<T>>>;
