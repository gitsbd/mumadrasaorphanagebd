import Link from "next/link";
import { BookOpen, GraduationCap, Clock, Users, Target, Award, ArrowRight, School } from "lucide-react";

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Comprehensive Islamic Education Programs for Orphans and Students
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Noorani Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-islamic-green to-teal-600 p-6 text-white">
                <BookOpen className="h-12 w-12 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Noorani Course</h2>
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
                <Link
                  href="/courses/noorani"
                  className="inline-block bg-islamic-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Learn More →
                </Link>
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
                <Link
                  href="/courses/hifz"
                  className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-islamic-dark transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          {/* Course Outcomes */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="h-8 w-8 mr-3 text-islamic-green" />
              Program Outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">After Noorani Course</h3>
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

