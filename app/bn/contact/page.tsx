import { MapPin, Mail, Phone, Clock, User, Facebook } from "lucide-react";

export default function ContactBn() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="bangla-text text-5xl font-bold mb-4">যোগাযোগ</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            মাদিনাতুল উলূম মাদরাসা ও এতিমখানা সম্পর্কে জানতে বা যোগাযোগ করতে নিচের মাধ্যমগুলো ব্যবহার করুন
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="bangla-text font-semibold text-lg text-gray-900 mb-3">
                ঠিকানা
              </h3>
              <p className="bangla-text text-gray-700 leading-relaxed text-sm">
                কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা,
                <br />
                শেরপুর, ময়মনসিংহ, বাংলাদেশ
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="bangla-text font-semibold text-lg text-gray-900 mb-3">
                ই-মেইল
              </h3>
              <a
                href="mailto:mu.madrasaorphanage.bd@gmail.com"
                className="text-islamic-green hover:underline text-sm break-all"
              >
                mu.madrasaorphanage.bd@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="bangla-text font-semibold text-lg text-gray-900 mb-3">
                হোয়াটসঅ্যাপ | ফোন
              </h3>
              <div className="space-y-2 bangla-text">
                <a
                  href="tel:+8801728014014"
                  className="block text-gray-700 hover:text-islamic-green transition-colors text-sm"
                >
                  +880 17 2801 4014
                </a>
                <a
                  href="tel:+8801791206098"
                  className="block text-gray-700 hover:text-islamic-green transition-colors text-sm"
                >
                  +880 17 9120 6098
                </a>
                <a
                  href="tel:+19175616554"
                  className="block text-gray-700 hover:text-islamic-green transition-colors text-sm"
                >
                  +1 (917) 561-6554
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Facebook className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="bangla-text font-semibold text-lg text-gray-900 mb-3">
                সোশ্যাল মিডিয়া
              </h3>
              <a
                href="http://facebook.com/profile.php?id=61551745422535"
                target="_blank"
                rel="noopener noreferrer"
                className="bangla-text text-islamic-green hover:underline text-sm"
              >
                আমাদের ফেসবুক পেইজ ভিজিট করুন
              </a>
            </div>
          </div>

          {/* Executive Committee Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <User className="h-8 w-8 mr-3 text-islamic-green" />
              নির্বাহী কমিটি (যোগাযোগের জন্য)
            </h2>
            <div className="grid md:grid-cols-3 gap-6 bangla-text">
              <div className="border-l-4 border-islamic-green pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">এক্সিকিউটিভ ডিরেক্টর</h3>
                <p className="text-gray-700">মোঃ শাহনেওয়াজ জামান (শান্ত)</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">সভাপতি</h3>
                <p className="text-gray-700">মোঃ মোমিনুল ইসলাম</p>
              </div>
              <div className="border-l-4 border-teal-700 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">সাধারণ সম্পাদক</h3>
                <p className="text-gray-700">আবু সালিম সুজন</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">
              ভিজিট করার সময়সূচি
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">
                  সাধারণ ভিজিট
                </h3>
                <p className="bangla-text text-gray-700 mb-4">
                  আমাদের প্রতিষ্ঠান সম্পর্কে জানতে, পরিবেশ সরেজমিনে দেখতে বা শিক্ষার্থীদের অবস্থা পর্যবেক্ষণের
                  জন্য আপনি পূর্বানুমতি সাপেক্ষে ভিজিট করতে পারেন।
                </p>
                <div className="flex items-center text-gray-700 bangla-text">
                  <Clock className="h-5 w-5 mr-2 text-islamic-green" />
                  <span>উপযুক্ত সময়: সকাল ৯:০০ – বিকাল ৫:০০ (রবিবার – বৃহস্পতিবার)</span>
                </div>
              </div>
              <div>
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-800">
                  অনুদান ও স্পন্সরশিপ
                </h3>
                <p className="bangla-text text-gray-700 mb-4">
                  অনুদান, ওয়াকফ, মাসিক স্পন্সরশিপ বা অন্য কোনো সহায়তার বিষয়ে আলোচনা করতে চাইলে ই-মেইল বা ফোনের
                  মাধ্যমে আমাদের সাথে যোগাযোগ করুন।
                </p>
                <p className="bangla-text text-gray-700">
                  আমরা যাকাত, সদকাহ, ফিতরা, ওয়াকফ ইত্যাদি গ্রহণ করি এবং শরীয়াহ সম্মত ব্যয়ের ব্যাপারে বিশেষভাবে
                  সচেতন থাকার চেষ্টা করি ইনশা আল্লাহ।
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="bangla-text text-2xl font-bold mb-4 text-gray-900">অবস্থান</h2>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="bangla-text font-semibold">কৈয়াকুড়ি ( বালিগঞ্জ বাজার )</p>
                <p className="bangla-text">
                  নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ
                </p>
                <p className="bangla-text text-sm mt-2">
                  ভবিষ্যতে এখানে গুগল ম্যাপ ইন্টিগ্রেশন যুক্ত করা যেতে পারে
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

