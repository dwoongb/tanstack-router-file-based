import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayer = () => {
  return (
    <>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
        <Link to='/posts' className='[&.active]:font-bold'>
          Posts
        </Link>
        <Link
          to='/posts/$postId'
          className='[&.active]:font-bold'
          params={{ postId: '1' }}
        >
          Post $postId
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayer });
