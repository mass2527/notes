export type Note = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  userId: number;
};

export type NoteForm = Pick<Note, 'title' | 'content'>;
