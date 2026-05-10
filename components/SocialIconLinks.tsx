import type { ReactNode } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/social-links';

/** Official X (Twitter) mark — single path, currentColor fill */
function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/** Pinterest mark (monochrome) — currentColor fill */
function IconPinterest({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M12.04 0C5.408 0 .036 5.372.036 11.996c0 5.084 3.158 9.414 7.618 11.162-.105-.949-.199-2.403.041-3.439l.919-3.85c.135-.895.282-2.15-.086-3.115-.344-.95-1.061-1.19-1.653-1.19-.613 0-1.309.36-1.667 1.006-.606 1.054-.076 2.642.975 3.521.495.396.864 1.154.739 1.824-.134.703-.72 1.2-1.349 1.2-.807 0-1.453-.824-1.254-2.29.239-1.53 1.07-3.835 3.389-5.013 1.673-.855 3.98-.946 5.85-.26 2.04.71 3.52 2.43 4.01-.07-.38-.12-.79-.12-1.2 0-2.04 1.15-3.77 2.79-4.42-.28-.06-.57-.09-.88-.09-.68 0-1.31.28-1.72.73-.38.42-.57.98-.57 1.57 0 .29.05.57.14.83-1.13-.56-1.91-1.71-1.91-3.04 0-.68.18-1.31.49-1.86-.01-.02-.02-.04-.02-.06 0-.34.1-.65.27-.91-.05 0-.1-.01-.15-.01-2.66 0-4.8 2.14-4.8 4.8 0 .24.02.48.05.71-2.43-1.22-4.09-3.74-4.09-6.64 0-1.48.39-2.87 1.08-4.07C2.18 3.08 6.78 0 12.04 0z" />
    </svg>
  );
}

const iconGold =
  'text-[#D4AF37] transition-colors duration-300 hover:text-[#F3E5AB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]';

type Variant = 'compact' | 'circles';

export default function SocialIconLinks({
  variant = 'compact',
  className = '',
}: {
  variant?: Variant;
  className?: string;
}) {
  const iconSm = 'h-4 w-4 md:h-5 md:w-5';

  const items: { href: string; label: string; node: ReactNode }[] = [
    {
      href: SOCIAL_LINKS.instagram,
      label: 'Instagram — Adda Tours',
      node: <Instagram className={iconSm} strokeWidth={1.5} />,
    },
    {
      href: SOCIAL_LINKS.facebook,
      label: 'Facebook — Adda Tours',
      node: <Facebook className={iconSm} strokeWidth={1.5} />,
    },
    {
      href: SOCIAL_LINKS.x,
      label: 'X — Adda Tours',
      node: <IconX className={`${iconSm} scale-90 md:scale-100`} />,
    },
    {
      href: SOCIAL_LINKS.pinterest,
      label: 'Pinterest — Adda Tours',
      node: <IconPinterest className={iconSm} />,
    },
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-5 md:gap-6 ${className}`}>
        {items.map(({ href, label, node }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${iconGold} inline-flex items-center justify-center`}
          >
            {node}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-4 md:gap-6 ${className}`}>
      {items.map(({ href, label, node }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 md:h-12 md:w-12 ${iconGold} hover:border-[#D4AF37] hover:bg-[#D4AF37]/10`}
        >
          {node}
        </a>
      ))}
    </div>
  );
}
