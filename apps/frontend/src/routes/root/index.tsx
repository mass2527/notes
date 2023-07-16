import { Outlet } from 'react-router-dom';
import NoteList from './note-list';

function Root() {
  return (
    <div>
      <div>
        <h1>Notes</h1>
        <nav>
          <NoteList />
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
