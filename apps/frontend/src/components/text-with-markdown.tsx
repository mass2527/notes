import { marked } from 'marked';
import DOMPurify from 'dompurify';

function TextWithMarkdown({ text }: { text: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(text)),
      }}
    />
  );
}

export default TextWithMarkdown;
