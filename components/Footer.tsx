import Link from "next/link";
import { Mail, MapPin, Phone, BookOpen, Facebook, User, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-islamic-green" />
              <h3 className="text-xl font-bold">Madinatul Uloom</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A non-profit Islamic educational institution providing free education to orphans and underprivileged children based on Qur'anic and Sunnah principles.
            </p>
            
            {/* Organization Section */}
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Users className="h-5 w-5 text-islamic-green" />
                <h4 className="text-base font-semibold">Organization</h4>
              </div>
              <ul className="space-y-2 ml-7">
                <li>
                  <Link href="/organization/executive-committee" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    Executive Committee
                  </Link>
                </li>
                <li>
                  <Link href="/organization/standing-committee" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    Standing Committee
                  </Link>
                </li>
                <li>
                  <Link href="/organization/advisory-committee" className="text-gray-400 hover:text-islamic-green transition-colors text-sm">
                    Advisory Committee
                  </Link>
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
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-islamic-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy-policy" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/refund-policy" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/registration" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Registration & Compliance
                </Link>
              </li>
              <li>
                <Link href="/legal/copyright" className="text-gray-400 hover:text-islamic-green transition-colors">
                  Copyright Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Kaya Kori (Baligange Bazar), Nakla,<br />
                  Sherpur, Mymensingh, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-islamic-green flex-shrink-0" />
                <a
                  href="mailto:mu.madrasaorphanage.bd@gmail.com"
                  className="text-gray-400 hover:text-islamic-green transition-colors text-sm"
                >
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 pt-2 border-t border-gray-800">
                <User className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p className="mb-1">Executive Director: Md. Shahnewaz Zaman (Shanto)</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
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
              © {new Date().getFullYear()} Madinatul Uloom Madrasa & Orphanage. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Registered under Bangladesh Government Regulations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

