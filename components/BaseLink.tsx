"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface BaseLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function BaseLink({ href, children, className, onClick, ...props }: BaseLinkProps) {
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/mumadrasaorphanagebd')) {
        setBasePath('/mumadrasaorphanagebd');
      }
    }
  }, []);

  // If href is external (starts with http:// or https://), use it as-is
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  // For internal links, prepend basePath if needed
  const finalHref = basePath && href !== '/' ? `${basePath}${href}` : (basePath && href === '/' ? basePath : href);

  return (
    <Link href={finalHref} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

