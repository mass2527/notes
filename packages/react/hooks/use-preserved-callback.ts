import { useCallback, useEffect, useRef } from 'react';

type Callback = (...args: any[]) => any;

export const usePreservedCallback = <T extends Callback>(callback: T) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const preservedCallback = useCallback((...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    callbackRef.current(...args);
  }, []);

  return preservedCallback as T;
};
