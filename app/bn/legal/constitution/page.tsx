import BaseLink from "@/components/BaseLink";
import { FileText, Building2, Users, Scale, BookOpen, Shield, Award, Mail, MapPin, User, Heart } from "lucide-react";

export default function ConstitutionBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">সংবিধান</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানার সংগঠনিক সংবিধান
          </p>
          <p className="bangla-text text-sm text-teal-200 mt-4">
            বাংলাদেশ ইসলামী শিক্ষা বোর্ড ও ইসলামী শরীয়াহ বোর্ডের সাথে সামঞ্জস্যপূর্ণ
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="bangla-text text-3xl font-bold mb-4 text-gray-900">মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা</h2>
              <p className="bangla-text text-lg text-gray-600 italic mb-4">বাংলাদেশভিত্তিক অলাভজনক ইসলামী সংগঠন</p>
              <div className="border-t border-b border-gray-200 py-4 space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-islamic-green" />
                  <span className="bangla-text text-gray-700">কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <User className="h-5 w-5 text-islamic-green" />
                  <span className="bangla-text text-gray-700">নির্বাহী পরিচালক: মোঃ শাহনেওয়াজ জামান (শান্ত)</span>
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

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Building2 className="h-6 w-6 mr-3 text-islamic-green" />
              ১. নাম ও ঠিকানা
            </h2>
            <div className="space-y-3 text-gray-700 bangla-text">
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div><strong>নাম:</strong> মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা</div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div><strong>অবস্থান:</strong> কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ</div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div><strong>ইমেইল:</strong>{" "}
                  <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-islamic-green" />
              ২. প্রকৃতি ও পরিচয়
            </h2>
            <p className="bangla-text text-gray-700 leading-relaxed">
              এটি একটি অরাজনৈতিক, অলাভজনক ইসলামী শিক্ষা ও সেবামূলক প্রতিষ্ঠান; কুরআন ও সুন্নাহর আলোকে এতিম ও সুবিধাবঞ্চিত শিশুদের লালন-পালন, শিক্ষা ও পরিচর্যার জন্য প্রতিষ্ঠিত।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="h-6 w-6 mr-3 text-islamic-green" />
              ৩. মূল নীতি
            </h2>
            <p className="bangla-text text-gray-700 mb-4 leading-relaxed">প্রতিষ্ঠান নিম্নলিখিত ইসলামী মূল্যবোধ দ্বারা পরিচালিত হবে:</p>
            <div className="bg-islamic-light rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-3">
                {["ইখলাস (আন্তরিকতা)", "দাওয়াহ (ইসলামের প্রচার)", "তালীম (শিক্ষা)", "ইবাদাত (উপাসনা)", "খিদমত (সেবা)", "তারবিয়াত (লালন-পালন)", "হিদায়াহ (পথনির্দেশ)", "তাকওয়া (খোদাভীতি)", "দীন (ধর্ম)", "আমানত (বিশ্বস্ততা)"].map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-islamic-green mr-2 font-bold">•</span>
                    <span className="bangla-text text-gray-800 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-islamic-green" />
              ৪. ভিশন ও উদ্দেশ্য
            </h2>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["এতিম ও দরিদ্র শিশুদের বিনামূল্যে ইসলামী ও নৈতিক শিক্ষা প্রদান", "কুরআন মুখস্থ (হিফজ) ও সংশ্লিষ্ট ইসলামী জ্ঞান প্রদান", "প্রয়োজনীয় শিক্ষার্থীদের জন্য নিরাপদ আবাস, খাবার, পোশাক ও চিকিৎসা নিশ্চিত করা", "ইসলামী শিক্ষার মাধ্যমে শান্তিপূর্ণ ও সৎ সমাজ গঠনে অবদান"].map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-islamic-green mr-3 font-semibold mt-1">•</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-3 text-islamic-green" />
              ৫. কমিটি কাঠামো
            </h2>
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">৫.১ স্থায়ী কমিটি</h3>
              <p className="bangla-text text-gray-700 mb-4">স্থায়ী কমিটি প্রতিষ্ঠানের সর্বোচ্চ নীতি নির্ধারণ ও তদারকি সংস্থা।</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 bangla-text text-gray-700">
                <div className="flex items-start">
                  <span className="text-islamic-green mr-2 font-semibold">•</span>
                  <div><strong>সদস্যতার শর্ত:</strong> এককালীন <strong>৫,০০,০০০ টাকা</strong> অনুদান দিতে হবে এবং নির্বাহী কমিটির কোনো পদে থাকা যাবে না।</div>
                </div>
                <div className="flex items-start">
                  <span className="text-islamic-green mr-2 font-semibold">•</span>
                  <div><strong>গঠন:</strong> প্রধান সদস্য ও ন্যূনতম দুইজন অতিরিক্ত সদস্য।</div>
                </div>
                <div className="flex items-start">
                  <span className="text-islamic-green mr-2 font-semibold">•</span>
                  <div><strong>মেয়াদ:</strong> স্থায়ী; পদত্যাগ বা কারণসহ অপসারণ পর্যন্ত।</div>
                </div>
              </div>
            </div>
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">৫.২ নির্বাহী কমিটি</h3>
              <p className="bangla-text text-gray-700 mb-4">স্থায়ী কমিটির তত্ত্বাবধানে গঠিত; দৈনন্দিন কার্যক্রমের দায়িত্বপ্রাপ্ত।</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3 bangla-text text-gray-700">
                <div>
                  <strong className="text-gray-800">পদসমূহ:</strong> নির্বাহী পরিচালক, সভাপতি, সহ-সভাপতি, সাধারণ সম্পাদক, যুগ্ম সম্পাদক, কোষাধ্যক্ষ, প্রচার সম্পাদক, সাধারণ সদস্যবৃন্দ।
                </div>
                <div>
                  <strong className="text-gray-800">দায়িত্ব:</strong> দৈনন্দিন কার্যক্রম ও শিক্ষা কার্যক্রম তদারকি, স্টাফ ও শিক্ষার্থী ব্যবস্থাপনা, দাতা ও স্পন্সরদের সাথে সমন্বয়, বার্ষিক বাজেট অনুমোদন ও ব্যবস্থাপনা।
                </div>
              </div>
            </div>
            <div>
              <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">৫.৩ পরামর্শক কমিটি</h3>
              <p className="bangla-text text-gray-700">সম্মানিত পরামর্শক ও বয়োজ্যেষ্ঠদের নিয়ে গঠিত; অ-বাধ্যতামূলক পরামর্শ ও সহায়তা প্রদান করেন।</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-3 text-islamic-green" />
              ৬. সাধারণ সদস্যতা
            </h2>
            <p className="bangla-text text-gray-700 mb-4">মাদ্রাসার লক্ষ্য ও মূল্যবোধের সাথে একমত যে কোনো ব্যক্তি সাধারণ সদস্য হিসেবে আবেদন করতে পারবেন।</p>
            <div className="bg-gray-50 rounded-lg p-4 bangla-text text-gray-700">
              <strong className="text-gray-800">যোগ্যতা:</strong> আবেদনপত্র জমা, স্বেচ্ছায় সামান্য বার্ষিক অনুদান (বাধ্যতামূলক নয়), মাদ্রাসার কার্যক্রমে সক্রিয় অংশগ্রহণ।
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-islamic-green" />
              ৭. অর্থায়ন ও আর্থিক ব্যবস্থাপনা
            </h2>
            <p className="bangla-text text-gray-700 mb-4">প্রতিষ্ঠানের অর্থায়নের উৎস: যাকাত, সদকা ও ওয়াকফ; দেশি-বিদেশি অনুদান; স্পন্সর ও দাতাদের সহায়তা; এতিম স্পন্সরশিপ; সরকারি/এনজিও সহায়তা (প্রাপ্যতা সাপেক্ষে)।</p>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-700 mb-6 bangla-text text-gray-700">
              <strong className="text-gray-800">অর্থের ব্যবহার:</strong> এতিম আবাসন, খাবার ও শিক্ষা; স্টাফ বেতন; প্রতিষ্ঠান উন্নয়ন; ধর্মীয় ও শিক্ষামূলক প্রকল্প।
            </div>
            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-6 text-white text-center">
              <h3 className="bangla-text text-xl font-semibold mb-2">আমাদের মিশনকে সহায়তা করুন</h3>
              <p className="bangla-text text-sm text-teal-100 mb-4">আপনার অনুদান এতিম ও সুবিধাবঞ্চিত শিশুদের বিনামূল্যে শিক্ষা ও পরিচর্যায় সহায়তা করে</p>
              <BaseLink href="/bn/donate" className="inline-flex items-center space-x-2 bg-white text-islamic-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                <Heart className="h-5 w-5" />
                <span className="bangla-text">অনুদান দিন</span>
              </BaseLink>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-6 w-6 mr-3 text-islamic-green" />
              ৮. সভা ও সিদ্ধান্ত
            </h2>
            <div className="space-y-3 text-gray-700 bangla-text">
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div><strong>বার্ষিক সাধারণ সভা:</strong> বছরে একবার অনুষ্ঠিত হয়।</div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div><strong>জরুরি সভা:</strong> সভাপতি বা নির্বাহী পরিচালক আহ্বান করতে পারেন।</div>
              </div>
              <div className="flex items-start">
                <span className="text-islamic-green mr-3 font-semibold">•</span>
                <div><strong>কোরাম:</strong> সিদ্ধান্তের জন্য কমিটির ৫০% সদস্য উপস্থিতি প্রয়োজন।</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-islamic-green" />
              ৯. পদত্যাগ, অপসারণ ও নির্বাচন
            </h2>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["লিখিত আবেদনের মাধ্যমে সদস্য পদত্যাগ করতে পারবেন", "অনিয়ম বা নিষ্ক্রিয়তার জন্য স্থায়ী কমিটির অনুমোদনসহ সদস্য অপসারণ হতে পারে", "নির্বাহী কমিটির নির্বাচন মেয়াদ শেষে (মেয়াদ সীমা থাকলে) অনুষ্ঠিত হবে"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-islamic-green mr-3 font-semibold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-islamic-green" />
              ১০. আইনি মর্যাদা ও নিবন্ধন
            </h2>
            <p className="bangla-text text-gray-700 mb-4">প্রতিষ্ঠান নিবন্ধিত হতে পারে: সমাজসেবা অধিদপ্তর, সমবায় বিভাগ, ইসলামিক ফাউন্ডেশন বাংলাদেশ।</p>
            <p className="bangla-text text-gray-700 mt-4 italic">এই সংবিধানের যেকোনো সংশোধন স্থায়ী কমিটির অনুমোদন সাপেক্ষে কার্যকর হবে।</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-islamic-green" />
              ১১. বিলুপ্তি
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
              <p className="bangla-text text-gray-800 leading-relaxed">
                প্রতিষ্ঠান যদি কখনো বিলুপ্ত হয়, তাহলে তার সম্পদ কেবল এতিম কল্যাণ ও ইসলামী শিক্ষার জন্য ব্যবহার করতে হবে। ব্যক্তিগত লাভের জন্য সম্পত্তি বা তহবিল হস্তান্তর করা যাবে না।
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-xl shadow-lg p-8 text-white text-center">
            <p className="bangla-text text-lg font-semibold mb-2">
              এই সংবিধান বাংলাদেশ ইসলামী শিক্ষা বোর্ড ও ইসলামী শরীয়াহ বোর্ডের মানদণ্ডের সাথে সামঞ্জস্যপূর্ণ।
            </p>
            <p className="bangla-text text-sm text-teal-100">
              সকল বিধান বাংলাদেশ সরকারি নিয়মকানুন ও ইসলামী নীতির অধীন।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
