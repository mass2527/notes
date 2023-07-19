import { useEffect, useState } from 'react';
import { usePreservedCallback } from './use-preserved-callback';

export const useKeyDown = (_handleKeyDown: (event: KeyboardEvent) => void) => {
  const handleKeyDown = usePreservedCallback(_handleKeyDown);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const { activeElement } = document;
      if (
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      handleKeyDown(event);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
};
