import { useRef, useState } from 'react';
import invariant from 'tiny-invariant';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { isWithPlatformMetaKey } from '../../utils/platform';
import { Input, useSyncSearchParams } from '@philly/react';

function QueryInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState({
    q: '',
  });

  useSyncSearchParams(query);

  useDocumentKeydownEventListener((event) => {
    const inputElement = inputRef.current;
    invariant(inputElement);

    if (
      event.key === '/' ||
      (isWithPlatformMetaKey(event) && event.key === 'k')
    ) {
      event.preventDefault();
      inputElement.focus();
    }
  });

  return (
    <Input
      ref={inputRef}
      placeholder="Search"
      value={query.q}
      onChange={(event) => setQuery({ q: event.target.value })}
      maxLength={64}
    />
  );
}

export default QueryInput;
