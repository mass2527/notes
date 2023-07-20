import { useRef, useState } from 'react';
import Input from '../../components/input';
import invariant from 'tiny-invariant';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { isWithPlatformMetaKey } from '../../utils/platform';
import { useSyncSearchParams } from '../../hooks/use-sync-search-params';

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
      type="text"
      placeholder="Search notes"
      value={query.q}
      onChange={(event) => setQuery({ q: event.target.value })}
    />
  );
}

export default QueryInput;
