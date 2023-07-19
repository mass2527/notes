import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return (
    <input
      className="py-1 px-4 rounded-[6px] bg-transparent border border-neutral-700 placeholder:text-neutral-500 hover:border-white focus-within:border-white outline-none"
      {...props}
    />
  );
}

export default Input;
