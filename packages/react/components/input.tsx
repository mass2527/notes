import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { LoadingIcon, SearchIcon } from './icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ isLoading, type, ...props }, ref) => {
    const id = useId();

    return (
      <div
        className={`group flex items-center gap-2 py-1 px-4 rounded-[6px] border border-neutral-700 hover:border-white focus-within:ring-4 ${
          props.disabled ? 'hover:border-neutral-700 text-neutral-500' : ''
        }`}
      >
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
          className={`placeholder:text-neutral-500 disabled:placeholder:text-neutral-700 bg-transparent ring-0 w-full `}
          autoComplete="off"
          {...props}
        />
      </div>
    );
  },
);
