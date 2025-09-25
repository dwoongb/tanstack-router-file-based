import {
  createFileRoute,
  useCanGoBack,
  useRouter,
} from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/list/$cardId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { cardId } = Route.useParams();

  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleBack = () => {
    if (canGoBack) {
      router.history.back();
    }
  };

  return (
    <div>
      <p> Hello "/_layout/list/$cardId"!</p>
      <p className='text-lg'>cardId: {cardId}</p>

      <br />

      <button
        className='bg-blue-500 text-white p-2 rounded-sm cursor-pointer'
        onClick={handleBack}
      >
        back
      </button>
    </div>
  );
}
