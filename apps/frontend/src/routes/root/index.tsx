import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';

function Root() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
