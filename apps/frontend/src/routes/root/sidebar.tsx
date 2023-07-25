import { Spacing } from '@philly/react';
import NewNoteButton from './new-note-button';
import NoteList from './note-list';
import QueryInput from './query-input';
import { Link as NativeLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col p-4 border-r border-neutral-700 w-[300px]">
      <NativeLink className="text-2xl font-medium" to="/">
        Notes
      </NativeLink>

      <Spacing size={16} />

      <div className="flex items-center gap-2">
        <QueryInput />
        <NewNoteButton />
      </div>
      <Spacing size={16} />

      <nav className="overflow-y-auto">
        <NoteList />
      </nav>
    </div>
  );
}

export default Sidebar;
