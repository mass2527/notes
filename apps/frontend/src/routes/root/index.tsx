import { Outlet, Link as NativeLink } from 'react-router-dom';
import NoteList from './note-list';
import Spacing from '../../components/spacing';
import QueryInput from './query-input';
import NewNoteLink from './new-note-link';

function Root() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col p-4 border-r border-neutral-700 w-[300px]">
        <h1 className="text-2xl font-medium">
          <NativeLink to="/">Notes</NativeLink>
        </h1>
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

      <main className="flex-1 p-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
