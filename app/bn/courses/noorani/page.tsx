import BaseLink from "@/components/BaseLink";
import { BookOpen, Clock, Users, Target, CheckCircle, School, FileText } from "lucide-react";

export default function NooraniCourseBn() {
  const levels = [
    {
      number: 1,
      title: "লেভেল ১: নূরানী কায়দা ও বুনিয়াদি শিক্ষা",
      stage: "শুরুর ধাপ",
      points: [
        "আরবি হরফ চিনে পড়া ও সঠিক উচ্চারণ (মাখরাজ) শেখা",
        "হরকত, তানউইন, সুকুন, শদ্দা ইত্যাদির ব্যবহার",
        "ছোট ছোট সূরা, দোয়া ও ৬ কালিমা মুখস্থ",
        "বাংলা বর্ণমালা, সহজ শব্দ ও ছড়া",
        "ইংরেজি অক্ষর (A–Z) ও কিছু দৈনন্দিন শব্দ",
        "সংখ্যা গণনা (১–১০), আকার, রং, প্রাণী-পাখি চিনে নেয়া",
      ],
      applyHref: "/bn/application?program=noorani&level=1",
    },
    {
      number: 2,
      title: "লেভেল ২: আমপারা (৩০তম পারা) ও তাজবীদ অনুশীলন",
      stage: "মধ্যম ধাপ",
      points: [
        "সূরা ফাতিহা থেকে আমপারা পর্যন্ত তিলাওয়াত ও মুখস্থ অনুশীলন",
        "নুন সাকিন, মীম সাকিন, মাদ্দ, ইখফা, ইদগাম ইত্যাদি তাজবীদের প্রাথমিক নিয়ম",
        "আকীদা ও আকলাক – আল্লাহর প্রতি ঈমান, নবীগণের কাহিনী, আদব ও নৈতিকতা",
        "বাংলা: সহজ বাক্য গঠন, ছোট গল্প, পাঠ অনুধাবন",
        "ইংরেজি: সহজ শব্দভান্ডার, রঙ, প্রাণী, পরিবারের পরিচয়",
        "গণিত: ১–১০০ পর্যন্ত সংখ্যা, যোগ-বিয়োগের ভিত্তি",
      ],
      applyHref: "/bn/application?program=noorani&level=2",
    },
    {
      number: 3,
      title: "লেভেল ৩: পূর্ণ কুরআন নাজেরা ও একাডেমিক ব্রিজ",
      stage: "উচ্চ ধাপ",
      points: [
        "৩০ পারা সম্পূর্ণ নাজেরা সহীহ তাজবীদের সাথে শেষ করা",
        "সব শিখানো তাজবীদের নিয়ম বাস্তব প্রয়োগ",
        "নামাজ, অযু, দৈনন্দিন মাসআলা-মাসায়েল ও নৈতিকতা প্রশিক্ষণ",
        "বাংলা: অনুচ্ছেদ পড়া ও লেখা, নৈতিক গল্প",
        "ইংরেজি: ছোট পাঠ, সালাম, পরিচয়, দৈনন্দিন বাক্য",
        "গণিত: দুই অংকের যোগ-বিয়োগ, প্রাথমিক গুণের ধারণা",
      ],
      applyHref: "/bn/application?program=noorani&level=3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="bangla-text text-5xl font-bold mb-4">নূরানী প্রোগ্রাম</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            ইসলামি ভিত্তিমূলক শিক্ষা ও সাধারণ শিক্ষার সমন্বয়ে সাজানো আধুনিক নূরানী কারিকুলাম
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-islamic-light rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-2 text-islamic-green" />
                <p className="bangla-text text-sm text-gray-600 mb-1">লক্ষ্যকৃত বয়স</p>
                <p className="bangla-text text-xl font-bold text-gray-900">৪–৮ বছর</p>
              </div>
              <div className="text-center p-6 bg-islamic-light rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-2 text-islamic-green" />
                <p className="bangla-text text-sm text-gray-600 mb-1">মেয়াদ</p>
                <p className="bangla-text text-xl font-bold text-gray-900">২–৩ বছর</p>
              </div>
              <div className="text-center p-6 bg-islamic-light rounded-lg">
                <Target className="h-8 w-8 mx-auto mb-2 text-islamic-green" />
                <p className="bangla-text text-sm text-gray-600 mb-1">লেভেল</p>
                <p className="bangla-text text-xl font-bold text-gray-900">৩ ধাপ</p>
              </div>
            </div>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              নূরানী প্রোগ্রামটি তিনটি ধাপে বিভক্ত। প্রতিটি ধাপে{" "}
              <strong>কুরআন ও তাজবীদ</strong> এর পাশাপাশি{" "}
              <strong>বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞান</strong> অন্তর্ভুক্ত করা হয়েছে, যাতে
              শিক্ষার্থী একই সঙ্গে দ্বীনি ও সাধারণ শিক্ষায় একটি শক্ত ভিত্তি পায়।
            </p>
          </div>

          {/* Levels */}
          {levels.map((level) => (
            <div key={level.number} className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-islamic-green text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4">
                  {level.number}
                </div>
                <div>
                  <h2 className="bangla-text text-2xl md:text-3xl font-bold text-gray-900">
                    {level.title}
                  </h2>
                  <p className="bangla-text text-gray-600">{level.stage}</p>
                </div>
              </div>
              <ul className="bangla-text space-y-2 text-gray-700 mb-6">
                {level.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t pt-6">
                <BaseLink
                  href={level.applyHref}
                  className="bangla-text inline-flex items-center bg-islamic-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  ভর্তি আবেদন করুন
                </BaseLink>
              </div>
            </div>
          ))}

          {/* After Noorani */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="h-8 w-8 mr-3 text-islamic-green" />
              নূরানী প্রোগ্রামের পর শিক্ষার্থীর পরবর্তী ধাপ
            </h2>
            <p className="bangla-text text-lg text-gray-700 mb-6">
              নূরানী প্রোগ্রাম সফলভাবে শেষ করার পর সাধারণত দুইটি পথ উন্মুক্ত থাকে:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-teal-600 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-700 p-3 rounded-lg mr-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="bangla-text text-2xl font-bold text-gray-900">হিফজ প্রোগ্রাম</h3>
                </div>
                <p className="bangla-text text-gray-700 mb-4 leading-relaxed">
                  যারা পূর্ণ কুরআন হিফজ করতে আগ্রহী, তারা আমাদের{" "}
                  <strong>হিফজ প্রোগ্রামে</strong> ভর্তি হতে পারে। এখানে সহীহ তাজবীদসহ ৩০ পারা কুরআন
                  হিফজের সুসংগঠিত ব্যবস্থা রয়েছে।
                </p>
                <BaseLink
                  href="/bn/courses/hifz"
                  className="bangla-text inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-islamic-dark transition-colors"
                >
                  হিফজ প্রোগ্রাম বিস্তারিত
                </BaseLink>
              </div>
              <div className="border-2 border-islamic-green rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-islamic-green p-3 rounded-lg mr-4">
                    <School className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="bangla-text text-2xl font-bold text-gray-900">
                    সরকারি প্রাথমিক বিদ্যালয়
                  </h3>
                </div>
                <p className="bangla-text text-gray-700 mb-4 leading-relaxed">
                  যারা সাধারণ শিক্ষার ধারায় অগ্রসর হতে চায়, তারা নিকটস্থ{" "}
                  <strong>সরকারি প্রাথমিক বিদ্যালয়ের ৫ম শ্রেণিতে</strong> ভর্তি হতে পারে। নূরানী
                  প্রোগ্রামের মাধ্যমে তারা বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞানে প্রাথমিক ভিত্তি অর্জন
                  করে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

