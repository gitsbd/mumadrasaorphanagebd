"use client";

import { useEffect } from "react";

export default function FaviconHandler() {
  useEffect(() => {
    // Only run on client-side and only if we're on GitHub Pages (with basePath)
    if (typeof window === 'undefined') return;
    
    const pathname = window.location.pathname;
    const isGitHubPages = pathname.startsWith('/mumadrasaorphanagebd');
    
    // Only update favicon links if we're on GitHub Pages
    // In local development, Next.js handles favicon automatically
    if (!isGitHubPages) return;
    
    const basePath = '/mumadrasaorphanagebd';

    // Remove existing favicon links (but keep Next.js default ones in dev)
    const existingLinks = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
    existingLinks.forEach(link => {
      // Only remove links that don't have the basePath (to avoid removing our own)
      const href = link.getAttribute('href') || '';
      if (!href.includes(basePath)) {
        link.remove();
      }
    });

    // Check if favicon links with basePath already exist
    const existingBasePathLinks = document.querySelectorAll(`link[href^='${basePath}']`);
    if (existingBasePathLinks.length > 0) {
      // Links already exist, no need to recreate
      return;
    }

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

