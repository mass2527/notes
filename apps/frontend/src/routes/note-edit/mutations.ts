import { useMutation } from '@tanstack/react-query';
import { Note } from '../../types';

const updateNote = (
  noteId: number,
  { title, content }: Pick<Note, 'title' | 'content'>,
): Promise<Note> => {
  return fetch(`http://localhost:3000/notes/${noteId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  }).then((res) => res.json());
};

export const useUpdateNote = (noteId: number) => {
  return useMutation({
    mutationFn: ({ title, content }: Pick<Note, 'title' | 'content'>) =>
      updateNote(noteId, { title, content }),
  });
};
