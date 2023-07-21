import { useEffect } from 'react';
import { usePreservedCallback } from './use-preserved-callback';

export const useDocumentEventListener = <T extends keyof DocumentEventMap>(
  type: T,
  listener: (event: DocumentEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
) => {
  const _listener = usePreservedCallback(listener);

  useEffect(() => {
    document.addEventListener(type, _listener, options);
    return () => {
      document.removeEventListener(type, _listener, options);
    };
  }, []);
};
