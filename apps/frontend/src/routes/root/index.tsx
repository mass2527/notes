import { Outlet, Link as NativeLink } from 'react-router-dom';
import NoteList from './note-list';
import Link from '../../components/link';
import Input from '../../components/input';
import Spacing from '../../components/spacing';

function Root() {
  return (
    <div className="flex h-screen">
      <div className="p-4 border-r border-neutral-700 w-[300px]">
        <h1 className="text-2xl font-medium">
          <NativeLink to="/">Notes</NativeLink>
        </h1>
        <Spacing size={16} />
        <div className="flex justify-between items-center">
          <Input type="text" placeholder="Search notes" />
          <Link to="/notes/new">NEW</Link>
        </div>
        <Spacing size={16} />

        <nav>
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
