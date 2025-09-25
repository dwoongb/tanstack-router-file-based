import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/list/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Hello "/_layout/list/"!</p>
      <br />
      <Link to='/list/$cardId' params={{ cardId: '1' }}>
        <span className='text-2xl hover:text-blue-500'>click to go to 1</span>
      </Link>
    </div>
  );
}
