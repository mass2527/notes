import { useMutation } from '@tanstack/react-query';
import { EditableNote, Note } from '../../types';
import { http } from '../../http';

const createNote = ({ title, content }: EditableNote): Promise<Note> => {
  return http.post('/notes', {
    title,
    content,
  });
};

export const useCreateNote = () => {
  return useMutation({
    mutationFn: ({ title, content }: EditableNote) =>
      createNote({ title, content }),
  });
};
