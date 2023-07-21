import { Spacing } from 'ui';
import NewNoteLink from './new-note-link';
import NoteList from './note-list';
import QueryInput from './query-input';
import { Link as NativeLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col p-4 border-r border-neutral-700 w-[300px]">
      <h2 className="text-2xl font-medium">
        <NativeLink to="/">Notes</NativeLink>
      </h2>
      <Spacing size={16} />

      <div className="flex justify-between items-center">
        <QueryInput />
        <NewNoteLink />
      </div>
      <Spacing size={16} />

      <nav className="overflow-y-auto">
        <NoteList />
      </nav>
    </div>
  );
}

export default Sidebar;
