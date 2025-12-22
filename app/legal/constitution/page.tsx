import BaseLink from "@/components/BaseLink";
import { FileText, Building2, Users, Scale, BookOpen, Shield, Award, Mail, MapPin, User, Heart } from "lucide-react";

export default function Constitution() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Constitution</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Organizational Constitution of Madinatul Uloom Madrasa and Orphanage
          </p>
          <p className="text-sm text-teal-200 mt-4">
            Compliant with Islamic Education Board and Islamic Sharia Board of Bangladesh
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Institution Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Madinatul Uloom Madrasa and Orphanage</h2>
              <p className="text-lg text-gray-600 italic mb-4">
                A Non-Profit Islamic Organization based in Bangladesh
              </p>
              <div className="border-t border-b border-gray-200 py-4 space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-islamic-green" />
                  <span className="text-gray-700">Kaya Kori, Baligange Bazar, Nakla, Sherpur, Mymensingh, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-islamic-green" />
                  <span className="text-gray-700">Executive Director: Md. Shahnewaz Zaman (Shanto)</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-islamic-green" />
                  <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Name & Address */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Building2 className="h-6 w-6 mr-3 text-islamic-green" />
              1. Name & Address
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div>
                  <strong>Name:</strong> Madinatul Uloom Madrasa and Orphanage
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div>
                  <strong>Location:</strong> Kaya Kori, Baligange Bazar, Nakla, Sherpur, Mymensingh, Bangladesh
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Nature and Identity */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-islamic-green" />
              2. Nature and Identity
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This is a non-political, non-profit, Islamic educational and charitable institution established for the care, 
              education, and upbringing of orphan and underprivileged children based on Qur'anic and Sunnah principles.
            </p>
          </div>

          {/* Section 3: Core Principles */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-3 text-islamic-green" />
              3. Core Principles
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The institution will be guided by the following Islamic values:
            </p>
            <div className="bg-islamic-light rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Ikhlas (Sincerity)",
                  "Dawah (Propagation of Islam)",
                  "Taleem (Education)",
                  "Ibadah (Worship)",
                  "Khidmat (Service)",
                  "Tarbiyat (Upbringing)",
                  "Hidayah (Guidance)",
                  "Taqwa (Piety)",
                  "Deen (Religion)",
                  "Amanah (Trustworthiness)",
                ].map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-islamic-green mr-2 font-bold">•</span>
                    <span className="text-gray-800 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Vision and Objectives */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-islamic-green" />
              4. Vision and Objectives
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "To provide free Islamic and moral education to orphans and poor children",
                "To offer Qur'an memorization (Hifz) and related Islamic knowledge",
                "To ensure safe housing, food, clothing, and medical care for needy students",
                "To promote a peaceful, righteous society through Islamic teachings",
              ].map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-islamic-green mr-3 font-semibold mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Committee Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-3 text-islamic-green" />
              5. Committee Structure
            </h2>

            {/* 5.1 Permanent Committee */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">5.1 Permanent Committee</h3>
              <p className="text-gray-700 mb-4">
                The Permanent Committee is the highest policy-making and supervisory body of the institution.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex items-start">
                  <span className="text-islamic-green mr-2 font-semibold">•</span>
                  <div>
                    <strong>Membership Requirements:</strong> Must contribute a donation of{" "}
                    <strong>BDT 500,000</strong> (five lakh) and not hold any executive committee role.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-islamic-green mr-2 font-semibold">•</span>
                  <div>
                    <strong>Composition:</strong>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>- Chief Member</li>
                      <li>- Minimum two additional members</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-islamic-green mr-2 font-semibold">•</span>
                  <div>
                    <strong>Term:</strong> Permanent, unless resigned or removed for cause.
                  </div>
                </div>
              </div>
            </div>

            {/* 5.2 Executive Committee */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">5.2 Executive Committee</h3>
              <p className="text-gray-700 mb-4">
                Formed under the supervision of the Permanent Committee, responsible for day-to-day operations.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div>
                  <strong className="text-gray-800">Positions include:</strong>
                  <ul className="ml-4 mt-2 space-y-1 text-gray-700">
                    {[
                      "Executive Director",
                      "President",
                      "Vice President",
                      "General Secretary",
                      "Joint Secretary",
                      "Treasurer",
                      "Publicity Secretary",
                      "General Members",
                    ].map((position, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-islamic-green mr-2">•</span>
                        <span>{position}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <strong className="text-gray-800">Responsibilities:</strong>
                  <ul className="ml-4 mt-2 space-y-1 text-gray-700">
                    {[
                      "Oversee daily operations and school activities",
                      "Manage staff and students",
                      "Coordinate with donors and sponsors",
                      "Approve and manage the institution's annual budget",
                    ].map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-islamic-green mr-2">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5.3 Advisory Committee */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">5.3 Advisory Committee</h3>
              <p className="text-gray-700">
                Composed of respected advisors and elders who provide non-binding guidance and support.
              </p>
            </div>
          </div>

          {/* Section 6: General Membership */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-3 text-islamic-green" />
              6. General Membership
            </h2>
            <p className="text-gray-700 mb-4">
              Any individual who agrees with the mission and values of the madrasa may apply to be a general member.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <strong className="text-gray-800">Eligibility:</strong>
              <ul className="ml-4 mt-2 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-islamic-green mr-2">•</span>
                  <span>Submit application form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islamic-green mr-2">•</span>
                  <span>Pay a small annual donation (not compulsory)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-islamic-green mr-2">•</span>
                  <span>Remain actively involved in madrasa activities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7: Funding and Financial Management */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-islamic-green" />
              7. Funding and Financial Management
            </h2>
            <p className="text-gray-700 mb-4">
              The institution's funding will come from:
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              {[
                "Zakat, Sadaqah, and Waqf contributions",
                "Domestic and international donations",
                "Endowments and charitable support from sponsors",
                "Monthly sponsorships for orphan care",
                "Government or NGO support (if available)",
              ].map((source, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-islamic-green mr-3 font-semibold">•</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-700 mb-6">
              <strong className="text-gray-800">Use of Funds Includes:</strong>
              <ul className="ml-4 mt-2 space-y-1 text-gray-700">
                {[
                  "Orphan housing, meals, and education",
                  "Staff salaries",
                  "Institutional development",
                  "Religious and educational projects",
                ].map((use, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-700 mr-2">•</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Donate Call-to-Action */}
            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-6 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">Support Our Mission</h3>
              <p className="text-sm text-teal-100 mb-4">
                Your contributions help us provide free education and care to orphaned and underprivileged children
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center space-x-2 bg-white text-islamic-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Heart className="h-5 w-5" />
                <span>Donate Now</span>
              </BaseLink>
            </div>
          </div>

          {/* Section 8: Meetings and Decision Making */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-3 text-islamic-green" />
              8. Meetings and Decision Making
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div>
                  <strong>Annual General Meeting (AGM):</strong> Held once per year
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div>
                  <strong>Emergency Meeting:</strong> May be called by the President or Executive Director
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div>
                  <strong>Quorum:</strong> 50% of committee members required for decision making
                </div>
              </div>
            </div>
          </div>

          {/* Section 9: Resignation, Removal, and Election */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-islamic-green" />
              9. Resignation, Removal, and Election
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Members may resign with a written letter",
                "Members may be removed for misconduct or inaction, with approval from the Permanent Committee",
                "Elections for the Executive Committee will be held at the end of each term (if term limits are introduced)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-islamic-green mr-3 font-semibold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 10: Legal Status & Registration */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-islamic-green" />
              10. Legal Status & Registration
            </h2>
            <p className="text-gray-700 mb-4">
              The institution may be registered under:
            </p>
            <div className="bg-islamic-light rounded-lg p-4 space-y-2">
              {[
                "Department of Social Welfare",
                "Cooperative Department",
                "Islamic Foundation Bangladesh",
              ].map((department, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-islamic-green mr-2 font-bold">•</span>
                  <span className="text-gray-800 font-medium">{department}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-4 italic">
              All amendments to this constitution must be approved by the Permanent Committee.
            </p>
          </div>

          {/* Section 11: Dissolution */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-islamic-green" />
              11. Dissolution
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
              <p className="text-gray-800 leading-relaxed">
                If the institution is ever dissolved, its assets must be used strictly for orphan welfare and 
                Islamic education. Under no circumstances may property or funds be transferred to any individual 
                for personal gain.
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-xl shadow-lg p-8 text-white text-center">
            <p className="text-lg font-semibold mb-2">
              This Constitution is compliant with Islamic Education Board and Islamic Sharia Board of Bangladesh standards.
            </p>
            <p className="text-sm text-teal-100">
              All provisions are subject to Bangladesh government regulations and Islamic principles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

