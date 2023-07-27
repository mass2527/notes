import { useEffect, useState } from 'react';

export const useLocalStorageState = <T>(key: string, fallbackState?: T) => {
  const [state, setState] = useState(() => {
    const savedStateAsString = localStorage.getItem(key);
    if (savedStateAsString === null) {
      return fallbackState;
    }
    if (savedStateAsString === 'undefined') {
      return fallbackState;
    }

    try {
      return JSON.parse(savedStateAsString) as T;
    } catch (error) {
      console.error(error);
      return fallbackState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};
