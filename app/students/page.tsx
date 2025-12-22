import BaseLink from "@/components/BaseLink";
import { Users, BookOpen, GraduationCap, ArrowRight, UserCheck, Award } from "lucide-react";

export default function Students() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Our Students</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            View active and completed students across our educational programs
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Noorani Program Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-islamic-green to-teal-600 p-6 text-white">
                <BookOpen className="h-12 w-12 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Noorani Program</h2>
                <p className="text-teal-100">Modern & Integrated Curriculum</p>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-islamic-light p-4 rounded-lg">
                      <UserCheck className="h-8 w-8 text-islamic-green" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Students</p>
                      <p className="text-2xl font-bold text-gray-900">View Details</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <Award className="h-8 w-8 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Completed Students</p>
                      <p className="text-2xl font-bold text-gray-900">View Details</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/students/noorani-program"
                  className="inline-flex items-center w-full justify-center bg-islamic-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  View Noorani Program Students
                  <ArrowRight className="h-5 w-5 ml-2" />
                </BaseLink>
              </div>
            </div>

            {/* Hifz Program Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-teal-700 to-islamic-dark p-6 text-white">
                <GraduationCap className="h-12 w-12 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Hifz Program</h2>
                <p className="text-teal-100">Qur'an Memorization Program</p>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <UserCheck className="h-8 w-8 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Students</p>
                      <p className="text-2xl font-bold text-gray-900">View Details</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-islamic-light p-4 rounded-lg">
                      <Award className="h-8 w-8 text-islamic-green" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Completed Students</p>
                      <p className="text-2xl font-bold text-gray-900">View Details</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/students/hifz-program"
                  className="inline-flex items-center w-full justify-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-islamic-dark transition-colors"
                >
                  View Hifz Program Students
                  <ArrowRight className="h-5 w-5 ml-2" />
                </BaseLink>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Student Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-islamic-green pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Active Students</h3>
                <p className="text-gray-700">
                  Students currently enrolled and actively participating in our programs. These students are making progress through their respective curricula.
                </p>
              </div>
              <div className="border-l-4 border-teal-700 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Completed Students</h3>
                <p className="text-gray-700">
                  Students who have successfully completed their programs. These students have met all requirements and graduated from their respective programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

