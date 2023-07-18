import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function Textarea(props: Props) {
  return <textarea className="rounded p-1 border border-gray-200" {...props} />;
}

export default Textarea;
