import React from 'react';

/** Renders `**bold**` segments as <strong>. */
export function RichParagraph({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-medium text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </p>
  );
}
