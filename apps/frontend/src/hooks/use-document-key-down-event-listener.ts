import { useDocumentEventListener } from '@philly/react';

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
