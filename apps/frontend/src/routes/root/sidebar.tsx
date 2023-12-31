import { LinkWithQuery, Spacing } from '@philly/react';
import NewNoteButton from './new-note-button';
import NoteList from './note-list';
import NotesQueryInput from './notes-query-input';

function Sidebar() {
  return (
    <div className="flex flex-col p-4 border-r border-neutral-700 w-[250px]">
      <div className="flex justify-between">
        <LinkWithQuery className="text-2xl font-medium" to="/">
          Notes
        </LinkWithQuery>
        <NewNoteButton />
      </div>

      <Spacing size={16} />

      <div className="flex items-center gap-2">
        <NotesQueryInput />
      </div>
      <Spacing size={16} />

      <nav className="overflow-y-auto">
        <NoteList />
      </nav>
    </div>
  );
}

export default Sidebar;
