import { ActionFunction } from 'react-router-dom';
import { NoteForm, Note } from '../../types';
import { http } from '../../http';
import { toast } from 'react-hot-toast';
import { redirectWithQuery } from '../../utils/router';

const createNote = ({
  title,
  content,
  userId,
}: NoteForm & { userId: number }): Promise<Note> => {
  return http.post(`/notes?userId=${userId}`, {
    title,
    content,
  });
};

export const rootAction: ActionFunction = async ({ request }) => {
  try {
    const newNote = await createNote({ title: '', content: '', userId: 1 });
    return redirectWithQuery(`/notes/${newNote.id}/edit`, { request });
  } catch (error) {
    console.error(error);
    toast.error('Failed to create new note');
    return null;
  }
};
