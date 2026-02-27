import BaseLink from "@/components/BaseLink";
import {
  GraduationCap,
  Clock,
  Users,
  Target,
  BookOpen,
  CheckCircle,
  Award,
  FileText,
} from "lucide-react";

export default function HifzCourseBn() {
  const outcomes = [
    "সহীহ তাজবীদসহ পূর্ণ ৩০ পারা কুরআন হিফজ",
    "সুন্দর ও প্রভাবশালী কণ্ঠে তিলাওয়াত করার দক্ষতা",
    "দাওর ও তাকরারের মাধ্যমে দীর্ঘমেয়াদে হিফজ মজবুত রাখা",
    "দাওরাহ/আলিম, কিরাআত বা অন্যান্য উচ্চতর ইসলামী শিক্ষার জন্য উপযোগী হওয়া",
    "ইমাম, মুয়াজ্জিন বা হিফজ শিক্ষক হিসেবে প্রশিক্ষণ নেয়ার যোগ্যতা (প্রয়োজনীয় অনুমতি সাপেক্ষে)",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-islamic-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="bangla-text text-5xl font-bold mb-4">হিফজ প্রোগ্রাম</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            সহীহ তাজবীদসহ কুরআন মজিদ সম্পূর্ণ হিফজের জন্য সুসংগঠিত ও তত্ত্বাবধিত কোর্স
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="bangla-text text-sm text-gray-600 mb-1">লক্ষ্যকৃত বয়স</p>
                <p className="bangla-text text-xl font-bold text-gray-900">৬–১৫ বছর</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="bangla-text text-sm text-gray-600 mb-1">মেয়াদ</p>
                <p className="bangla-text text-xl font-bold text-gray-900">প্রায় ২.৫–৪ বছর</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="bangla-text text-sm text-gray-600 mb-1">মূল ফোকাস</p>
                <p className="bangla-text text-xl font-bold text-gray-900">কেবল কুরআন</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Target className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="bangla-text text-sm text-gray-600 mb-1">শিক্ষার মাধ্যম</p>
                <p className="bangla-text text-xl font-bold text-gray-900">আরবি</p>
              </div>
            </div>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              এই হিফজ প্রোগ্রামের মূল লক্ষ্য হলো শিক্ষার্থীদেরকে{" "}
              <strong>সহীহ তাজবীদসহ পূর্ণ ৩০ পারা কুরআন মুখস্থ</strong> করানো এবং{" "}
              <strong>দীর্ঘমেয়াদে হিফজ দৃঢ় রাখা</strong>। একই সাথে তাদের চরিত্র গঠন, আদব ও শৃঙ্খলার
              উপর বিশেষ গুরুত্ব দেয়া হয়।
            </p>
          </div>

          {/* Completion Outcomes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <GraduationCap className="h-8 w-8 mr-3 text-teal-700" />
              কোর্স শেষে শিক্ষার্থীর অর্জন
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-700 mr-3 mt-1 flex-shrink-0" />
                  <span className="bangla-text text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gradient-to-r from-teal-700 to-islamic-dark rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="bangla-text text-3xl font-bold mb-4">
              হিফজ প্রোগ্রামে ভর্তি হতে আগ্রহী?
            </h2>
            <p className="bangla-text text-xl text-teal-100 mb-6">
              এখনই অনলাইনে ভর্তি আবেদন ফরম পূরণ করুন।
            </p>
            <BaseLink
              href="/bn/application?program=hifz"
              className="bangla-text inline-flex items-center bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FileText className="h-6 w-6 mr-2" />
              ভর্তি আবেদন করুন
            </BaseLink>
          </div>
        </div>
      </section>
    </div>
  );
}

