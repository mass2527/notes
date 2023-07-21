import { usePreservedCallback } from '@philly/react';
import { useEffect } from 'react';

const useDocumentEventListener = <T extends keyof DocumentEventMap>(
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

export const useDocumentKeydownEventListener = (
  onKeyDown: (event: KeyboardEvent) => void,
) => {
  useDocumentEventListener('keydown', (event) => {
    const { activeElement } = document;
    if (
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLTextAreaElement
    ) {
      return;
    }

    onKeyDown(event);
  });
};
