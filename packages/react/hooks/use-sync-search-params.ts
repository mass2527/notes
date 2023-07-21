import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSyncSearchParams = (queries: Record<string, string>) => {
  const setSearchParams = useSearchParams()[1];

  useEffect(() => {
    if (Object.values(queries).every((value) => value === '')) {
      setSearchParams();
    } else {
      setSearchParams(queries);
    }
  }, [queries]);
};
