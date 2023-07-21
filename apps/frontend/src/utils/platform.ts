import { KeyboardEvent as ReactKeyboardEvent } from 'react';

const isMac = () => /mac/i.test(navigator.userAgent);

export const isWithPlatformMetaKey = (
  event:
    | ReactKeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
    | KeyboardEvent,
) => (isMac() ? event.metaKey : event.ctrlKey);
