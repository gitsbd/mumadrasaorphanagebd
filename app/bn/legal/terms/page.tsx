import { FileText, Scale, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function TermsBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">টার্মস অ্যান্ড কন্ডিশনস</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            আমাদের ওয়েবসাইট ও সেবা ব্যবহারের আগে এই শর্তাবলী সাবধানে পড়ুন।
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
              এই টার্মস অ্যান্ড কন্ডিশনস (“শর্তাবলী”) মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানার ওয়েবসাইটে আপনার প্রবেশ ও ব্যবহার নিয়ন্ত্রণ করে। আমাদের ওয়েবসাইট অ্যাক্সেস বা ব্যবহারের মাধ্যমে আপনি এই শর্তাবলী দ্বারা আবদ্ধ হতে সম্মত হন।
            </p>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              এই শর্তাবলী বাংলাদেশের আইন দ্বারা পরিচালিত এবং <strong>সোসাইটিজ রেজিস্ট্রেশন অ্যাক্ট</strong>, <strong>ডিজিটাল সিকিউরিটি অ্যাক্ট, ২০১৮</strong> ও প্রযোজ্য অন্যান্য বিধির সাথে সামঞ্জস্যপূর্ণ।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">১. শর্তাবলীর স্বীকৃতি</h2>
            <p className="bangla-text text-gray-700 mb-4">
              এই ওয়েবসাইট অ্যাক্সেসের মাধ্যমে আপনি এই চুক্তির শর্ত ও বিধান মেনে চলতে সম্মত হন। সম্মত না হলে অনুগ্রহ করে এই সেবা ব্যবহার করবেন না।
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4 bangla-text text-gray-800">
              <p><strong>দ্রষ্টব্য:</strong> এই শর্তাবলী আপনার ও মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানার মধ্যে আইনগতভাবে বাধ্যতামূলক চুক্তি।</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">২. ওয়েবসাইটের ব্যবহার</h2>
            <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">২.১ অনুমোদিত ব্যবহার</h3>
            <p className="bangla-text text-gray-700 mb-4">আপনি কেবল বৈধ উদ্দেশ্যে আমাদের ওয়েবসাইট ব্যবহার করতে পারবেন। আপনি সম্মত হন:</p>
            <ul className="space-y-2 text-gray-700 mb-6 bangla-text">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>প্রযোজ্য সকল আইন ও বিধি অনুযায়ী ওয়েবসাইট ব্যবহার করতে</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>অনুদান বা যোগাযোগের সময় সঠিক ও সত্য তথ্য প্রদান করতে</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>প্রতিষ্ঠানের মেধাস্বত্ব সম্মান করতে</span>
              </li>
            </ul>
            <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">২.২ নিষিদ্ধ ব্যবহার</h3>
            <p className="bangla-text text-gray-700 mb-4">আপনি নিম্নলিখিত কাজ করবেন না:</p>
            <ul className="space-y-2 text-gray-700 bangla-text">
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>অবৈধ বা অননুমোদিত কোনো উদ্দেশ্যে ওয়েবসাইট ব্যবহার</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>ওয়েবসাইটের কোনো অংশে অননুমোদিত প্রবেশের চেষ্টা</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>ভাইরাস, ম্যালওয়্যার বা ক্ষতিকর কোড প্রেরণ</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>অনুমতি ছাড়া অটোমেটেড সিস্টেম দিয়ে ওয়েবসাইট অ্যাক্সেস</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>অনুমোদন ছাড়া কনটেন্ট পুনরুৎপাদন, নকল বা কপি</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">৩. অনুদান</h2>
            <p className="bangla-text text-gray-700 mb-4">
              ওয়েবসাইটের মাধ্যমে অনুদান দিলে আপনি সম্মত হন যে: সকল অনুদান স্বেচ্ছামূলক, আপনি সঠিক পেমেন্ট তথ্য দেবেন, অনুদান তৃতীয় পক্ষের নিরাপদ প্রসেসরের মাধ্যমে প্রক্রিয়াজাত হয়, এবং বাংলাদেশ কর আইন অনুযায়ী প্রয়োজন হলে আমরা রসিদ প্রদান করব।
            </p>
            <p className="bangla-text text-gray-700">
              প্রাপ্ত সকল অনুদান আমাদের সংবিধানে উল্লিখিত উদ্দেশ্যে—এতিম পরিচর্যা, শিক্ষা, প্রতিষ্ঠান উন্নয়ন—এবং সংশ্লিষ্ট কার্যক্রমে ব্যায় করা হয়। আর্থিক রেকর্ড অলাভজনক সংস্থার জন্য বাংলাদেশ সরকারি বিধি অনুযায়ী সংরক্ষণ করা হয়।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">৪. মেধাস্বত্ব</h2>
            <p className="bangla-text text-gray-700">
              এই ওয়েবসাইটের সকল কনটেন্ট (টেক্সট, গ্রাফিক্স, লোগো, ছবি, সফটওয়্যার ইত্যাদি) মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা বা তার কনটেন্ট সরবরাহকারীর সম্পত্তি এবং বাংলাদেশ কপিরাইট আইন ও আন্তর্জাতিক চুক্তি দ্বারা সুরক্ষিত। আমাদের লিখিত অনুমতি ছাড়া আপনি কোনো কনটেন্ট পুনরুৎপাদন, বিতরণ, পরিবর্তন বা ডেরিভেটিভ কাজ তৈরি করতে পারবেন না।
            </p>
          </div>

          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">যোগাযোগ</h2>
            <p className="bangla-text text-gray-700 mb-4">এই শর্তাবলী সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:</p>
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
