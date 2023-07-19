import { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={twMerge(
        'py-1 px-4 rounded-[6px] bg-transparent border border-neutral-700 placeholder:text-neutral-500 hover:border-white focus-within:border-white outline-none',
        className,
      )}
      {...props}
    />
  );
}

export default Textarea;
