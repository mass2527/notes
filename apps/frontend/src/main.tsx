import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NoteDetails from './routes/note-details/index.tsx';
import NoteEdit from './routes/note-edit/index.tsx';
import NoteNew from './routes/note-new/index.tsx';
import './index.css';
import GlobalError from './routes/root/global-error.tsx';
import { Toaster } from 'react-hot-toast';
import { rootLoader } from './routes/root/loader.ts';

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
    loader: rootLoader(queryClient),
    errorElement: <GlobalError />,
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
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
);
