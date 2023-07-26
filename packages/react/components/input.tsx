import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { LoadingIcon, SearchIcon } from './icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ isLoading, type, ...props }, ref) => {
    const id = useId();

    return (
      <div className="flex items-center gap-2 py-1 px-4 rounded-[6px] border border-neutral-700 hover:border-white disabled:border-neutral-700 focus-within:ring-4">
        {isLoading ? (
          <LoadingIcon />
        ) : type === 'search' ? (
          <label htmlFor={id}>
            <SearchIcon className="text-neutral-500 w-4 h-4" />
          </label>
        ) : null}
        <input
          id={id}
          type={type}
          ref={ref}
          className={`placeholder:text-neutral-500 bg-transparent ring-0`}
          autoComplete="off"
          {...props}
        />
      </div>
    );
  },
);
