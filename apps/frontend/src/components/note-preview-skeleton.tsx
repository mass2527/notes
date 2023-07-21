import { twMerge } from 'tailwind-merge';
import { TextSkeleton } from '@philly/react';

function NotePreviewSkeleton({ className }: { className?: string }) {
  return (
    <div className={twMerge('animate-pulse', className)}>
      <div className="space-y-6">
        <div className="space-y-2">
          <TextSkeleton fontSize={14} lineHeight={32} />
          <TextSkeleton fontSize={48} lineHeight={48} />
        </div>

        <div>
          <TextSkeleton fontSize={16} />
          <TextSkeleton fontSize={16} />
          <TextSkeleton fontSize={16} />
        </div>
      </div>
    </div>
  );
}

export default NotePreviewSkeleton;
