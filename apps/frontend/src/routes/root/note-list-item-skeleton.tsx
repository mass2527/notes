function NoteListItemSkeleton() {
  return (
    <div className="p-4 border border-neutral-700 rounded-lg">
      <div className="animate-pulse">
        <div className="space-y-3">
          <div className="h-4 bg-neutral-700 rounded-sm"></div>
          <div className="grid grid-cols-3">
            <div className="h-4 bg-neutral-700 rounded-sm col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteListItemSkeleton;
