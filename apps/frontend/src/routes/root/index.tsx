import { Outlet } from 'react-router-dom';
import NoteList from './note-list';
import Link from '../../components/link';

function Root() {
  return (
    <div className="flex h-screen">
      <div className="border-r border-gray-300 w-[300px]">
        <h1>Notes</h1>
        <div>
          <input type="text" placeholder="search" />
          <Link variant="primary" to="/notes/new">
            NEW
          </Link>
        </div>
        <nav>
          <NoteList />
        </nav>
      </div>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
