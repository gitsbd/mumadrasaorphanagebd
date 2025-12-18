import Link from "next/link";
import { BookOpen, Users, Shield, FileText, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            A Non-Profit Islamic Educational Institution Serving Orphans and Underprivileged Children
          </p>
        </div>
      </section>

      {/* Institution Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-islamic-green" />
              Institution Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Name</h3>
                <p className="text-gray-700 mb-6">Madinatul Uloom Madrasa & Orphanage</p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">Location</h3>
                <p className="text-gray-700 mb-6">
                  Kaya Kori, Baligange Bazar, Nakla, Sherpur, Mymensingh, Bangladesh
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Executive Director</h3>
                <p className="text-gray-700 mb-6">Md. Shahnewaz Zaman (Shanto)</p>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">Email</h3>
                <a
                  href="mailto:mu.madrasaorphanage.bd@gmail.com"
                  className="text-islamic-green hover:underline"
                >
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Nature and Identity */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-islamic-green" />
              Nature and Identity
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              This is a non-political, non-profit, Islamic educational and charitable institution established for
              the care, education, and upbringing of orphan and underprivileged children based on Qur'anic and
              Sunnah principles.
            </p>
          </div>

          {/* Vision and Objectives */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="h-8 w-8 mr-3 text-islamic-green" />
              Vision and Objectives
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>To provide free Islamic and moral education to orphans and poor children</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>To offer Qur'an memorization (Hifz) and related Islamic knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>To ensure safe housing, food, clothing, and medical care for needy students</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>To promote a peaceful, righteous society through Islamic teachings</span>
              </li>
            </ul>
          </div>

          {/* Committee Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-8 w-8 mr-3 text-islamic-green" />
              Committee Structure
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-islamic-green pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Permanent Committee</h3>
                <p className="text-gray-700 mb-4">
                  The Permanent Committee is the highest policy-making and supervisory body of the institution.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Membership Requirements:</strong> Must contribute a donation of BDT 500,000 
                    and not hold any executive committee role.
                  </li>
                  <li>
                    <strong>Composition:</strong> Chief Member and minimum two additional members
                  </li>
                  <li>
                    <strong>Term:</strong> Permanent, unless resigned or removed for cause
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Executive Committee</h3>
                <p className="text-gray-700 mb-4">
                  Formed under the supervision of the Permanent Committee, responsible for day-to-day operations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Positions include:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Executive Director</li>
                      <li>• President</li>
                      <li>• Vice President</li>
                      <li>• General Secretary</li>
                      <li>• Joint Secretary</li>
                      <li>• Treasurer</li>
                      <li>• Publicity Secretary</li>
                      <li>• General Members</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Responsibilities:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Oversee daily operations and school activities</li>
                      <li>• Manage staff and students</li>
                      <li>• Coordinate with donors and sponsors</li>
                      <li>• Approve and manage annual budget</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Advisory Committee</h3>
                <p className="text-gray-700">
                  Composed of respected advisors and elders who provide non-binding guidance and support.
                </p>
              </div>
            </div>
          </div>

          {/* Funding */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Heart className="h-8 w-8 mr-3 text-islamic-green" />
              Funding and Financial Management
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Sources of Funding</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Zakat, Sadaqah, and Waqf contributions</li>
                  <li>• Domestic and international donations</li>
                  <li>• Endowments and charitable support from sponsors</li>
                  <li>• Monthly sponsorships for orphan care</li>
                  <li>• Government or NGO support (if available)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Use of Funds</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Orphan housing, meals, and education</li>
                  <li>• Staff salaries</li>
                  <li>• Institutional development</li>
                  <li>• Religious and educational projects</li>
                </ul>
              </div>
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
              </Link>
            </div>
          </div>

          {/* Legal Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <FileText className="h-8 w-8 mr-3 text-islamic-green" />
              Legal Status & Registration
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The institution may be registered under:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Department of Social Welfare</strong></li>
              <li>• <strong>Cooperative Department</strong></li>
              <li>• <strong>Islamic Foundation Bangladesh</strong></li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              All amendments to this constitution must be approved by the Permanent Committee.
            </p>
          </div>

          {/* Founding Principles */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Founding Principles</h2>
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Established on:</strong> 2020
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Madinatul Uloom Madrasa & Orphanage is a commendable educational institution that provides an
                exceptional opportunity for <strong>orphans and students pursuing Qur'anic Hifz (memorization)</strong>.
                It serves as a platform to build an enlightened future where students not only receive religious
                education, but also develop <strong>ethical values, humanity, and leadership skills</strong>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Positive Impact on Society</h3>
              <p className="text-gray-700 leading-relaxed">
                Institutions like this madrasa not only change the lives of individual students but also contribute
                to <strong>positive social transformation</strong>. Madinatul Uloom Madrasa & Orphanage is truly a
                <strong> source of inspiration</strong>, bringing light and hope into the lives of
                <strong> orphaned and disadvantaged children</strong>. It is a <strong>model institution</strong> of
                genuine Islamic education, serving both <strong>faith and humanity</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

