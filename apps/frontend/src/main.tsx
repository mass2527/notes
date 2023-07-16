import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NoteDetails from './routes/note-details.tsx';
import NoteEdit from './routes/note-edit/index.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'notes/:noteId',
        element: <NoteDetails />,
      },
      {
        path: 'notes/:noteId/edit',
        element: <NoteEdit />,
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
