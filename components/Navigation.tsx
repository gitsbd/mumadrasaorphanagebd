"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, BookOpen, Users, GraduationCap, Heart, Info, FileText } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [basePath, setBasePath] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/mumadrasaorphanagebd')) {
        setBasePath('/mumadrasaorphanagebd');
      }
    }
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/courses", label: "Program", icon: GraduationCap },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0">
              <Image
                src={basePath ? `${basePath}/logo.png` : '/logo.png'}
                alt="Madinatul Uloom Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 48px, 56px"
                unoptimized={true}
                key={basePath} // Force re-render when basePath changes
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Madinatul Uloom</h1>
              <p className="text-xs text-gray-600">Madrasa & Orphanage</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-islamic-light hover:text-islamic-green transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            {/* Enroll Now Button */}
            <Link
              href="/application"
              className="ml-4 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="h-5 w-5" />
              <span>Enroll Now</span>
            </Link>
            {/* Donate Button - Right End */}
            <Link
              href="/donate"
              className="ml-2 flex items-center space-x-2 bg-gradient-to-r from-islamic-green via-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-teal-700 hover:via-teal-600 hover:to-islamic-green transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-islamic-light hover:text-islamic-green transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            {/* Enroll Now Button - Mobile */}
            <Link
              href="/application"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 mt-2"
            >
              <FileText className="h-5 w-5" />
              <span>Enroll Now</span>
            </Link>
            {/* Donate Button - Mobile */}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-islamic-green via-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-teal-700 hover:via-teal-600 hover:to-islamic-green transition-all duration-300 mt-2"
            >
              <Heart className="h-5 w-5" />
              <span>Donate</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

