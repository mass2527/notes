import { useEffect, useRef, useState } from 'react';
import Input from '../../components/input';
import { useSearchParams } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { useDocumentKeydownEventListener } from '../../hooks/use-document-key-down-event-listener';
import { isWithPlatformMetaKey } from '../../utils/platform';

function QueryInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [notesFilteringQuery, setNotesFilteringQuery] = useState('');
  const setSearchParams = useSearchParams()[1];

  useEffect(() => {
    if (notesFilteringQuery === '') {
      setSearchParams();
    } else {
      setSearchParams({
        q: notesFilteringQuery,
      });
    }
  }, [notesFilteringQuery]);

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
      value={notesFilteringQuery}
      onChange={(event) => setNotesFilteringQuery(event.target.value)}
    />
  );
}

export default QueryInput;
