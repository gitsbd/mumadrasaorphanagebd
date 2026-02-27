import { Shield, FileText, Lock, Eye, Users, Mail } from "lucide-react";

export default function PrivacyPolicyBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">প্রাইভেসি পলিসি</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। এই নীতিতে বর্ণিত হয়েছে আমরা কীভাবে তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষা করি।
          </p>
          <p className="bangla-text text-sm text-teal-200 mt-4">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <FileText className="h-8 w-8 mr-3 text-islamic-green" />
              ভূমিকা
            </h2>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed mb-4">
              মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা (“আমরা”) আপনার গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই প্রাইভেসি পলিসি ব্যাখ্যা করে যে আপনি আমাদের ওয়েবসাইট পরিদর্শন বা প্রতিষ্ঠানের সাথে যোগাযোগ করলে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, প্রকাশ ও সুরক্ষা করি।
            </p>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              এই নীতি <strong>বাংলাদেশ ডিজিটাল সিকিউরিটি অ্যাক্ট, ২০১৮</strong> ও বাংলাদেশের প্রযোজ্য ডেটা সুরক্ষা বিধির সাথে সামঞ্জস্যপূর্ণ। আমাদের ওয়েবসাইট ব্যবহারের মাধ্যমে আপনি এই নীতির অনুযায়ী তথ্য সংগ্রহ ও ব্যবহারে সম্মতি দেন।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Eye className="h-8 w-8 mr-3 text-islamic-green" />
              আমরা যে তথ্য সংগ্রহ করি
            </h2>
            <div className="space-y-6 bangla-text text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">১. ব্যক্তিগত তথ্য</h3>
                <p className="mb-3">আমরা নিম্নলিখিত ব্যক্তিগত তথ্য সংগ্রহ করতে পারি:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>নাম ও যোগাযোগের তথ্য (ইমেইল, ফোন, ঠিকানা)</li>
                  <li>অনুদান ও পেমেন্টের বিবরণ (তৃতীয় পক্ষের নিরাপদ প্রসেসরের মাধ্যমে)</li>
                  <li>যোগাযোগের পছন্দ</li>
                  <li>আমাদের সাথে যোগাযোগ বা অনুদান দেয়ার সময় আপনি স্বেচ্ছায় প্রদানকৃত অন্যান্য তথ্য</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">২. অ-ব্যক্তিগত তথ্য</h3>
                <p className="mb-3">আমরা স্বয়ংক্রিয়ভাবে কিছু অ-ব্যক্তিগত তথ্য সংগ্রহ করি:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ব্রাউজার ধরন ও সংস্করণ</li>
                  <li>আইপি ঠিকানা ও সাধারণ অবস্থান</li>
                  <li>দেখা পেইজ ও সাইটে কাটানো সময়</li>
                  <li>রেফারার ওয়েবসাইট</li>
                  <li>ডিভাইসের তথ্য</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-8 w-8 mr-3 text-islamic-green" />
              আমরা আপনার তথ্য কীভাবে ব্যবহার করি
            </h2>
            <p className="bangla-text text-gray-700 mb-4">সংগৃহীত তথ্য আমরা নিম্নোক্ত উদ্দেশ্যে ব্যবহার করি:</p>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["অনুদান প্রক্রিয়াকরণ ও রসিদ প্রদান", "আপনার জিজ্ঞাসার জবাব ও সহায়তা প্রদান", "আপনার সম্মতিতে প্রোগ্রাম ও কার্যক্রম সম্পর্কে আপডেট পাঠানো", "ওয়েবসাইট ও সেবা উন্নত করা", "আইনি বাধ্যবাধকতা ও নিয়ন্ত্রক শর্ত পূরণ", "বাংলাদেশ সরকারি বিধি অনুযায়ী রেকর্ড সংরক্ষণ"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-islamic-green mr-3 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Lock className="h-8 w-8 mr-3 text-islamic-green" />
              ডেটা সুরক্ষা ও নিরাপত্তা
            </h2>
            <p className="bangla-text text-gray-700 mb-4 leading-relaxed">
              আমরা আপনার ব্যক্তিগত তথ্য অননুমোদিত প্রবেশ, পরিবর্তন, প্রকাশ বা ধ্বংস থেকে রক্ষা করতে প্রযুক্তিগত ও সাংগঠনিক ব্যবস্থা নিই। তবে ইন্টারনেট বা ইলেকট্রনিক স্টোরেজের মাধ্যমে প্রেরণ ১০০% নিরাপদ নয়।
            </p>
            <div className="bg-islamic-light p-6 rounded-lg mt-6 bangla-text text-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">নিরাপত্তা ব্যবস্থার মধ্যে রয়েছে:</h3>
              <ul className="space-y-2">
                <li>• এনক্রিপশন (SSL/TLS) দিয়ে নিরাপদ ডেটা প্রেরণ</li>
                <li>• ব্যক্তিগত তথ্যে সীমিত প্রবেশ</li>
                <li>• নিয়মিত নিরাপত্তা মূল্যায়ন</li>
                <li>• বাংলাদেশ ডিজিটাল সিকিউরিটি অ্যাক্ট, ২০১৮ অনুসরণ</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">ডেটা শেয়ারিং ও প্রকাশ</h2>
            <p className="bangla-text text-gray-700 mb-4">
              আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রয়, বাণিজ্য বা ভাড়া দিই না। কেবল নিম্নলিখিত পরিস্থিতিতে আমরা আপনার তথ্য শেয়ার করতে পারি: সেবা প্রদানকারীদের সাথে (গোপনীয়তা চুক্তি সাপেক্ষে), আইনি প্রয়োজন অনুযায়ী, অধিকার বা নিরাপত্তা রক্ষায়, অথবা আপনার স্পষ্ট সম্মতিতে।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">আপনার অধিকার</h2>
            <p className="bangla-text text-gray-700 mb-4">বাংলাদেশ আইন অনুযায়ী আপনার ব্যক্তিগত তথ্য সংক্রান্ত নিম্নলিখিত অধিকার রয়েছে:</p>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["প্রবেশের অধিকার: আমরা যে তথ্য রাখি তা দেখার অনুরোধ", "সংশোধনের অধিকার: ভুল বা অসম্পূর্ণ তথ্য সংশোধনের অনুরোধ", "মুছে ফেলার অধিকার: তথ্য মুছে ফেলার অনুরোধ (আইনি সংরক্ষণ সাপেক্ষে)", "আপত্তির অধিকার: আপনার তথ্য প্রক্রিয়াকরণের বিরুদ্ধে আপত্তি", "সম্মতি প্রত্যাহারের অধিকার: যেকোনো সময় ডেটা প্রক্রিয়াকরণের সম্মতি প্রত্যাহার"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-islamic-green mr-3 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="bangla-text text-gray-700 mt-6">
              এই অধিকার প্রয়োগ করতে যোগাযোগ করুন:{" "}
              <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                mu.madrasaorphanage.bd@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">ডেটা সংরক্ষণ</h2>
            <p className="bangla-text text-gray-700 leading-relaxed">
              আমরা আপনার ব্যক্তিগত তথ্য কেবল এই প্রাইভেসি পলিসিতে উল্লিখিত উদ্দেশ্য পূরণের জন্য প্রয়োজনীয় সময় পর্যন্ত সংরক্ষণ করি, যদি না আইন দ্বারা দীর্ঘ সংরক্ষণ প্রয়োজন বা অনুমোদিত হয়। আর্থিক রেকর্ড বাংলাদেশ সরকারি বিধি অনুযায়ী অলাভজনক সংস্থার জন্য সাধারণত ন্যূনতম ৭ বছর সংরক্ষণ করা হয়।
            </p>
          </div>

          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Mail className="h-8 w-8 mr-3 text-islamic-green" />
              যোগাযোগ
            </h2>
            <p className="bangla-text text-gray-700 mb-4">এই প্রাইভেসি পলিসি বা আমাদের ডেটা অনুশীলন সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:</p>
            <div className="space-y-2 text-gray-700 bangla-text">
              <p><strong>ইমেইল:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>ঠিকানা:</strong> কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ</p>
              <p><strong>নির্বাহী পরিচালক:</strong> মোঃ শাহনেওয়াজ জামান (শান্ত)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
