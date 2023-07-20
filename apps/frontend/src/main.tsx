import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NoteDetails from './routes/note-details/index.tsx';
import NoteEdit from './routes/note-edit/index.tsx';
import NoteNew from './routes/note-new/index.tsx';
import './index.css';
import ErrorPage from './error-page.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'notes/:noteId',
        element: <NoteDetails />,
      },
      {
        path: 'notes/:noteId/edit',
        element: <NoteEdit />,
      },
      {
        path: 'notes/new',
        element: <NoteNew />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
