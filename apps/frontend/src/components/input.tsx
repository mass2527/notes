import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return <input className="rounded p-1 border border-gray-200" {...props} />;
}

export default Input;
