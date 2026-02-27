import BaseLink from "@/components/BaseLink";
import { BookOpen, Users, GraduationCap, Heart, Star, Award, Target, Shield } from "lucide-react";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function HomeBn() {
  const coreValues = [
    { name: "إخلاص", meaning: "খালেস নিয়ত", icon: Heart },
    { name: "دعوة", meaning: "দাওয়াত", icon: BookOpen },
    { name: "تعليم", meaning: "শিক্ষা", icon: GraduationCap },
    { name: "عبادة", meaning: "ইবাদত", icon: Star },
    { name: "خدمة", meaning: "খেদমত", icon: Users },
    { name: "تربية", meaning: "তারবিয়ত", icon: Award },
    { name: "هداية", meaning: "হেদায়েত", icon: Target },
    { name: "تقوى", meaning: "পরহেজগারী", icon: Shield },
    { name: "دين", meaning: "দ্বীন", icon: BookOpen },
    { name: "أمانة", meaning: "আমানতদারী", icon: Shield },
  ];

  const highlights = [
    {
      icon: Users,
      title: "এতিম ও দুস্থ শিশুদের যত্ন",
      description: "এতিম ও দরিদ্র শিক্ষার্থীদের জন্য সম্পূর্ণ বিনামূল্যে ইসলামী শিক্ষা, থাকা–খাওয়া ও পরিচর্যার ব্যবস্থা।",
    },
    {
      icon: BookOpen,
      title: "কুরআন শিক্ষা ও হিফয",
      description: "সহীহ তাজবীদ সহ কুরআনে কারীম হিফয ও তিলাওয়াতের প্রতি বিশেষ গুরুত্বারোপ।",
    },
    {
      icon: Award,
      title: "নৈতিক ও চারিত্রিক শিক্ষা",
      description: "ইসলামী আদর্শ ভিত্তিক আদর্শ নাগরিক গড়ার লক্ষ্যে চরিত্র গঠন, নৈতিকতা ও মানবিকতা বিকাশ।",
    },
    {
      icon: GraduationCap,
      title: "আবাসিক সুবিধা",
      description: "শিক্ষার্থীদের জন্য নিরাপদ, পরিচ্ছন্ন ও শান্ত পরিবেশে আবাসিক সুবিধা।",
    },
    {
      icon: Heart,
      title: "সামাজিক দায়িত্ব",
      description: "দারিদ্র্য বিমোচন, শিক্ষা বিস্তার ও সমাজের অনগ্রসর মানুষের কল্যাণে কাজ করা।",
    },
    {
      icon: Target,
      title: "সমন্বিত শিক্ষা ব্যবস্থা",
      description: "ইলমে দীনের সাথে সাথে সাধারণ শিক্ষার সমন্বয়ে ভারসাম্যপূর্ণ শিক্ষার সুযোগ।",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-green via-teal-700 to-islamic-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-snug">
                <span className="arabic-text text-4xl md:text-5xl block">مدينة العلوم</span>
                <span className="block mt-2 bangla-text text-3xl md:text-4xl">
                  মাদিনাতুল উলূম
                </span>
                <span className="block bangla-text text-2xl md:text-3xl mt-1">
                  মাদরাসা ও এতিমখানা
                </span>
              </h1>
              <p className="bangla-text text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto md:mx-0">
                এতিম ও অসহায় শিশুদের জন্য বিনামূল্যে কুরআন ও ইসলামী শিক্ষা প্রদানকারী একটি অরাজনৈতিক, অ-লাভজনক দ্বীনি শিক্ষা প্রতিষ্ঠান।
              </p>
              <p className="bangla-text text-lg text-teal-50 max-w-2xl mx-auto md:mx-0">
                কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start mt-8">
                <BaseLink
                  href="/bn/donate"
                  className="bg-white text-islamic-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg bangla-text"
                >
                  আমাদের কাজকে সহযোগিতা করুন
                </BaseLink>
                <BaseLink
                  href="/bn/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors bangla-text"
                >
                  বিস্তারিত জানুন
                </BaseLink>
              </div>
            </div>
            {/* Right Side - Photo Carousel */}
            <div className="w-full h-full flex items-center justify-center">
              <PhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="bangla-text text-4xl font-bold text-center mb-4 text-gray-900">
            আমাদের মূলনীতি
          </h2>
          <p className="bangla-text text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            কুরআন ও সুন্নাহ ভিত্তিক আদর্শ গঠনের উদ্দেশ্যে নির্ভেজাল আকীদা, আমল ও আখলাকের শিক্ষা।
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.name}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <Icon className="h-10 w-10 mx-auto mb-3 text-islamic-green" />
                  <h3 className="font-bold text-gray-900 mb-1 arabic-text">{value.name}</h3>
                  <p className="text-sm text-gray-600 bangla-text">{value.meaning}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="bangla-text text-4xl font-bold text-center mb-4 text-gray-900">
            আমাদের বিশেষ বৈশিষ্ট্য
          </h2>
          <p className="bangla-text text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            যা আমাদের প্রতিষ্ঠানকে অনন্য ও হৃদয়গ্রাহী করে তোলে
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-gradient-to-br from-islamic-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-islamic-green/20"
                >
                  <Icon className="h-12 w-12 text-islamic-green mb-4" />
                  <h3 className="bangla-text text-xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="bangla-text text-gray-700 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-br from-islamic-green to-islamic-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="bangla-text text-4xl font-bold mb-6">আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি</h2>
              <p className="bangla-text text-lg leading-relaxed mb-4">
                এতিম ও দরিদ্র শিশুদের জন্য কুরআন ও সহীহ আকীদা ভিত্তিক দ্বীনি ও নৈতিক শিক্ষা প্রদান করা এবং
                তাদেরকে ঈমানদার, নৈতিক ও কর্মক্ষম আদর্শ মানুষ হিসেবে গড়ে তোলা।
              </p>
            </div>
            <div>
              <h2 className="bangla-text text-4xl font-bold mb-6">আমাদের মূল উদ্দেশ্য</h2>
              <ul className="space-y-3 text-lg bangla-text">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>এতিম ও গরিব শিশুদের জন্য সম্পূর্ণ বিনামূল্যে দ্বীনি ও নৈতিক শিক্ষা প্রদান</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>হিফজুল কুরআন ও প্রয়োজনীয় ইসলামি জ্ঞান অর্জনের সুযোগ সৃষ্টি</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>আবাসন, খাদ্য, পোশাক ও চিকিৎসা ব্যবস্থার মাধ্যমে পূর্ণাঙ্গ লালন-পালন</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>ইসলামের শান্তির বাণী ছড়িয়ে দিয়ে সুশৃঙ্খল ও ন্যায়ভিত্তিক সমাজ গঠন</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="bangla-text text-4xl font-bold mb-6 text-gray-900">
            আপনিও হতে পারেন এই সাদাকায়ে জারিয়ার অংশীদার
          </h2>
          <p className="bangla-text text-xl text-gray-700 mb-8">
            আপনার সামান্য সহযোগিতাও একজন এতিম শিশুর শিক্ষা, আশ্রয় ও উজ্জ্বল ভবিষ্যতের দরজা খুলে দিতে পারে ইনশা আল্লাহ।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseLink
              href="/bn/donate"
              className="bg-islamic-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg text-lg bangla-text"
            >
              অনুদান দিন
            </BaseLink>
            <BaseLink
              href="/bn/contact"
              className="bg-white border-2 border-islamic-green text-islamic-green px-8 py-4 rounded-lg font-semibold hover:bg-islamic-light transition-colors text-lg bangla-text"
            >
              যোগাযোগ করুন
            </BaseLink>
          </div>
        </div>
      </section>
    </div>
  );
}

