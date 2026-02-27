"use client";

import BaseLink from "@/components/BaseLink";
import {
  Mail,
  MapPin,
  Phone,
  BookOpen,
  Facebook,
  User,
  Users,
  Info,
  GraduationCap,
  Heart,
  Briefcase,
  Shield,
  FileText,
  RefreshCw,
  AlertTriangle,
  FileCheck,
  Copyright,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";

  const cleaned = pathname.startsWith("/mumadrasaorphanagebd")
    ? pathname.replace("/mumadrasaorphanagebd", "") || "/"
    : pathname;

  const isBangla = cleaned === "/bn" || cleaned.startsWith("/bn/");

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-islamic-green" />
              <h3 className="text-xl font-bold">
                {isBangla ? (
                  <span className="bangla-text">মাদিনাতুল উলূম</span>
                ) : (
                  "Madinatul Uloom"
                )}
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {isBangla ? (
                <span className="bangla-text">
                  একটি অরাজনৈতিক, অ-লাভজনক ইসলামী শিক্ষা প্রতিষ্ঠান; যেখানে কুরআন ও সুন্নাহর আলোকে এতিম ও
                  অসহায় শিশুদের জন্য বিনামূল্যে শিক্ষা ও লালন-পালনের ব্যবস্থা করা হয়।
                </span>
              ) : (
                "A non-profit Islamic educational institution providing free education to orphans and underprivileged children based on Qur'anic and Sunnah principles."
              )}
            </p>
            
            {/* Organization Section */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Users className="h-5 w-5 text-islamic-green" />
                <h4 className="text-base font-semibold">
                  {isBangla ? <span className="bangla-text">পরিচালনা পর্ষদ</span> : "Organization"}
                </h4>
              </div>
              <ul className="space-y-2 ml-7">
                <li>
                  <BaseLink href="/organization/executive-committee" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    {isBangla ? <span className="bangla-text">এক্সিকিউটিভ কমিটি</span> : "Executive Committee"}
                  </BaseLink>
                </li>
                <li>
                  <BaseLink href="/organization/standing-committee" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    {isBangla ? <span className="bangla-text">স্ট্যান্ডিং কমিটি</span> : "Standing Committee"}
                  </BaseLink>
                </li>
                <li>
                  <BaseLink href="/organization/advisory-committee" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    {isBangla ? <span className="bangla-text">পরামর্শক কমিটি</span> : "Advisory Committee"}
                  </BaseLink>
                </li>
                <li>
                  <BaseLink href="/legal/constitution" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    {isBangla ? <span className="bangla-text">সংবিধান</span> : "Constitution"}
                  </BaseLink>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-3">
              <Facebook className="h-5 w-5 text-islamic-green" />
              <a
                href="http://facebook.com/profile.php?id=61551745422535"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-islamic-green transition-colors text-sm"
              >
                {isBangla ? <span className="bangla-text">ফেসবুকে আমাদের অনুসরণ করুন</span> : "Follow us on Facebook"}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isBangla ? <span className="bangla-text">গুরুত্বপূর্ণ লিংক</span> : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <BaseLink href="/about" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <Info className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "আমাদের সম্পর্কে" : "About Us"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/courses" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <GraduationCap className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "প্রোগ্রামসমূহ" : "Courses"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/donate" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <Heart className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "অনুদান দিন" : "Donate"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink
                  href="/forms/student-registration"
                  className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors"
                >
                  <FileText className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "Student Admission Form (English)" : "Student Admission Form"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink
                  href="/forms/student-admission-bn"
                  className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors"
                >
                  <FileText className="h-4 w-4 text-islamic-green" />
                  <span className="bangla-text">শিক্ষার্থী ভর্তি ফরম (বাংলা)</span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/career" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <Briefcase className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "ক্যারিয়ার" : "Career"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/contact" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <Users className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "যোগাযোগ" : "Contact Us"}
                  </span>
                </BaseLink>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isBangla ? <span className="bangla-text">আইনগত তথ্য</span> : "Legal"}
            </h3>
            <ul className="space-y-2">
              <li>
                <BaseLink href="/legal/privacy-policy" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <Shield className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "প্রাইভেসি পলিসি" : "Privacy Policy"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/legal/terms" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <FileText className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "টার্মস অ্যান্ড কন্ডিশনস" : "Terms & Conditions"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/legal/refund-policy" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <RefreshCw className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "রিফান্ড পলিসি" : "Refund Policy"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/legal/disclaimer" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <AlertTriangle className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "ডিসক্লেইমার" : "Disclaimer"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/legal/registration" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <FileCheck className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "নিবন্ধন ও রেগুলেশন" : "Registration & Compliance"}
                  </span>
                </BaseLink>
              </li>
              <li>
                <BaseLink href="/legal/copyright" className="flex items-center space-x-2 text-gray-400 hover:text-islamic-green transition-colors">
                  <Copyright className="h-4 w-4 text-islamic-green" />
                  <span className={isBangla ? "bangla-text" : ""}>
                    {isBangla ? "কপিরাইট নোটিশ" : "Copyright Notice"}
                  </span>
                </BaseLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isBangla ? <span className="bangla-text">যোগাযোগ</span> : "Contact Information"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {isBangla ? (
                    <span className="bangla-text">
                      কৈয়াকুড়ি ( বালিগঞ্জ বাজার )
                      <br />
                      নকলা, শেরপুর, ময়মনসিংহ
                      <br />
                      বাংলাদেশ
                    </span>
                  ) : (
                    <>
                      Kaya Kori (Baligange Bazar), Nakla,
                      <br />
                      Sherpur, Mymensingh, Bangladesh
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start space-x-3 pt-2 border-t border-gray-800">
                <User className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p className="mb-1">
                    {isBangla ? (
                      <span className="bangla-text">
                        নির্বাহী পরিচালক:
                        <br />
                        মোঃ শাহনেওয়াজ জামান (শান্ত)
                      </span>
                    ) : (
                      "Executive Director: Md. Shahnewaz Zaman (Shanto)"
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a
                    href="mailto:mu.madrasaorphanage.bd@gmail.com"
                    className="text-gray-400 hover:text-islamic-green transition-colors text-sm block mb-1"
                  >
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                  <p className="text-gray-300 font-semibold mb-1">Contact for Student Admission:</p>
                  <a href="tel:+8801728014014" className="hover:text-islamic-green transition-colors block">
                    +880 17 2801 4014
                  </a>
                  <a href="tel:+8801791206098" className="hover:text-islamic-green transition-colors block">
                    +880 17 9120 6098
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {isBangla ? (
                <span className="bangla-text">
                  © {new Date().getFullYear()} মাদিনাতুল উলূম মাদরাসা ও এতিমখানা। সর্বস্বত্ব সংরক্ষিত।
                </span>
              ) : (
                <>© {new Date().getFullYear()} Madinatul Uloom Madrasa & Orphanage. All rights reserved.</>
              )}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              {isBangla ? (
                <span className="bangla-text">
                  বাংলাদেশ সরকারের প্রযোজ্য আইন ও বিধি-বিধানের আলোকে নিবন্ধন/নিবন্ধন প্রক্রিয়াধীন
                </span>
              ) : (
                "Registered under Bangladesh Government Regulations"
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

