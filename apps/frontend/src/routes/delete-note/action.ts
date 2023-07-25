import { toast } from 'react-hot-toast';
import { ActionFunction, redirect } from 'react-router-dom';
import invariant from 'tiny-invariant';
import { http } from '../../http';
import { QueryClient } from '@tanstack/react-query';
import { noteQueryKeys } from '../../queries';

const deleteNote = (noteId: number) => {
  return http.delete(`/notes/${noteId}`);
};

export const deleteNoteAction =
  (queryClient: QueryClient): ActionFunction =>
  async ({ params }) => {
    invariant(params.noteId);
    const noteId = Number(params.noteId);

    try {
      await deleteNote(noteId);
      toast.success('Note Deleted Successfully!');
      await queryClient.invalidateQueries(noteQueryKeys.list(1));
      return redirect('/');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete note');
      return redirect(`/notes/${noteId}`);
    }
  };
