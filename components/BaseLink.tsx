"use client";

import Link from "next/link";

interface BaseLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function BaseLink({ href, children, className, onClick, ...props }: BaseLinkProps) {
  // If href is external (starts with http:// or https://), use it as-is
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  // For internal links, Next.js Link automatically handles basePath from next.config.js
  // No need to manually prepend basePath - Next.js does this automatically
  return (
    <Link href={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

