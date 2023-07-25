import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Note from './routes/note/index.tsx';
import EditNote from './routes/edit-note/index.tsx';
import NewNote from './routes/new-note/index.tsx';
import './index.css';
import GlobalError from './routes/root/global-error.tsx';
import { Toaster } from 'react-hot-toast';
import { rootLoader } from './routes/root/loader.ts';
import { noteDetailsLoader } from './routes/note/loader.ts';
import { noteEditLoader } from './routes/edit-note/loader.ts';

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
    loader: rootLoader(queryClient),
    element: <Root />,
    errorElement: <GlobalError />,
    children: [
      {
        path: 'notes/:noteId',
        loader: noteDetailsLoader(queryClient),
        element: <Note />,
      },
      {
        path: 'notes/:noteId/edit',
        loader: noteEditLoader(queryClient),
        element: <EditNote />,
      },
      {
        path: 'notes/new',
        element: <NewNote />,
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
