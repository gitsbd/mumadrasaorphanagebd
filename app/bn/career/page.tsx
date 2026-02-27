import {
  Briefcase,
  GraduationCap,
  Users,
  Clock,
  MapPin,
  Mail,
  CheckCircle,
  BookOpen,
  Award,
  Phone,
  FileText,
} from "lucide-react";
import BaseLink from "@/components/BaseLink";

export default function CareerBn() {
  const teacherPositions = [
    {
      title: "কুরআন শিক্ষক (হিফজ)",
      department: "হিফজ বিভাগ",
      type: "ফুল-টাইম",
      requirements: [
        "হাফিজুল কুরআন সনদপ্রাপ্ত এবং শক্তিশালী তাজবিদ জ্ঞানসম্পন্ন",
        "হিফজ পড়ানোর ক্ষেত্রে ন্যূনতম ৩-৫ বছরের অভিজ্ঞতা",
        "এতিম ও সুবিধাবঞ্চিত শিক্ষার্থীদের সাথে কাজের মানসিকতা",
        "ধৈর্যশীল, শৃঙ্খলাবোধসম্পন্ন এবং আদর্শ চরিত্রের অধিকারী",
        "বাংলা ও আরবি ভাষায় ভালো যোগাযোগ দক্ষতা",
      ],
      responsibilities: [
        "শিক্ষার্থীদের হিফজুল কুরআন শিক্ষা প্রদান করা",
        "তাজবিদের হুকুমাবলি যথাযথভাবে প্রয়োগ করে পাঠদান",
        "শিক্ষার্থীদের অগ্রগতি নিয়মিত মূল্যায়ন ও তদারকি",
        "দৈনিক ও সাপ্তাহিক মুরাজা (দোর পুনরাবৃত্তি) পরিচালনা",
        "শিক্ষার্থীদেরকে মানসিক ও নৈতিক দিক থেকে সহযোগিতা করা",
      ],
    },
    {
      title: "নূরানী প্রোগ্রাম শিক্ষক",
      department: "নূরানী বিভাগ",
      type: "ফুল-টাইম",
      requirements: [
        "নূরানী কায়দা ও তাজবিদের মৌলিক বিষয়ে দৃঢ় ধারণা",
        "শিশুদের প্রাথমিক ইসলামি শিক্ষা প্রদানের অভিজ্ঞতা",
        "বাংলা, ইংরেজি ও প্রাথমিক গণিত শেখানোর সক্ষমতা",
        "৪-৮ বছর বয়সী শিশুদের সাথে কাজ করার ধৈর্য ও দক্ষতা",
        "ইন্টিগ্রেটেড কারিকুলামের ধারণা সম্পর্কে সম্যক জ্ঞান",
      ],
      responsibilities: [
        "নূরানী কায়দা ও প্রাথমিক আরবি শিক্ষা প্রদান",
        "প্রাথমিক আকীদা, আমল ও আদবসহ ইসলামি শিক্ষা দেওয়া",
        "প্রাথমিক বাংলা, ইংরেজি ও গণিত বিষয় পড়ানো",
        "শিক্ষার্থীদের সার্বিক অগ্রগতি পর্যবেক্ষণ ও সহায়তা",
        "শ্রেণিকক্ষে অনুকূল ও ইসলামি পরিবেশ বজায় রাখা",
      ],
    },
    {
      title: "ইসলামিয়াত ও সাধারণ শিক্ষা শিক্ষক",
      department: "ইসলামিক স্টাডিজ ও জেনারেল এডুকেশন বিভাগ",
      type: "ফুল-টাইম",
      requirements: [
        "ইসলামিক স্টাডিজে ডিগ্রি (আলিম/দাওরায়ে হাদিস অগ্রাধিকারযোগ্য) অথবা বাংলা, ইংরেজি, গণিত বা সাধারণ জ্ঞান বিষয়ে স্নাতক ডিগ্রি",
        "আকীদা, ফিকহ, সিরাহ ও হাদিস বিষয়ে ভালো ধারণা এবং পাঠদানে ইসলামি মূল্যবোধ সংযোজনের মানসিকতা",
        "ইসলামি ও/অথবা সাধারণ শিক্ষা বিষয় পড়ানোর বাস্তব অভিজ্ঞতা",
        "বিভিন্ন বয়সের শিক্ষার্থীদের কাছে জটিল বিষয় সহজভাবে উপস্থাপন করার দক্ষতা",
        "শিশুর মনোবিজ্ঞান, এতিম শিক্ষার্থীদের প্রয়োজন এবং ইসলামি আদর্শ সম্পর্কে সংবেদনশীল ও অঙ্গীকারবদ্ধ",
      ],
      responsibilities: [
        "আকীদা, ফিকহ, সিরাহ, হাদিসসহ ইসলামিক স্টাডিজ এবং প্রয়োজন অনুযায়ী বাংলা, ইংরেজি, গণিত বা সাধারণ জ্ঞান বিষয় পড়ানো",
        "বয়স উপযোগী পাঠ পরিকল্পনা ও শিক্ষাসামগ্রী তৈরি ও বাস্তবায়ন",
        "শিক্ষার্থীদের অগ্রগতি মূল্যায়ন, ফলাফল লিপিবদ্ধকরণ ও নিয়মিত ফিডব্যাক প্রদান",
        "শৃঙ্খলাবদ্ধ, অনুপ্রেরণামূলক ও ইসলামি পরিবেশসম্মত ক্লাস পরিচালনা",
        "শিক্ষার্থীদের একাডেমিক, নৈতিক ও ব্যক্তিত্ব গঠনের ক্ষেত্রে সার্বিক সহায়তা প্রদান",
      ],
    },
    {
      title: "অপারেশন্স ম্যানেজার",
      department: "প্রশাসন ও অপারেশন বিভাগ",
      type: "ফুল-টাইম (আবাসিক হলে অগ্রাধিকার)",
      requirements: [
        "দৃঢ় ইসলামি চরিত্র (আমানতদারী, তাকওয়া, নেতৃত্বের গুণাবলি)",
        "ইসলামিক স্টাডিজ / আলিম / হিফজ বা সমমানের ডিগ্রি অগ্রাধিকারযোগ্য",
        "মাদ্রাসা বা যে কোনো প্রতিষ্ঠানের প্রশাসন/ম্যানেজমেন্টে ন্যূনতম ৩–৫ বছরের বাস্তব অভিজ্ঞতা",
        "দৃঢ় সাংগঠনিক দক্ষতা, নেতৃত্ব প্রদান ও কার্যকর যোগাযোগ দক্ষতা",
        "আর্থিক লেনদেনে স্বচ্ছতা ও দায়িত্বশীলতার প্রমাণিত মানসিকতা",
        "টিম লিড করার সক্ষমতা এবং একাধিক দায়িত্ব একসাথে পরিচালনার দক্ষতা",
        "মৌলিক কম্পিউটার জ্ঞান (ইমেইল, এমএস অফিস, রিপোর্টিং ইত্যাদি) থাকলে অগ্রাধিকার",
      ],
      responsibilities: [
        "মাদ্রাসা ও এতিমখানার দৈনন্দিন কার্যক্রম তদারকি করা এবং নির্বিঘ্ন প্রশাসনিক ব্যবস্থা নিশ্চিত করা",
        "শিক্ষক, কর্মচারী ও সহায়ক স্টাফদের তদারকি করা এবং শৃঙ্খলাবদ্ধ ইসলামি পরিবেশ বজায় রাখা",
        "নূরানী, হিফজ, ইসলামিয়াত ও সাধারণ শিক্ষা সহ সব একাডেমিক প্রোগ্রাম মনিটরিং করা এবং শিক্ষকদের পারফরম্যান্স মূল্যায়ন",
        "একাডেমিক, প্রশাসনিক ও আর্থিক সব ধরনের রেকর্ড সঠিকভাবে সংরক্ষণ ও রিপোর্টিং সিস্টেম বজায় রাখা",
        "অনুদান, স্পন্সরশিপ ও ফান্ডিং কার্যক্রম তদারকি করা এবং পূর্ণ আর্থিক স্বচ্ছতা নিশ্চিত করা",
        "কোষাধ্যক্ষ ও কমিটির সাথে সমন্বয়ে মাসিক ও বাৎসরিক আর্থিক ও কার্যক্রম প্রতিবেদন প্রস্তুত করা",
        "বিল্ডিং, মসজিদ, ক্লাসরুম, আবাসন, বিদ্যুৎ, পানি, সোলার, সাউন্ড সিস্টেম ইত্যাদি অবকাঠামোগত উন্নয়ন ও রক্ষণাবেক্ষণ তদারকি করা",
        "দাতা, স্পন্সর, অভিভাবক ও কমিউনিটির সাথে সুসম্পর্ক রক্ষা করা এবং বিভিন্ন মিটিং ও অনুষ্ঠানে প্রতিষ্ঠানের প্রতিনিধিত্ব করা",
        "অফিসিয়াল ইমেইল, চিঠিপত্র ও নথিপত্র ব্যবস্থাপনা করা এবং ফান্ডরেইজিং উদ্যোগসমূহে সক্রিয় ভূমিকা রাখা",
        "বাংলাদেশের আইন, নিবন্ধন, সংবিধান ও কমিটি সিদ্ধান্ত অনুযায়ী প্রতিষ্ঠানের সকল আইনি ও নীতিগত অনুশাসন নিশ্চিত করা",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "উপযুক্ত সম্মানী",
      description: "যোগ্যতা ও অভিজ্ঞতার ভিত্তিতে আকর্ষণীয় বেতন কাঠামো",
    },
    {
      icon: Users,
      title: "সহযোগিতামূলক পরিবেশ",
      description: "ইসলামি শিক্ষা ও এতিম কল্যাণে নিবেদিত একটি পরিবারের অংশ হোন",
    },
    {
      icon: GraduationCap,
      title: "পেশাগত উন্নয়ন",
      description: "ট্রেনিং ও দক্ষতা উন্নয়নের নিয়মিত সুযোগ",
    },
    {
      icon: BookOpen,
      title: "অর্থবহ কাজ",
      description: "এতিম ও সুবিধাবঞ্চিত শিশুদের জীবনে বাস্তব পরিবর্তন আনার সুযোগ",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-4xl sm:text-5xl font-bold mb-4">ক্যারিয়ার সুযোগ</h1>
          <p className="bangla-text text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানার শিক্ষা পরিবারে যুক্ত হয়ে এতিম ও সুবিধাবঞ্চিত শিশুদের উজ্জ্বল ভবিষ্যৎ
            গঠনে অংশ নিন।
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">আমাদের টিমে যোগ দিন</h2>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed mb-4">
              মাদিনাতুল উলূম মাদ্রাসা ও এতিমখানা এমন সব শিক্ষক খুঁজছে যারা ইসলামি শিক্ষার প্রতি নিবেদিত, শিক্ষাদানে
              দক্ষ এবং এতিম ও সুবিধাবঞ্চিত শিশুদের উন্নত জীবনের স্বপ্ন দেখে। আমরা এমন একটি পরিবেশ প্রদান করি যেখানে আপনি
              জ্ঞানার্জন ও জ্ঞান বিতরণের মাধ্যমে দুনিয়া ও আখিরাতে সফলতার পথে এগিয়ে যেতে পারেন।
            </p>
            <p className="bangla-text text-lg text-gray-700 leading-relaxed">
              যারা ইসলামি মূল্যবোধে বিশ্বাসী, ধৈর্যশীল, স্নেহশীল এবং শিক্ষাক্ষেত্রে উচ্চমান বজায় রাখার মানসিকতা রাখেন,
              আমরা তাদেরকে আমাদের টিমে স্বাগত জানাই ইনশা আল্লাহ।
            </p>
          </div>

          {/* Available Positions */}
          <div className="mb-12">
            <h2 className="bangla-text text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
              বর্তমানে খালি পদসমূহ
            </h2>
            <div className="space-y-6">
              {teacherPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="bangla-text text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 bangla-text">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-islamic-green" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-islamic-green" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <BaseLink
                        href={`/bn/career/apply?position=${encodeURIComponent(position.title)}`}
                        className="inline-flex items-center bg-gradient-to-r from-islamic-green to-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bangla-text"
                      >
                        <FileText className="h-4 w-4 mr-1.5" />
                        এখনই আবেদন করুন
                      </BaseLink>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="bangla-text text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        যোগ্যতা
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 bangla-text">
                            <span className="text-islamic-green mr-2 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="bangla-text text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-teal-600" />
                        দায়িত্বসমূহ
                      </h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 bangla-text">
                            <span className="text-teal-600 mr-2 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-8 text-center text-gray-900">কেন আমাদের সাথে কাজ করবেন?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="bg-islamic-green p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="bangla-text text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">আবেদন করার নিয়ম</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  ১
                </div>
                <div>
                  <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">আপনার আবেদনপত্র প্রস্তুত করুন</h3>
                  <p className="bangla-text text-gray-700">
                    আপনার সিভি/রেজুমে, শিক্ষাগত সনদপত্র এবং প্রাসঙ্গিক সকল সার্টিফিকেট প্রস্তুত করুন। কেন আপনি আমাদের
                    প্রতিষ্ঠানে যোগ দিতে চান তা উল্লেখ করে একটি কভার লেটার সংযুক্ত করুন।
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  ২
                </div>
                <div>
                  <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">ইমেইলের মাধ্যমে আবেদন পাঠান</h3>
                  <p className="bangla-text text-gray-700">
                    নিচের ইমেইল ঠিকানায় আপনার সকল কাগজপত্র পাঠান:{" "}
                    <a
                      href="mailto:mu.madrasaorphanage.bd@gmail.com"
                      className="text-islamic-green hover:underline"
                    >
                      mu.madrasaorphanage.bd@gmail.com
                    </a>{" "}
                    ইমেইলের বিষয় হিসেবে লিখুন: “শিক্ষক নিয়োগ - [পদের নাম]”।
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  ৩
                </div>
                <div>
                  <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">সাক্ষাৎকার ও নিয়োগ প্রক্রিয়া</h3>
                  <p className="bangla-text text-gray-700">
                    প্রাথমিকভাবে নির্বাচিত প্রার্থীদের ফোন বা ইমেইলের মাধ্যমে জানানো হবে এবং পরবর্তীতে সাক্ষাৎকার ও ডেমো
                    ক্লাসের মাধ্যমে চূড়ান্ত নিয়োগ সম্পন্ন করা হবে।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">যোগাযোগ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                  <div className="text-gray-700 text-sm bangla-text">
                    <p className="font-semibold mb-1">ঠিকানা:</p>
                    <p>
                      কৈয়াকুড়ি ( বালিগঞ্জ বাজার )
                      <br />
                      নকলা, শেরপুর, ময়মনসিংহ
                      <br />
                      বাংলাদেশ
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                  <div className="text-gray-700 text-sm bangla-text">
                    <p className="font-semibold mb-1">ফোন:</p>
                    <p>+880 17 2801 4014</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-islamic-green mt-1 flex-shrink-0" />
                  <div className="text-gray-700 text-sm bangla-text">
                    <p className="font-semibold mb-1">ইমেইল:</p>
                    <a
                      href="mailto:mu.madrasaorphanage.bd@gmail.com"
                      className="text-islamic-green hover:underline"
                    >
                      mu.madrasaorphanage.bd@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6 border border-islamic-green/20">
                <h3 className="bangla-text text-2xl font-bold mb-3 text-gray-900">আপনি কি আগ্রহী?</h3>
                <p className="bangla-text text-gray-700 mb-4">
                  যদি আপনি মনে করেন যে আপনি উপরোক্ত যোগ্যতাসমূহের অধিকারী এবং আমাদের মিশনে অংশ নিতে চান, তবে দয়া করে
                  দ্রুত আবেদন করুন। আল্লাহ তায়ালা কুরআন ও সুন্নাহের আলোকে আমাদের প্রচেষ্টাকে কবুল করুন।
                </p>
                <p className="bangla-text text-gray-700">
                  <span className="font-semibold">দ্রষ্টব্য:</span> বর্তমানে সবগুলো পদ ফুল-টাইম ভিত্তিতে, তবে ভবিষ্যতে
                  পার্ট-টাইম বা অনলাইন ভিত্তিক সুযোগও তৈরি হতে পারে ইনশা আল্লাহ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

