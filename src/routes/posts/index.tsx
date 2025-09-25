import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/')({
  component: Posts,
});

function Posts() {
  return (
    <div className='p-2'>
      <p>Hello "/posts/"!</p>
      <br />
      <Link
        to='/posts/$postId'
        className='[&.active]:font-bold'
        params={{ postId: '1' }}
      >
        <span className='text-2xl hover:text-blue-500'>click to go to 1</span>
      </Link>
    </div>
  );
}
