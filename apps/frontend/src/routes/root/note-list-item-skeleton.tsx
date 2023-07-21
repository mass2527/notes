import { TextSkeleton } from '@philly/react';

function NoteListItemSkeleton() {
  return (
    <div className="p-4 border border-neutral-700 rounded-lg">
      <div className="animate-pulse">
        <TextSkeleton fontSize={16} />
        <div className="grid grid-cols-3">
          <TextSkeleton fontSize={14} lineHeight={20} />
        </div>
      </div>
    </div>
  );
}

export default NoteListItemSkeleton;
