import { toast } from 'react-hot-toast';
import { ActionFunction } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { http } from '../../http';
import { QueryClient } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';
import { redirectWithQuery } from '../../utils/router';

const deleteNote = (noteId: number) => {
  return http.delete(`/notes/${noteId}`);
};

export const deleteNoteAction =
  (queryClient: QueryClient): ActionFunction =>
  async ({ params, request }) => {
    invariant(params.noteId);
    const noteId = Number(params.noteId);

    try {
      await deleteNote(noteId);
      await queryClient.invalidateQueries(noteQueryKeys.list(1));
      toast.success('Note Deleted Successfully!');
      return redirectWithQuery('/', { request });
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete note');
      return redirectWithQuery(`/notes/${noteId}`, { request });
    }
  };
