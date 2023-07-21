import { useRouteError } from 'react-router-dom';
import { Spacing, Link } from 'ui';

export default function GlobalError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="grid place-items-center h-screen text-center">
      <div>
        <h1 className="text-5xl">Oops!</h1>
        <Spacing size={24} />
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/">Return to home</Link>
      </div>
    </div>
  );
}
