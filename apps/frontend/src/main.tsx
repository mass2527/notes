import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Note from './routes/note/index.tsx';
import EditNote from './routes/edit-note/index.tsx';
import './index.css';
import GlobalError from './routes/root/global-error.tsx';
import { Toaster } from 'react-hot-toast';
import { rootLoader } from './routes/root/loader.ts';
import { noteLoader } from './routes/note/loader.ts';
import { editNoteLoader } from './routes/edit-note/loader.ts';
import { rootAction } from './routes/root/action.ts';
import { editNoteAction } from './routes/edit-note/action.ts';
import { deleteNoteAction } from './routes/delete-note/action.ts';
import Index from './routes/index.tsx';

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
    action: rootAction,
    element: <Root />,
    errorElement: <GlobalError />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'notes/:noteId',
        loader: noteLoader(queryClient),
        element: <Note />,
      },
      {
        path: 'notes/:noteId/edit',
        loader: editNoteLoader(queryClient),
        action: editNoteAction(queryClient),
        element: <EditNote />,
      },
      {
        path: 'notes/:noteId/delete',
        action: deleteNoteAction(queryClient),
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
