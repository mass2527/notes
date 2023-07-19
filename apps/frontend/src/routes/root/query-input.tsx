import { useEffect, useState } from 'react';
import Input from '../../components/input';
import { useSearchParams } from 'react-router-dom';

function QueryInput() {
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

  return (
    <Input
      type="text"
      placeholder="Search notes"
      value={notesFilteringQuery}
      onChange={(event) => setNotesFilteringQuery(event.target.value)}
    />
  );
}

export default QueryInput;
