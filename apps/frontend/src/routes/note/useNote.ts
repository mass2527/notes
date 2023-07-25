import { useLoaderData } from 'react-router-dom';
import { UnwrapLoader } from '../../utils/types';
import { noteLoader } from './loader';
import { useNoteQuery } from '../../hooks/use-note-query';

export const useNote = (noteId: number) => {
  const initialData = useLoaderData() as UnwrapLoader<typeof noteLoader>;

  return useNoteQuery(noteId, {
    initialData,
  });
};
