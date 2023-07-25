import { ActionFunction, redirect } from 'react-router-dom';
import { NoteForm, Note } from '../../types';
import { http } from '../../http';
import { toast } from 'react-hot-toast';

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

export const rootAction: ActionFunction = async () => {
  try {
    const newNote = await createNote({ title: '', content: '', userId: 1 });
    return redirect(`/notes/${newNote.id}/edit`);
  } catch (error) {
    console.error(error);
    toast.error('Failed to create new note');
    return null;
  }
};
