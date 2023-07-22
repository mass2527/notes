import { marked } from 'marked';
import DOMPurify from 'dompurify';

function TextWithMarkdown({ text }: { text: string }) {
  return (
    <article
      className="prose prose-neutral dark:prose-invert prose-img:rounded prose-a:text-blue-500"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(text)),
      }}
    />
  );
}

export default TextWithMarkdown;
