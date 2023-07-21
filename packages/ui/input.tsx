import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      ref={ref}
      className={`py-1 px-4 rounded-[6px] 
      bg-transparent placeholder:text-neutral-500 
      border border-neutral-700 hover:border-white disabled:border-neutral-700`}
      {...props}
    />
  );
});
