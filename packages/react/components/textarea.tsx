import { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={twMerge(
        `py-1 px-4 rounded-[6px] 
        bg-transparent placeholder:text-neutral-500
        border border-neutral-700 hover:border-white 
        disabled:border-neutral-700 disabled:text-neutral-500 disabled:placeholder:text-neutral-700`,
        className,
      )}
      {...props}
    />
  );
}
