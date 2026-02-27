import { FileCheck, Building2, Shield, CheckCircle } from "lucide-react";

export default function RegistrationBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FileCheck className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">নিবন্ধন ও রেগুলেশন</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            বাংলাদেশ সরকারি বিধি অনুযায়ী আইনি নিবন্ধন ও আনুগত্য সংক্রান্ত তথ্য
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Building2 className="h-8 w-8 mr-3 text-islamic-green" />
              প্রতিষ্ঠানের তথ্য
            </h2>
            <div className="space-y-4 text-gray-700 bangla-text">
              <p><strong>পূর্ণ নাম:</strong> মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা</p>
              <p><strong>ধরন:</strong> অলাভজনক ইসলামী শিক্ষা ও দাতব্য প্রতিষ্ঠান</p>
              <p><strong>অবস্থান:</strong> কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ</p>
              <p><strong>ইমেইল:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>নির্বাহী পরিচালক:</strong> মোঃ শাহনেওয়াজ জামান (শান্ত)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <FileCheck className="h-8 w-8 mr-3 text-islamic-green" />
              নিবন্ধন মর্যাদা
            </h2>
            <p className="bangla-text text-gray-700 mb-6 leading-relaxed">
              মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা বাংলাদেশ সরকারি বিধি অনুযায়ী নিবন্ধিত ও পরিচালিত। প্রতিষ্ঠান সমাজসেবা অধিদপ্তর, সমবায় বিভাগ বা ইসলামিক ফাউন্ডেশন বাংলাদেশের অধীনে নিবন্ধিত হতে পারে।
            </p>
            <div className="space-y-6 bangla-text text-gray-700">
              <div className="border-l-4 border-islamic-green pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  সমাজসেবা অধিদপ্তর
                </h3>
                <p>সামাজিক সেবা ও এতিমখানা পরিচালনার জন্য নিবন্ধন।</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  সমবায় বিভাগ
                </h3>
                <p>সমবায় ও সম্প্রদায়ভিত্তিক শিক্ষা সেবার জন্য প্রযোজ্য হলে নিবন্ধন।</p>
              </div>
              <div className="border-l-4 border-teal-700 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  ইসলামিক ফাউন্ডেশন বাংলাদেশ
                </h3>
                <p>ইসলামী শিক্ষা প্রতিষ্ঠান হিসেবে অ্যাফিলিয়েশন ও মানদণ্ড অনুসরণ।</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-islamic-green" />
              আইনি কাঠামো
            </h2>
            <p className="bangla-text text-gray-700 mb-6">প্রতিষ্ঠান সোসাইটিজ রেজিস্ট্রেশন অ্যাক্ট, স্বেচ্ছাসেবী সামাজিক সেবা সংস্থা অধ্যাদেশ ১৯৬১, বাংলাদেশ ডিজিটাল সিকিউরিটি অ্যাক্ট ২০১৮, সমাজসেবা অধিদপ্তর নির্দেশিকা ও ইসলামিক ফাউন্ডেশন নিয়মাবলি অনুযায়ী পরিচালিত হয়।</p>
          </div>

          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">যোগাযোগ</h2>
            <p className="bangla-text text-gray-700 mb-4">নিবন্ধন বা আনুগত্য সংক্রান্ত যাচাইয়ের জন্য:</p>
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
