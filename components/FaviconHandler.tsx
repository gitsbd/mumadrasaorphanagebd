"use client";

import { useEffect } from "react";

export default function FaviconHandler() {
  useEffect(() => {
    // Detect basePath from window location (for GitHub Pages)
    let basePath = '';
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/mumadrasaorphanagebd')) {
        basePath = '/mumadrasaorphanagebd';
      }
    }

    // Remove existing favicon links
    const existingLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
    existingLinks.forEach(link => link.remove());

    // Create new favicon links with correct basePath
    const faviconIco = document.createElement('link');
    faviconIco.rel = 'icon';
    faviconIco.href = `${basePath}/favicon.ico`;
    faviconIco.type = 'image/x-icon';
    document.head.appendChild(faviconIco);

    const faviconPng = document.createElement('link');
    faviconPng.rel = 'icon';
    faviconPng.href = `${basePath}/logo.png`;
    faviconPng.type = 'image/png';
    document.head.appendChild(faviconPng);

    const shortcutIcon = document.createElement('link');
    shortcutIcon.rel = 'shortcut icon';
    shortcutIcon.href = `${basePath}/favicon.ico`;
    document.head.appendChild(shortcutIcon);

    const appleIcon = document.createElement('link');
    appleIcon.rel = 'apple-touch-icon';
    appleIcon.href = `${basePath}/logo.png`;
    document.head.appendChild(appleIcon);
  }, []);

  return null;
}

