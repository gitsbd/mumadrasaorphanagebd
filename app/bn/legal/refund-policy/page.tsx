import { RefreshCw, DollarSign, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function RefundPolicyBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <RefreshCw className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">রিফান্ড পলিসি</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            অনুদান ও অবদান সংক্রান্ত রিফান্ড বিষয়ক নীতি
          </p>
          <p className="bangla-text text-sm text-teal-200 mt-4">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString("bn-BD", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">ভূমিকা</h2>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed mb-4">
              মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা নিবন্ধিত অলাভজনক ইসলামী শিক্ষা প্রতিষ্ঠান। এই রিফান্ড পলিসি আমাদের প্রতিষ্ঠানে প্রদত্ত অনুদান ও অবদান সম্পর্কে রিফান্ড সংক্রান্ত নীতির রূপরেখা দেয়।
            </p>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              এই নীতি <strong>সোসাইটিজ রেজিস্ট্রেশন অ্যাক্ট</strong> ও <strong>সমাজসেবা অধিদপ্তর</strong> নির্দেশিকা সহ বাংলাদেশ সরকারি বিধির সাথে সামঞ্জস্যপূর্ণ।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <DollarSign className="h-8 w-8 mr-3 text-islamic-green" />
              সাধারণ রিফান্ড নীতি
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
              <p className="bangla-text text-gray-800 text-lg leading-relaxed">
                <strong>গুরুত্বপূর্ণ:</strong> সাধারণ নিয়ম হিসেবে মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানায় প্রদত্ত অনুদান চূড়ান্ত ও অ-রিফান্ডযোগ্য বলে বিবেচিত হয়। অনুদান আমাদের দাতব্য ও শিক্ষামূলক কার্যক্রমে সহায়তার জন্য স্বেচ্ছায় প্রদত্ত অবদান।
              </p>
            </div>
            <p className="bangla-text text-gray-700 mb-4">
              তবে ব্যতিক্রমী পরিস্থিতি দেখা দিতে পারে। নিম্নলিখিত শর্তে রিফান্ড অনুরোধ বিষয়ভিত্তিক বিবেচনা করা হবে:
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">রিফান্ডযোগ্য ক্ষেত্র</h2>
            <div className="space-y-6 bangla-text text-gray-700">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  ১. প্রযুক্তিগত ত্রুটি
                </h3>
                <p>ওয়েবসাইট বা পেমেন্ট সিস্টেমে প্রযুক্তিগত ত্রুটির কারণে অনুদান প্রক্রিয়াজাত হলে (যেমন ডুপ্লিকেট চার্জ, ভুল পরিমাণ), যাচাইয়ের পর ৭–১৪ কার্যদিবসের মধ্যে ভুল অংক ফেরত দেওয়া হবে।</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  ২. অননুমোদিত লেনদেন
                </h3>
                <p>আপনার পেমেন্ট পদ্ধতি আপনার অনুমতি ছাড়া ব্যবহার করা হলে দ্রুত আমাদের সাথে যোগাযোগ করুন। তদন্ত করে লেনদেন অননুমোদিত নিশ্চিত হলে রিফান্ড প্রক্রিয়া করা হবে।</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  ৩. প্রক্রিয়াজাত ত্রুটি
                </h3>
                <p>আমাদের ভুলে অনুদান ভুলভাবে প্রক্রিয়াজাত হলে (ভুল পরিমাণ, ভুল প্রাপক ইত্যাদি) আমরা ত্রুটি সংশোধন করে প্রয়োজনে রিফান্ড দেব।</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-red-600" />
              অ-রিফান্ডযোগ্য ক্ষেত্র
            </h2>
            <p className="bangla-text text-gray-700 mb-4">নিম্নলিখিত ক্ষেত্রগুলো সাধারণত রিফান্ডের জন্য যোগ্য নয়:</p>
            <ul className="space-y-3 text-gray-700 bangla-text">
              {["অনুদান দেয়ার পর মন পরিবর্তন", "স্বেচ্ছায় ও ইচ্ছাকৃতভাবে প্রদত্ত অনুদান", "ইতিমধ্যে প্রোগ্রাম বা ব্যয়ে বরাদ্দকৃত অনুদান", "৩০ দিনের বেশি আগের অনুদান (ব্যতিক্রমী পরিস্থিতি ছাড়া)", "তৃতীয় পক্ষ প্ল্যাটফর্মের মাধ্যমে প্রদত্ত অনুদান (রিফান্ড সেই প্ল্যাটফর্মের মাধ্যমে করতে হতে পারে)"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Clock className="h-8 w-8 mr-3 text-islamic-green" />
              রিফান্ড অনুরোধ প্রক্রিয়া
            </h2>
            <p className="bangla-text text-gray-700 mb-4">
              রিফান্ডের জন্য ইমেইলে যোগাযোগ করুন:{" "}
              <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                mu.madrasaorphanage.bd@gmail.com
              </a>
              । আপনার পূর্ণ নাম, যোগাযোগের তথ্য, অনুদানের তারিখ ও পরিমাণ, ট্রানজ্যাকশন রেফারেন্স বা রসিদ নম্বর, রিফান্ডের কারণ ও প্রাসঙ্গিক কাগজপত্র (প্রযোজ্য হলে) পাঠান। আমরা ৫–৭ কার্যদিবসের মধ্যে অনুরোধ পর্যালোচনা করব। অনুমোদন হলে ৭–১৪ কার্যদিবসের মধ্যে মূল পেমেন্ট পদ্ধতিতে রিফান্ড করা হবে।
            </p>
          </div>

          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">যোগাযোগ</h2>
            <p className="bangla-text text-gray-700 mb-4">রিফান্ড অনুরোধ বা এই নীতি সম্পর্কে প্রশ্নের জন্য:</p>
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
