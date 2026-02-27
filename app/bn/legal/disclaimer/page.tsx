import { AlertTriangle, Info, Shield } from "lucide-react";

export default function DisclaimerBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">ডিসক্লেইমার</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            আমাদের ওয়েবসাইট ও সেবা ব্যবহার সংক্রান্ত গুরুত্বপূর্ণ আইনি ডিসক্লেইমার
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
              <Info className="h-8 w-8 mr-3 text-islamic-green" />
              সাধারণ ডিসক্লেইমার
            </h2>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed mb-4">
              এই ওয়েবসাইটে থাকা তথ্য কেবল সাধারণ তথ্যের জন্য। আমরা তথ্য আপ টু ডেট ও সঠিক রাখার চেষ্টা করি, তবে ওয়েবসাইট বা এতে থাকা তথ্য, পণ্য, সেবা বা গ্রাফিক্সের সম্পূর্ণতা, সঠিকতা, নির্ভরযোগ্যতা বা উপলব্ধতা সম্পর্কে আমরা কোনো ধরনের প্রতিনিধিত্ব বা ওয়ারেন্টি দিই না।
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4 bangla-text text-gray-800">
              <p><strong>গুরুত্বপূর্ণ:</strong> এমন তথ্যের উপর নির্ভরতা সম্পূর্ণভাবে আপনার নিজের ঝুঁকিতে। আমরা এই ওয়েবসাইটের ব্যবহার থেকে উদ্ভূত বা এর সাথে সম্পর্কিত কোনো ক্ষতি বা ক্ষতি—পরোক্ষ, ফলস্বরূপ বা ডেটা/লাভের ক্ষতি—এর জন্য দায়ী হব না।</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">ওয়েবসাইট ডিসক্লেইমার</h2>
            <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">১. কোনো ওয়ারেন্টি নেই</h3>
            <p className="bangla-text text-gray-700 mb-6">
              এই ওয়েবসাইট “যেমন আছে তেমন” ভিত্তিতে প্রদান করা হয়েছে। মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা এই ওয়েবসাইট বা এতে প্রদত্ত তথ্য ও উপাদান সম্পর্কে কোনো প্রতিনিধিত্ব বা ওয়ারেন্টি দেয় না।
            </p>
            <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">২. উপলব্ধতা</h3>
            <p className="bangla-text text-gray-700 mb-6">
              আমরা দাবি করি না যে এই ওয়েবসাইট সর্বদা বা সব সময় উপলব্ধ থাকবে। ওয়েবসাইটের তথ্য সম্পূর্ণ, সত্য, সঠিক বা বিভ্রান্তিকর নয়—তা আমরা ওয়ারেন্টি দিই না।
            </p>
            <h3 className="bangla-text text-xl font-semibold mb-3 text-gray-800">৩. প্রযুক্তিগত সমস্যা</h3>
            <p className="bangla-text text-gray-700">
              প্রযুক্তিগত ত্রুটি, ভুল বা ট্রান্সমিশন বিলম্বের জন্য আমরা দায়ী নই। আমরা কোনো পূর্ব নোটিশ ছাড়াই ওয়েবসাইটের যেকোনো দিক পরিবর্তন, স্থগিত বা বন্ধ করার অধিকার সংরক্ষণ করি।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">শিক্ষামূলক কনটেন্ট ডিসক্লেইমার</h2>
            <p className="bangla-text text-gray-700 mb-4">
              এই ওয়েবসাইটে প্রদত্ত শিক্ষামূলক কনটেন্ট, কোর্স বর্ণনা ও কারিকুলাম তথ্য নোটিশ ছাড়াই পরিবর্তন হতে পারে। কোর্স সময়সূচি, ফি ও উপলব্ধতা পরিবর্তন হতে পারে; ভর্তির শর্ত ও পদ্ধতি আপডেট হতে পারে; আমরা কারিকুলাম ও প্রোগ্রাম পরিবর্তনের অধিকার রাখি। সর্বাধিক সাম্প্রতিক তথ্যের জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">অনুদান ডিসক্লেইমার</h2>
            <p className="bangla-text text-gray-700 mb-4">
              আমরা উল্লিখিত উদ্দেশ্যে (এতিম পরিচর্যা, শিক্ষা, প্রতিষ্ঠান উন্নয়ন) অনুদান ব্যবহারের সর্বোচ্চ চেষ্টা করি, তবে আমরা নিশ্চয়তা দিতে পারি না যে: সকল অনুদান ঠিক যেমন নির্দিষ্ট করা হয়েছে তেমন ব্যবহার হবে, অনুদান নির্দিষ্ট ফলাফল দেবে, অথবা অনুদান কর কাটানো যাবে (কর উপদেষ্টার সাথে পরামর্শ করুন)। আমরা আর্থিক প্রতিবেদনে স্বচ্ছতা বজায় রাখি এবং স্থায়ী কমিটি ও বাংলাদেশ সরকারি কর্তৃপক্ষের তদারকির অধীন।
            </p>
          </div>

          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-islamic-green" />
              যোগাযোগ
            </h2>
            <p className="bangla-text text-gray-700 mb-4">এই ডিসক্লেইমার সম্পর্কে প্রশ্ন থাকলে যোগাযোগ করুন:</p>
            <div className="space-y-2 text-gray-700 bangla-text">
              <p><strong>ইমেইল:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>ঠিকানা:</strong> কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
