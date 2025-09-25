import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: Layout,
});

function Layout() {
  return (
    <div className='p-2'>
      <h1 className='text-2xl font-bold'>Layout Title</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
