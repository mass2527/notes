import { redirect } from 'react-router-dom';

export const redirectWithQuery = (
  url: string,
  {
    request,
    init,
  }: { request: Request; init?: number | ResponseInit | undefined },
) => {
  const { search } = new URL(request.url);

  return redirect(url + search, init);
};
