"use client";

import BaseLink from "./BaseLink";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, Users, GraduationCap, Heart, Info, FileText, Globe } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [basePath, setBasePath] = useState("");
  const pathname = usePathname() || "/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname || "/";
      if (path.startsWith("/mumadrasaorphanagebd")) {
        setBasePath("/mumadrasaorphanagebd");
      } else {
        setBasePath("");
      }
    }
  }, []);

  // Language preference & default behavior
  useEffect(() => {
    if (typeof window === "undefined") return;

    const rawPath = window.location.pathname || "/";
    const withoutBase = rawPath.startsWith("/mumadrasaorphanagebd")
      ? rawPath.replace("/mumadrasaorphanagebd", "") || "/"
      : rawPath;

    const stored = window.localStorage.getItem("siteLang");
    const preferred = stored === "en" || stored === "bn" ? stored : "bn"; // default Bangla

    const isBnPath = withoutBase === "/bn" || withoutBase.startsWith("/bn/");

    // If preferred is Bangla but we're not on a Bangla path, redirect to Bangla (trailing slash for static export)
    if (preferred === "bn" && !isBnPath) {
      const pathPart = withoutBase === "/" ? "/bn" : `/bn${withoutBase}`;
      const withSlash = pathPart === "/bn" || pathPart.endsWith("/") ? pathPart : `${pathPart}/`;
      const target = (basePath || "") + withSlash;
      window.location.replace(target);
      return;
    }

    // If preferred is English but we're on a Bangla path, redirect to English equivalent (trailing slash for static export)
    if (preferred === "en" && isBnPath) {
      const englishPath =
        withoutBase === "/bn"
          ? "/"
          : withoutBase.replace(/^\/bn/, "") || "/";
      const withSlash = englishPath === "/" || englishPath.endsWith("/") ? englishPath : `${englishPath}/`;
      const target = (basePath || "") + withSlash;
      window.location.replace(target);
    }
  }, [basePath]);

  const cleanedPath = pathname.startsWith("/mumadrasaorphanagebd")
    ? pathname.replace("/mumadrasaorphanagebd", "") || "/"
    : pathname;

  const isBangla = cleanedPath === "/bn" || cleanedPath.startsWith("/bn/");

  // Match next.config trailingSlash: true so language switcher and redirects work with static export
  const withTrailingSlash = (p: string) =>
    p === "/" || p === "/bn" || p.endsWith("/") ? p : `${p}/`;

  const navItemsEn = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/courses", label: "Programs", icon: GraduationCap },
  ];

  const navItemsBn = [
    { href: "/bn", label: "হোম", icon: BookOpen },
    { href: "/bn/about", label: "আমাদের সম্পর্কে", icon: Info },
    { href: "/bn/courses", label: "প্রোগ্রামসমূহ", icon: GraduationCap },
  ];

  const navItems = isBangla ? navItemsBn : navItemsEn;

  const enPathRaw = isBangla
    ? cleanedPath === "/bn"
      ? "/"
      : cleanedPath.replace(/^\/bn/, "") || "/"
    : cleanedPath || "/";

  const bnPathRaw = isBangla
    ? cleanedPath || "/bn"
    : cleanedPath === "/"
      ? "/bn"
      : `/bn${cleanedPath}`;

  const enPath = withTrailingSlash(enPathRaw);
  const bnPath = withTrailingSlash(bnPathRaw);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <BaseLink href="/" className="flex items-center space-x-3">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0">
              {basePath ? (
                <Image
                  src={`${basePath}/logo.png`}
                  alt="Madinatul Uloom Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 48px, 56px"
                  unoptimized={true}
                />
              ) : (
                <Image
                  src="/logo.png"
                  alt="Madinatul Uloom Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 48px, 56px"
                  unoptimized={true}
                />
              )}
            </div>
            <div className="hidden sm:block">
              {isBangla ? (
                <>
                  <h1 className="text-xl font-bold text-gray-900 bangla-text">
                    মাদিনাতুল উলূম
                  </h1>
                  <p className="text-xs text-gray-600 bangla-text">
                    মাদরাসা ও এতিমখানা
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-xl font-bold text-gray-900">Madinatul Uloom</h1>
                  <p className="text-xs text-gray-600">Madrasa & Orphanage</p>
                </>
              )}
            </div>
          </BaseLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <BaseLink
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-islamic-light hover:text-islamic-green transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </BaseLink>
              );
            })}
            {/* Enroll Now Button */}
            <BaseLink
              href={isBangla ? "/bn/application" : "/application"}
              className="ml-4 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="h-5 w-5" />
              <span className={isBangla ? "bangla-text" : ""}>
                {isBangla ? "ভর্তি আবেদন" : "Enroll Now"}
              </span>
            </BaseLink>
            {/* Donate Button - Right End */}
            <BaseLink
              href={isBangla ? "/bn/donate" : "/donate"}
              className="ml-2 flex items-center space-x-2 bg-gradient-to-r from-islamic-green via-teal-600 to-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-teal-700 hover:via-teal-600 hover:to-islamic-green transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="h-5 w-5" />
              <span className={isBangla ? "bangla-text" : ""}>
                {isBangla ? "অনুদান দিন" : "Donate"}
              </span>
            </BaseLink>
            {/* Language Switcher Dropdown (globe + menu) */}
            <div className="ml-3 relative">
              <button
                type="button"
                onClick={() => setIsLangOpen((open) => !open)}
                className="flex items-center space-x-2 px-3 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className={isBangla ? "bangla-text" : ""}>
                  {isBangla ? "বাংলা" : "English"}
                </span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border border-gray-200 bg-white z-50">
                  <BaseLink
                    href={enPath}
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.localStorage.setItem("siteLang", "en");
                      }
                      setIsLangOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2 text-sm ${
                      !isBangla ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    <span>English</span>
                    <span className="text-xs text-gray-500">English</span>
                  </BaseLink>
                  <BaseLink
                    href={bnPath}
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.localStorage.setItem("siteLang", "bn");
                      }
                      setIsLangOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2 text-sm ${
                      isBangla ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    <span className="bangla-text">বাংলা</span>
                    <span className="text-xs text-gray-500">Bengali</span>
                  </BaseLink>
                </div>
              )}
            </div>
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
                <BaseLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-islamic-light hover:text-islamic-green transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </BaseLink>
              );
            })}
            {/* Enroll Now Button - Mobile */}
            <BaseLink
              href={isBangla ? "/bn/application" : "/application"}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 mt-2"
            >
              <FileText className="h-5 w-5" />
              <span className={isBangla ? "bangla-text" : ""}>
                {isBangla ? "ভর্তি আবেদন" : "Enroll Now"}
              </span>
            </BaseLink>
            {/* Donate Button - Mobile */}
            <BaseLink
              href={isBangla ? "/bn/donate" : "/donate"}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-islamic-green via-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-teal-700 hover:via-teal-600 hover:to-islamic-green transition-all duration-300 mt-2"
            >
              <Heart className="h-5 w-5" />
              <span className={isBangla ? "bangla-text" : ""}>
                {isBangla ? "অনুদান দিন" : "Donate"}
              </span>
            </BaseLink>
            {/* Language Switcher - Mobile */}
            <div className="mt-3 border border-gray-200 rounded-lg p-2">
              <div className="flex items-center mb-1 px-2">
                <Globe className="h-4 w-4 text-gray-600 mr-2" />
                <span className="text-sm text-gray-700 font-semibold">Language</span>
              </div>
              <div className="space-y-1">
                <BaseLink
                  href={enPath}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.localStorage.setItem("siteLang", "en");
                    }
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 text-sm rounded-md ${
                    !isBangla ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"
                  }`}
                >
                  <span>English</span>
                  <span className="text-xs text-gray-500">English</span>
                </BaseLink>
                <BaseLink
                  href={bnPath}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.localStorage.setItem("siteLang", "bn");
                    }
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 text-sm rounded-md ${
                    isBangla ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"
                  }`}
                >
                  <span className="bangla-text">বাংলা</span>
                  <span className="text-xs text-gray-500">Bengali</span>
                </BaseLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

