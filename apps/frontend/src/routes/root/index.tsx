import { Outlet, useNavigation } from 'react-router-dom';
import Sidebar from './sidebar';

function Root() {
  const { state } = useNavigation();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main
        className={`flex-1 p-16 ${state === 'loading' ? 'opacity-50' : ''}`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
