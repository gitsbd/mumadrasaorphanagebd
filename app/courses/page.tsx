import Link from "next/link";
import { BookOpen, GraduationCap, Clock, Users, Target, Award, ArrowRight, School, FileText, ArrowDown, ArrowRightCircle } from "lucide-react";

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Available Programs</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Comprehensive Islamic Education Programs for Orphans and Students
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Noorani Program Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-islamic-green to-teal-600 p-6 text-white">
                <BookOpen className="h-12 w-12 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Noorani Program</h2>
                <p className="text-teal-100">Modern & Integrated Curriculum</p>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>2-3 years</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Age 4-8</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A comprehensive curriculum combining Islamic foundational education with basic general education
                  including Bangla, English, Math, and General Knowledge.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-islamic-green mr-2">✓</span>
                    <span>Noorani Qaida & Foundation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islamic-green mr-2">✓</span>
                    <span>Ampara & Tajweed Practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islamic-green mr-2">✓</span>
                    <span>Complete Quran Reading + Academic Bridge</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <Link
                    href="/courses/noorani"
                    className="inline-flex items-center bg-islamic-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                  <Link
                    href="/application?program=noorani"
                    className="inline-flex items-center bg-white border-2 border-islamic-green text-islamic-green px-6 py-3 rounded-lg font-semibold hover:bg-islamic-light transition-colors"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Hifz Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-teal-700 to-islamic-dark p-6 text-white">
                <GraduationCap className="h-12 w-12 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Hifz Program</h2>
                <p className="text-teal-100">Qur'an Memorization Program</p>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>2.5-4 years</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Age 6-15</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A focused program for complete memorization of the Holy Qur'an with proper Tajweed, strong
                  retention system, and development of discipline and love for the Qur'an.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">✓</span>
                    <span>Complete memorization of 30 Juz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">✓</span>
                    <span>Proper Tajweed application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">✓</span>
                    <span>Strong retention system (Dawr & Takrar)</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <Link
                    href="/courses/hifz"
                    className="inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-islamic-dark transition-colors"
                  >
                    Learn More →
                  </Link>
                  <Link
                    href="/application?program=hifz"
                    className="inline-flex items-center bg-white border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course Outcomes */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="h-8 w-8 mr-3 text-islamic-green" />
              Program Outcomes
            </h2>
            
            {/* Visual Flow Diagram */}
            <div className="mb-12 bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-islamic-green/20">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Program Flow Diagram</h3>
              <div className="relative">
                {/* Noorani Program - Starting Point */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-islamic-green to-teal-700 text-white rounded-xl p-6 shadow-lg max-w-sm w-full text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-3" />
                    <h4 className="text-xl font-bold mb-2">Noorani Program</h4>
                    <p className="text-sm text-teal-100">Foundation Level</p>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center mb-6">
                  <ArrowDown className="h-8 w-8 text-islamic-green animate-pulse" />
                </div>

                {/* Two Pathways */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Hifz Program Path */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-xl p-6 shadow-lg text-center">
                      <GraduationCap className="h-10 w-10 mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-2">Hifz Program</h4>
                      <p className="text-sm text-teal-100 mb-4">Complete Qur'an Memorization</p>
                      <div className="flex justify-center">
                        <ArrowDown className="h-6 w-6 text-teal-200" />
                      </div>
                    </div>
                    {/* Hifz Outcomes */}
                    <div className="mt-4 space-y-2">
                      <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-700">
                        <p className="text-sm font-semibold text-gray-900">✓ Hafiz-ul-Qur'an</p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-700">
                        <p className="text-sm font-semibold text-gray-900">✓ Tajweed Mastery</p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-700">
                        <p className="text-sm font-semibold text-gray-900">✓ Eligible for Dawrah/Alim</p>
                      </div>
                    </div>
                  </div>

                  {/* Public School Path */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 shadow-lg text-center">
                      <School className="h-10 w-10 mx-auto mb-3" />
                      <h4 className="text-lg font-bold mb-2">Public Primary School</h4>
                      <p className="text-sm text-blue-100 mb-4">Class 5 Admission</p>
                      <div className="flex justify-center">
                        <ArrowDown className="h-6 w-6 text-blue-200" />
                      </div>
                    </div>
                    {/* School Outcomes */}
                    <div className="mt-4 space-y-2">
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700">
                        <p className="text-sm font-semibold text-gray-900">✓ Formal Education</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700">
                        <p className="text-sm font-semibold text-gray-900">✓ Academic Skills</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700">
                        <p className="text-sm font-semibold text-gray-900">✓ Continued Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-islamic-green to-transparent opacity-30"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">After Noorani Program</h3>
                <p className="text-gray-700 mb-4">
                  Students can choose one of two pathways:
                </p>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 mr-2 text-teal-700" />
                      <span className="font-semibold text-gray-900">Hifz Program</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      Join our Hifz Program for complete Qur'an memorization.
                    </p>
                    <Link
                      href="/courses/hifz"
                      className="text-sm text-teal-700 hover:underline font-medium inline-flex items-center"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                  <div className="bg-islamic-light p-4 rounded-lg border-l-4 border-islamic-green">
                    <div className="flex items-center mb-2">
                      <School className="h-5 w-5 mr-2 text-islamic-green" />
                      <span className="font-semibold text-gray-900">Public Primary School</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Join Class 5 in a nearby public primary school. We provide support in finding suitable schools.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Students also gain: Quran reading with Tajweed, Islamic knowledge, Bangla/English communication, 
                    and Math skills appropriate for Class 5 level.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">After Hifz Course</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>Complete Hafiz-ul-Qur'an certification</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>Recite fluently with proper Tajweed</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>Maintain long-term memorization</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>Eligible for Dawrah/Alim course</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>Teaching Hifz (with permission)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

