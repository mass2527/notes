import { useSearchParams } from 'react-router-dom';
import { useNotesQuery } from './queries';
import { useCurrentUser } from '../../hooks/use-current-user';
import { getFormattedDate } from '../../utils/time';
import Fuse from 'fuse.js';
import LinkWithQuery from '../../components/link-with-query';

const fuseOptions = {
  keys: ['title', 'content'],
};

export default function NoteList() {
  const currentUser = useCurrentUser();
  const notesQueryResult = useNotesQuery(currentUser.id);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  if (notesQueryResult.data) {
    const fuse = new Fuse(notesQueryResult.data, fuseOptions);
    const filteredNotes =
      query === ''
        ? notesQueryResult.data
        : fuse.search(query).map(({ item }) => item);

    return (
      <ul className="flex flex-col gap-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <li key={note.id}>
              <LinkWithQuery
                to={`/notes/${note.id}`}
                className="flex flex-col p-4 border border-neutral-700 rounded-lg"
              >
                <strong>{note.title}</strong>
                <time
                  dateTime={note.updatedAt}
                  className="text-sm text-neutral-500"
                >
                  {getFormattedDate(new Date(note.updatedAt))}
                </time>
              </LinkWithQuery>
            </li>
          ))
        ) : (
          <p>
            <strong>
              Click the <span className="underline">NEW</span> link
            </strong>
            <br />
            to create your first note!
          </p>
        )}
      </ul>
    );
  }

  if (notesQueryResult.error) {
    return <div>Error...</div>;
  }

  return <div>Loading...</div>;
}
