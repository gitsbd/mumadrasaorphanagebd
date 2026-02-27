import BaseLink from "@/components/BaseLink";
import { BookOpen, GraduationCap, Clock, Users, Target, Award, ArrowRight, School, FileText, ArrowDown } from "lucide-react";

export default function CoursesBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="bangla-text text-5xl font-bold mb-4">উপলব্ধ প্রোগ্রামসমূহ</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            এতিম ও সাধারণ শিক্ষার্থীদের জন্য সমন্বিত ইসলামী শিক্ষা কার্যক্রম
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
                <h2 className="bangla-text text-3xl font-bold mb-2">নূরানী প্রোগ্রাম</h2>
                <p className="bangla-text text-teal-100">আধুনিক ও সমন্বিত কারিকুলাম</p>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600 bangla-text">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>মেয়াদ: ২–৩ বছর</span>
                  </div>
                  <div className="flex items-center text-gray-600 bangla-text">
                    <Users className="h-5 w-5 mr-2" />
                    <span>বয়স: ৪–৮ বছর</span>
                  </div>
                </div>
                <p className="bangla-text text-gray-700 mb-6 leading-relaxed">
                  নূরানী কায়দা, কুরআন তিলাওয়াত, তাজবীদ, আকীদা, মাসআলা-মাসায়েলসহ বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞান নিয়ে
                  সাজানো সমন্বিত প্রাথমিক কোর্স।
                </p>
                <ul className="space-y-2 mb-6 text-gray-700 bangla-text">
                  <li className="flex items-start">
                    <span className="text-islamic-green mr-2">✓</span>
                    <span>নূরানী কায়দা ও বুনিয়াদি কুরআন শিক্ষা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islamic-green mr-2">✓</span>
                    <span>আমপারাহ ও তাজবীদ অনুশীলন</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-islamic-green mr-2">✓</span>
                    <span>সম্পূর্ণ কুরআন তাকরারসহ পড়া ও সাধারণ শিক্ষায় ভিত্তি তৈরী</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <BaseLink
                    href="/bn/courses/noorani"
                    className="inline-flex items-center bg-islamic-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors bangla-text"
                  >
                    বিস্তারিত দেখুন →
                  </BaseLink>
                  <BaseLink
                    href="/bn/application?program=noorani"
                    className="inline-flex items-center bg-white border-2 border-islamic-green text-islamic-green px-6 py-3 rounded-lg font-semibold hover:bg-islamic-light transition-colors bangla-text"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    ভর্তি আবেদন
                  </BaseLink>
                </div>
              </div>
            </div>

            {/* Hifz Course Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-teal-700 to-islamic-dark p-6 text-white">
                <GraduationCap className="h-12 w-12 mb-4" />
                <h2 className="bangla-text text-3xl font-bold mb-2">হিফজ প্রোগ্রাম</h2>
                <p className="bangla-text text-teal-100">কুরআন হিফজের বিশেষ কোর্স</p>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-600 bangla-text">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>মেয়াদ: আনুমানিক ২.৫–৪ বছর</span>
                  </div>
                  <div className="flex items-center text-gray-600 bangla-text">
                    <Users className="h-5 w-5 mr-2" />
                    <span>বয়স: ৬–১৫ বছর</span>
                  </div>
                </div>
                <p className="bangla-text text-gray-700 mb-6 leading-relaxed">
                  সহীহ তাজবীদসহ পূর্ণ ৩০ পারা কুরআন হিফজ, শক্তিশালী তাকরার ব্যবস্থা, নিয়মিত দোর, আখলাক গঠন ও শৃঙ্খলামূলক
                  পরিবেশে হিফজ সম্পন্ন করার জন্য সাজানো কোর্স।
                </p>
                <ul className="space-y-2 mb-6 text-gray-700 bangla-text">
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">✓</span>
                    <span>পূর্ণ ৩০ পারা কুরআন হিফজ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">✓</span>
                    <span>সহীহ তাজবীদ ও মাখরাজ অনুশীলন</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-700 mr-2">✓</span>
                    <span>দাওর ও তাকরারভিত্তিক স্মৃতিশক্তি মজবুতকরণ</span>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <BaseLink
                    href="/bn/courses/hifz"
                    className="inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-islamic-dark transition-colors bangla-text"
                  >
                    বিস্তারিত দেখুন →
                  </BaseLink>
                  <BaseLink
                    href="/bn/application?program=hifz"
                    className="inline-flex items-center bg-white border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors bangla-text"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    ভর্তি আবেদন
                  </BaseLink>
                </div>
              </div>
            </div>
          </div>

          {/* Course Outcomes */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="h-8 w-8 mr-3 text-islamic-green" />
              প্রোগ্রাম শেষে শিক্ষার্থীর অর্জন
            </h2>
            
            {/* Visual Flow Diagram */}
            <div className="mb-12 bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-islamic-green/20">
              <h3 className="bangla-text text-2xl font-bold mb-8 text-center text-gray-900">
                প্রোগ্রাম ফ্লো ডায়াগ্রাম
              </h3>
              <div className="relative">
                {/* Noorani Program - Starting Point */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-islamic-green to-teal-700 text-white rounded-xl p-6 shadow-lg max-w-sm w-full text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-3" />
                    <h4 className="bangla-text text-xl font-bold mb-2">নূরানী প্রোগ্রাম</h4>
                    <p className="bangla-text text-sm text-teal-100">ভিত্তি গঠন পর্যায়</p>
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
                      <h4 className="bangla-text text-lg font-bold mb-2">হিফজ প্রোগ্রাম</h4>
                      <p className="bangla-text text-sm text-teal-100 mb-4">পূর্ণ কুরআন হিফজ</p>
                      <div className="flex justify-center">
                        <ArrowDown className="h-6 w-6 text-teal-200" />
                      </div>
                    </div>
                    {/* Hifz Outcomes */}
                    <div className="mt-4 space-y-2">
                      <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-700 bangla-text">
                        <p className="text-sm font-semibold text-gray-900">✓ হাফেজুল কুরআন উপাধি</p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-700 bangla-text">
                        <p className="text-sm font-semibold text-gray-900">✓ সহীহ তাজবীদ ও সুন্দর তিলাওয়াত</p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-700 bangla-text">
                        <p className="text-sm font-semibold text-gray-900">✓ দাওরাহ/আলিম কোর্সে ভর্তি হওয়ার উপযোগিতা</p>
                      </div>
                    </div>
                  </div>

                  {/* Public School Path */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 shadow-lg text-center">
                      <School className="h-10 w-10 mx-auto mb-3" />
                      <h4 className="bangla-text text-lg font-bold mb-2">সরকারি প্রাথমিক বিদ্যালয়</h4>
                      <p className="bangla-text text-sm text-blue-100 mb-4">৫ম শ্রেণিতে ভর্তির প্রস্তুতি</p>
                      <div className="flex justify-center">
                        <ArrowDown className="h-6 w-6 text-blue-200" />
                      </div>
                    </div>
                    {/* School Outcomes */}
                    <div className="mt-4 space-y-2">
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700 bangla-text">
                        <p className="text-sm font-semibold text-gray-900">✓ আনুষ্ঠানিক সাধারণ শিক্ষায় প্রবেশ</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700 bangla-text">
                        <p className="text-sm font-semibold text-gray-900">✓ বাংলা, ইংরেজি ও গণিতে প্রয়োজনীয় দক্ষতা</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700 bangla-text">
                        <p className="text-sm font-semibold text-gray-900">✓ পরবর্তী পড়াশোনায় মানসিক ও নৈতিক সহায়তা</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">
                  নূরানী প্রোগ্রাম শেষে
                </h3>
                <p className="bangla-text text-gray-700 mb-4">
                  শিক্ষার্থীরা নিম্নের যেকোনো একটি পথ বেছে নিতে পারে:
                </p>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-700">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 mr-2 text-teal-700" />
                      <span className="bangla-text font-semibold text-gray-900">হিফজ প্রোগ্রাম</span>
                    </div>
                    <p className="bangla-text text-sm text-gray-700 mb-2">
                      পূর্ণ কুরআন হিফজ করার লক্ষ্য নিয়ে হিফজ কোর্সে ভর্তি হওয়া।
                    </p>
                    <BaseLink
                      href="/bn/courses/hifz"
                      className="text-sm text-teal-700 hover:underline font-medium inline-flex items-center bangla-text"
                    >
                      বিস্তারিত জানুন
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </BaseLink>
                  </div>
                  <div className="bg-islamic-light p-4 rounded-lg border-l-4 border-islamic-green">
                    <div className="flex items-center mb-2">
                      <School className="h-5 w-5 mr-2 text-islamic-green" />
                      <span className="bangla-text font-semibold text-gray-900">
                        সরকারি প্রাথমিক বিদ্যালয়
                      </span>
                    </div>
                    <p className="bangla-text text-sm text-gray-700">
                      নিকটস্থ সরকারি প্রাথমিক বিদ্যালয়ে ৫ম শ্রেণিতে ভর্তি হওয়ার উপযোগী করে গড়ে তোলা হয় এবং
                      প্রয়োজনে স্কুল নির্বাচন ও ভর্তি প্রক্রিয়ায় সহায়তা করা হয়।
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="bangla-text text-sm text-gray-600">
                    নূরানী প্রোগ্রাম শেষে শিক্ষার্থীদের কুরআন তিলাওয়াত, মৌলিক ইসলামি জ্ঞান, বাংলা/ইংরেজি পড়া-লেখা ও গণিতে
                    এমন একটি ভিত্তি তৈরি হয়, যা তাদের ভবিষ্যৎ শিক্ষা জীবনের জন্য মজবুত পাথেয় হিসেবে কাজ করে।
                  </p>
                </div>
              </div>
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">
                  হিফজ কোর্স শেষে
                </h3>
                <ul className="space-y-2 text-gray-700 bangla-text">
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>সহীহ তাজবীদসহ পূর্ণ কুরআন হিফজ সম্পন্ন</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>সঠিকভাবে মাখরাজ ও সিফাত মেনে কুরআন তিলাওয়াত করার দক্ষতা</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>নিয়মিত তাকরার ও দাওরাহর মাধ্যমে হিফজ দৃঢ় রাখার অভ্যাস</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>দাওরাহ/আলিম বা অন্যান্য উচ্চতর ইসলামী শিক্ষা কোর্সে ভর্তির উপযোগিতা</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-5 w-5 mr-2 text-teal-700 mt-0.5 flex-shrink-0" />
                    <span>প্রয়োজনে হিফজ শিক্ষক হিসেবে দায়িত্ব পালনের সক্ষমতা (উপযুক্ত অনুমোদন সাপেক্ষে)</span>
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

