import { Copyright, Shield, AlertCircle } from "lucide-react";

export default function CopyrightPageBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Copyright className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">কপিরাইট নোটিশ</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            মেধাস্বত্ব ও ব্যবহার নির্দেশিকা
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
              <Copyright className="h-8 w-8 mr-3 text-islamic-green" />
              কপিরাইট বিবৃতি
            </h2>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed mb-4">
              © {new Date().getFullYear()} মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p className="bangla-text text-gray-700 leading-relaxed">
              এই ওয়েবসাইটের সকল কনটেন্ট—টেক্সট, গ্রাফিক্স, লোগো, ছবি, অডিও, ডিজিটাল ডাউনলোড ও সফটওয়্যার সহ—মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা বা তার কনটেন্ট সরবরাহকারীর সম্পত্তি এবং বাংলাদেশ কপিরাইট আইন ও আন্তর্জাতিক কপিরাইট চুক্তি দ্বারা সুরক্ষিত।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">সুরক্ষিত উপাদান</h2>
            <p className="bangla-text text-gray-700 mb-4">নিম্নলিখিত উপাদান কপিরাইট দ্বারা সুরক্ষিত:</p>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["সমস্ত টেক্সট কনটেন্ট, কোর্স বর্ণনা, কারিকুলাম তথ্য ও প্রতিষ্ঠানিক নথি", "ওয়েবসাইট ডিজাইন, লেআউট ও ইউজার ইন্টারফেস", "লোগো, ট্রেডমার্ক ও ব্র্যান্ডিং উপাদান", "ফটো, ছবি ও গ্রাফিক্স (অন্যথায় উল্লেখ না থাকলে)", "শিক্ষামূলক উপাদান ও কারিকুলাম কনটেন্ট", "সফটওয়্যার কোড ও ওয়েবসাইট কার্যকারিতা"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-islamic-green mr-3 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-green-600" />
              অনুমোদিত ব্যবহার
            </h2>
            <p className="bangla-text text-gray-700 mb-4">নিম্নলিখিত উদ্দেশ্যে আপনি আমাদের ওয়েবসাইট কনটেন্ট ব্যবহার করতে পারবেন:</p>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["ব্যক্তিগত ব্যবহার: ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহারের জন্য কনটেন্ট দেখা ও ডাউনলোড", "শিক্ষামূলক ব্যবহার: সঠিক অ্যাট্রিবিউশনসহ শিক্ষামূলক উদ্দেশ্যে কনটেন্ট ব্যবহার", "শেয়ারিং: সোশ্যাল মিডিয়া বা অন্যান্য প্ল্যাটফর্মে আমাদের ওয়েবসাইটের লিংক শেয়ার", "প্রিন্ট: ব্যক্তিগত রেফারেন্সের জন্য পেইজ প্রিন্ট (পুনর্বিতরণের জন্য নয়)"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-red-600" />
              নিষিদ্ধ ব্যবহার
            </h2>
            <p className="bangla-text text-gray-700 mb-4">আপনি নিম্নলিখিত কাজ করবেন না:</p>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["লিখিত অনুমতি ছাড়া কোনো কনটেন্ট পুনরুৎপাদন, কপি বা নকল", "আমাদের কনটেন্ট থেকে পরিবর্তন, অভিযোজন বা ডেরিভেটিভ কাজ তৈরি", "অনুমোদন ছাড়া বাণিজ্যিক উদ্দেশ্যে আমাদের কনটেন্ট ব্যবহার", "উপাদান থেকে কপিরাইট নোটিশ বা অ্যাট্রিবিউশন সরানো", "কপিরাইট লঙ্ঘন রিপোর্ট বা অনুমতি অনুরোধের জন্য আমাদের সাথে যোগাযোগ করুন"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">যোগাযোগ</h2>
            <p className="bangla-text text-gray-700 mb-4">
              কপিরাইট সংক্রান্ত জিজ্ঞাসা, অনুমতি অনুরোধ বা লঙ্ঘন রিপোর্টের জন্য যোগাযোগ করুন:{" "}
              <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                mu.madrasaorphanage.bd@gmail.com
              </a>
            </p>
            <div className="space-y-2 text-gray-700 bangla-text">
              <p><strong>ঠিকানা:</strong> কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
