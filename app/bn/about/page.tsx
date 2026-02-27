import BaseLink from "@/components/BaseLink";
import { BookOpen, Users, Shield, FileText, Award, Heart } from "lucide-react";

export default function AboutBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="bangla-text text-5xl font-bold mb-4">আমাদের সম্পর্কে</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            এতিম ও অসহায় শিশুদের জন্য অরাজনৈতিক, অ-লাভজনক ইসলামী শিক্ষা ও তত্ত্বাবধায়নমূলক প্রতিষ্ঠান
          </p>
        </div>
      </section>

      {/* Institution Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-islamic-green" />
              প্রতিষ্ঠানের পরিচিতি
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">নাম</h3>
                <p className="bangla-text text-gray-700 mb-6">মাদিনাতুল উলূম মাদরাসা ও এতিমখানা</p>

                <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">ঠিকানা</h3>
                <p className="bangla-text text-gray-700 mb-6">
                  কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ
                </p>
              </div>
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">এক্সিকিউটিভ ডিরেক্টর</h3>
                <p className="bangla-text text-gray-700 mb-6">মোঃ শাহনেওয়াজ জামান (শান্ত)</p>

                <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">ই-মেইল</h3>
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
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-islamic-green" />
              প্রতিষ্ঠানের স্বরূপ ও পরিচয়
            </h2>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              এটি একটি অরাজনৈতিক, অ-লাভজনক, দ্বীনি শিক্ষা ও কল্যাণমূলক প্রতিষ্ঠান; যার উদ্দেশ্য কুরআন ও সুন্নাহর
              আলোকে এতিম ও অসহায় শিশুদের লালন-পালন, শিক্ষা ও নৈতিক গঠন করা।
            </p>
          </div>

          {/* Vision and Objectives */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="h-8 w-8 mr-3 text-islamic-green" />
              লক্ষ্য ও উদ্দেশ্য
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 bangla-text">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>এতিম ও গরিব শিশুদের জন্য সম্পূর্ণ বিনামূল্যে দ্বীনি ও নৈতিক শিক্ষা প্রদান করা</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>হিফজুল কুরআন ও প্রাথমিক ইসলামি জ্ঞানের সুব্যবস্থার মাধ্যমে আদর্শ হাফেজ তৈরী করা</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>নিরাপদ আবাসন, খাবার, পোশাক ও চিকিৎসা সেবার মাধ্যমে পূর্ণাঙ্গ তত্ত্বাবধান নিশ্চিত করা</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-2xl">•</span>
                <span>ইসলামের শান্তির বাণী প্রচার করে নৈতিক, শান্তিপূর্ণ ও ন্যায়ভিত্তিক সমাজ প্রতিষ্ঠায় সহায়তা করা</span>
              </li>
            </ul>
          </div>

          {/* Committee Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-8 w-8 mr-3 text-islamic-green" />
              পরিচালনা কাঠামো
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-islamic-green pl-6">
                <h3 className="bangla-text text-2xl font-semibold mb-4 text-gray-800">দায়িত্বপ্রাপ্ত স্থায়ী কমিটি</h3>
                <p className="bangla-text text-gray-700 mb-4">
                  স্থায়ী কমিটি হলো প্রতিষ্ঠানের সর্বোচ্চ নীতিনির্ধারক ও তদারককারী সংস্থা।
                </p>
                <ul className="space-y-2 text-gray-700 bangla-text">
                  <li>
                    <strong>সদস্য হওয়ার শর্ত:</strong> ন্যূনতম ৫,০০,০০০ (পাঁচ লক্ষ) টাকা দানকারী এবং নির্বাহী
                    কমিটির কোন পদে না থাকা।
                  </li>
                  <li>
                    <strong>গঠন:</strong> প্রধান সদস্যসহ ন্যূনতম আরও দুই জন সদস্য নিয়ে কমিটি গঠিত।
                  </li>
                  <li>
                    <strong>মেয়াদ:</strong> স্বেচ্ছায় পদত্যাগ বা যথাযথ কারণে অপসারণ না হওয়া পর্যন্ত স্থায়ী।
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="bangla-text text-2xl font-semibold mb-4 text-gray-800">এক্সিকিউটিভ কমিটি</h3>
                <p className="bangla-text text-gray-700 mb-4">
                  স্থায়ী কমিটির তত্ত্বাবধানে গঠিত নির্বাহী কমিটি দৈনন্দিন কার্যক্রম পরিচালনা করে।
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="bangla-text font-semibold mb-2 text-gray-800">প্রধান পদসমূহ:</h4>
                    <ul className="space-y-1 text-gray-700 bangla-text">
                      <li>• এক্সিকিউটিভ ডিরেক্টর</li>
                      <li>• সভাপতি</li>
                      <li>• সহ-সভাপতি</li>
                      <li>• সাধারণ সম্পাদক</li>
                      <li>• যুগ্ম সম্পাদক</li>
                      <li>• কোষাধ্যক্ষ</li>
                      <li>• প্রচার সম্পাদক</li>
                      <li>• কার্যনির্বাহী সদস্যবৃন্দ</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="bangla-text font-semibold mb-2 text-gray-800">মূল দায়িত্বসমূহ:</h4>
                    <ul className="space-y-1 text-gray-700 bangla-text">
                      <li>• প্রতিষ্ঠানের দৈনন্দিন কার্যক্রম তদারকি</li>
                      <li>• শিক্ষক ও কর্মচারীদের কাজ পরিচালনা</li>
                      <li>• দাতা ও স্পন্সরদের সাথে সমন্বয় রক্ষা</li>
                      <li>• বার্ষিক বাজেট প্রণয়ন ও অনুমোদন</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="bangla-text text-2xl font-semibold mb-4 text-gray-800">পরামর্শক কমিটি</h3>
                <p className="bangla-text text-gray-700">
                  অভিজ্ঞ আলেম, বুদ্ধিজীবী ও সমাজের গণ্যমান্য ব্যক্তিবর্গ নিয়ে গঠিত পরামর্শক কমিটি প্রতিষ্ঠানের
                  উন্নয়নমূলক কাজে গঠনমূলক পরামর্শ প্রদান করে।
                </p>
              </div>
            </div>
          </div>

          {/* Funding */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Heart className="h-8 w-8 mr-3 text-islamic-green" />
              অর্থায়ন ও ব্যয় পরিচালনা
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">আয়-এর উৎস</h3>
                <ul className="space-y-2 text-gray-700 bangla-text">
                  <li>• যাকাত, সদকাহ ও ওয়াকফের অর্থ</li>
                  <li>• দেশি-বিদেশি দাতা ও শুভাকাঙ্ক্ষীদের অনুদান</li>
                  <li>• দীর্ঘমেয়াদী দান ও এন্ডাউমেন্ট</li>
                  <li>• এতিম শিশুদের মাসিক স্পন্সরশিপ</li>
                  <li>• সরকারি বা বেসরকারি সংস্থার সহযোগিতা (যদি প্রযোজ্য হয়)</li>
                </ul>
              </div>
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">ব্যয়-এর খাত</h3>
                <ul className="space-y-2 text-gray-700 bangla-text">
                  <li>• এতিম ও ছাত্রদের খাবার, থাকা ও শিক্ষা ব্যয়</li>
                  <li>• শিক্ষক ও কর্মচারীদের বেতন</li>
                  <li>• ভবন নির্মাণ, সংস্কার ও উন্নয়নমূলক কাজ</li>
                  <li>• দাওয়াহমুখী ও শিক্ষামূলক প্রকল্পসমূহ</li>
                </ul>
              </div>
            </div>
            {/* Donate Call-to-Action */}
            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-6 text-white text-center">
              <h3 className="bangla-text text-xl font-semibold mb-2">আমাদের কাজে অংশ নিন</h3>
              <p className="bangla-text text-sm text-teal-100 mb-4">
                আপনার অনুদান একজন এতিম ও অসহায় শিশুর জীবন বদলে দিতে পারে ইনশা আল্লাহ।
              </p>
              <BaseLink
                href="/bn/donate"
                className="inline-flex items-center space-x-2 bg-white text-islamic-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg bangla-text"
              >
                <Heart className="h-5 w-5" />
                <span>এখনই অনুদান দিন</span>
              </BaseLink>
            </div>
          </div>

          {/* Legal Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <FileText className="h-8 w-8 mr-3 text-islamic-green" />
              আইনগত স্বীকৃতি ও নিবন্ধন
            </h2>
            <p className="bangla-text text-lg text-gray-700 mb-4">
              প্রতিষ্ঠানটি নিম্নোক্ত সরকারি/স্বীকৃত সংস্থার আওতায় নিবন্ধিত/নিবন্ধনের প্রক্রিয়াধীন থাকতে পারে:
            </p>
            <ul className="space-y-2 text-gray-700 bangla-text">
              <li>• <strong>সমাজসেবা অধিদপ্তর</strong></li>
              <li>• <strong>সমবায় অধিদপ্তর</strong></li>
              <li>• <strong>ইসলামিক ফাউন্ডেশন বাংলাদেশ</strong></li>
            </ul>
            <p className="bangla-text text-lg text-gray-700 mt-6">
              সংবিধানের যেকোনো ধারা পরিবর্তন বা সংযোজন স্থায়ী কমিটির অনুমোদন সাপেক্ষে কার্যকর হবে।
            </p>
          </div>

          {/* Founding Principles */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">প্রতিষ্ঠার প্রেক্ষাপট ও তাৎপর্য</h2>
            <div className="mb-6">
              <p className="bangla-text text-lg text-gray-700 mb-4">
                <strong>প্রতিষ্ঠাকাল:</strong> ২০২০ সাল
              </p>
              <p className="bangla-text text-lg text-gray-700 leading-relaxed">
                মাদিনাতুল উলূম মাদরাসা ও এতিমখানা এমন একটি দ্বীনি শিক্ষা প্রতিষ্ঠান, যেখানে{" "}
                <strong>এতিম ও হিফজে কুরআনমুখী শিক্ষার্থীরা</strong> নিরাপদ আশ্রয় ও শিক্ষার সুযোগ পায়।
                এখানে শিক্ষার্থীদেরকে শুধুমাত্র নাযরা বা হিফয নয়, বরং{" "}
                <strong>আদর্শ চরিত্র, মানবিক মূল্যবোধ ও নেতৃত্বের গুণাবলি</strong> অর্জনে সহায়তা করা হয়।
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">
                সমাজে ইতিবাচক প্রভাব
              </h3>
              <p className="bangla-text text-gray-700 leading-relaxed">
                এ ধরনের মাদরাসা শুধুমাত্র কিছু শিক্ষার্থীর জীবনই বদলে দেয় না, বরং{" "}
                <strong>সমাজের সার্বিক নৈতিক উন্নয়ন ও কল্যাণে</strong> গুরুত্বপূর্ণ ভূমিকা পালন করে।
                মাদিনাতুল উলূম মাদরাসা ও এতিমখানা একটি{" "}
                <strong>প্রেরণার উৎস</strong>, যা{" "}
                <strong>এতিম ও বঞ্চিত শিশুদের জীবনে আলো ও আশার সঞ্চার</strong> করে। এটি একটি{" "}
                <strong>আদর্শ ইসলামী শিক্ষা প্রতিষ্ঠান</strong>, যা একই সাথে{" "}
                <strong>দ্বীন ও মানবতার খেদমত</strong> করার লক্ষ্য নিয়ে এগিয়ে চলছে।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

