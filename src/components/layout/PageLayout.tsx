import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function PageLayout() {
  return (
    <div className="min-h-screen bg-page text-text-primary">
      <Navbar />
      <Outlet />
    </div>
  );
}

