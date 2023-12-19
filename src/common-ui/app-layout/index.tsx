import { Outlet } from 'react-router-dom';
import Header from '../header';

function AppLayout() {
  return (
    <div className="px-20">
      <Header />

      <main className="flex flex-col gap-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
