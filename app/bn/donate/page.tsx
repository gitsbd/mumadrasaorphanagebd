"use client";

import {
  Heart,
  DollarSign,
  Users,
  BookOpen,
  Shield,
  CheckCircle,
  Mail,
  Phone,
  Home,
  Utensils,
  GraduationCap,
  UserCircle,
  FileText,
  Stethoscope,
  Wrench,
  Building2,
  Lightbulb,
  Volume2,
  TreePine,
  Droplets,
  ShoppingCart,
  Shirt,
  Sun,
  BookMarked,
} from "lucide-react";
import BaseLink from "@/components/BaseLink";
import { useState } from "react";

export default function DonateBn() {
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState<"BDT" | "USD">("BDT");
  
  // আনুমানিক রেট: ১১০ টাকা = ১ ডলার
  const conversionRate = 110;
  
  const convertAmount = (amount: number, from: "BDT" | "USD", to: "BDT" | "USD"): number => {
    if (from === to) return amount;
    if (from === "BDT" && to === "USD") return amount / conversionRate;
    return amount * conversionRate; // USD to BDT
  };

  const yourDonationsSupport = [
    { icon: Home, text: "এতিমদের আবাসন – নিরাপদ ও পরিচ্ছন্ন হোস্টেল সুবিধা" },
    { icon: Utensils, text: "খাবার ও পুষ্টি – প্রতিদিন ৩ বেলা খাবার, নাস্তা ও বিশুদ্ধ পানি" },
    { icon: BookOpen, text: "ইসলামী ও সাধারণ শিক্ষা – কুরআন, আরবি, বাংলা, ইংরেজি, গণিত ইত্যাদি" },
    { icon: UserCircle, text: "শিক্ষক ও কর্মচারীদের সম্মানী/বেতন" },
    { icon: FileText, text: "শিক্ষাসামগ্রী – বই, খাতা, কলম, বোর্ড ইত্যাদি" },
    { icon: Stethoscope, text: "চিকিৎসা ও স্বাস্থ্য সেবা – প্রাথমিক চিকিৎসা ও জরুরি সেবা" },
    { icon: Wrench, text: "ইনফ্রাস্ট্রাকচার উন্নয়ন – ক্লাসরুম, টয়লেট, রান্নাঘর, বাউন্ডারি ওয়াল" },
    { icon: Building2, text: "মসজিদ নির্মাণ ও রক্ষণাবেক্ষণ" },
  ];

  const utilityEssentials = [
    { icon: Lightbulb, text: "বিদ্যুৎ ও লাইটিং (বাল্ব, ফ্যান, সোলার সিস্টেম)" },
    { icon: Volume2, text: "আজান ও নামাজের সাউন্ড সিস্টেম (মাইক, স্পিকার, ডিজিটাল ঘড়ি)" },
    { icon: Shield, text: "মাদরাসা ও মসজিদের কার্পেট, মাদুর ইত্যাদি" },
    { icon: TreePine, text: "গাছপালা – ছায়া, সৌন্দর্য ও পরিবেশবান্ধব পরিবেশের জন্য" },
    { icon: Droplets, text: "পানির ব্যবস্থা (মোটর, ট্যাংক, ফিল্টার সিস্টেম)" },
    { icon: ShoppingCart, text: "মাসিক খাদ্য দ্রব্য – ছাত্র ও স্টাফদের জন্য" },
    { icon: Shirt, text: "নামাজের পোষাক (জামা, পাঞ্জাবি, টুপি ইত্যাদি)" },
    { icon: Sun, text: "সোলার প্যানেল – বিদ্যুৎ বিল কমানো ও টেকসই ব্যবস্থা" },
    { icon: BookMarked, text: "ইসলামী শিক্ষার কিট (কায়দা, আমপারা, নূরানী বই ইত্যাদি)" },
  ];

  const donationMethods = [
    {
      title: "ব্যাংক ট্রান্সফার",
      details: "আমাদের অফিসিয়াল ব্যাংক একাউন্টে সরাসরি জমা দিন",
      info: "ব্যাংক একাউন্টের তথ্য জানতে যোগাযোগ করুন",
    },
    {
      title: "মোবাইল ব্যাংকিং",
      details: "বিকাশ, নগদ, রকেট বা অন্যান্য মোবাইল ব্যাংকিং সার্ভিস",
      info: "+880 17 2801 4014",
      phone: "+8801728014014",
    },
    {
      title: "Zelle পেমেন্ট",
      details: "যুক্তরাষ্ট্র থেকে Zelle এর মাধ্যমে অনুদান পাঠাতে পারেন",
      info: "+1 (917) 561-6554",
      phone: "+19175616554",
    },
    {
      title: "সরাসরি অনুদান",
      details: "প্রতিষ্ঠানে সরাসরি এসে অনুদান প্রদান করতে পারেন",
      info: "কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-5xl font-bold mb-4">আমাদের কাজে অংশ নিন</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            আপনার অনুদানই একেকজন এতিম ও দুস্থ শিশুর জন্য শিক্ষা, আশ্রয়, খাদ্য ও উজ্জ্বল ভবিষ্যতের দ্বার উন্মুক্ত করে।
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="bangla-text text-4xl font-bold mb-4 text-gray-900">
                কেন আপনার সহযোগিতা গুরুত্বপূর্ণ?
              </h2>
              <p className="bangla-text text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <strong>মাদিনাতুল উলূম মাদরাসা ও এতিমখানা</strong> একটি অ-লাভজনক ইসলামী শিক্ষা প্রতিষ্ঠান,
                যেখানে <strong>এতিম ও অসহায় শিশুদের</strong> জন্য সম্পূর্ণ বিনামূল্যে{" "}
                <strong>কুরআনি, নৈতিক ও সাধারণ শিক্ষা</strong> প্রদান করা হয়। আপনার অনুদান শুধু দান নয়,
                বরং এটি এক ধরনের চলমান সওয়াব – <em>সাদাকায়ে জারিয়া</em>, যা ইনশা আল্লাহ মৃত্যুর পরও জারি থাকতে পারে।
              </p>
            </div>

            {/* Your Donations Support */}
            <div className="mb-8">
              <h3 className="bangla-text text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-islamic-green" />
                আপনার অনুদানে যা যা হয়:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {yourDonationsSupport.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start p-4 bg-islamic-light rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="bangla-text text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Utility & Religious Essentials */}
            <div className="mb-8">
              <h3 className="bangla-text text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-teal-700" />
                প্রয়োজনীয় ইউটিলিটি ও ধর্মীয় সামগ্রী:
              </h3>
              <p className="bangla-text text-gray-700 mb-4 italic">
                আপনার সহযোগিতায় প্রতিদিনের প্রয়োজনীয় নানা খাত পূরণ হয়, যেমন—
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {utilityEssentials.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start p-3 bg-teal-50 rounded-lg border border-teal-100"
                    >
                      <Icon className="h-4 w-4 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="bangla-text text-sm text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* A Lasting Impact */}
            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-6 text-white">
              <h3 className="bangla-text text-2xl font-bold mb-4 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                আপনার দানে স্থায়ী প্রভাব
              </h3>
              <p className="bangla-text text-lg mb-4 leading-relaxed">
                প্রতিটি ছোট-বড় অনুদান আমাদের এই <strong>পবিত্র আমানত</strong> – এতিম ও অসহায় শিশুদের লালন-পালন,
                শিক্ষা ও প্রশিক্ষণ – সুন্দরভাবে চালিয়ে যেতে সহায়তা করে।
              </p>
              <div className="bg-white/10 rounded-lg p-4 border-l-4 border-white">
                <p className="bangla-text text-lg italic">
                  একজন শিশুর খাবার, পোশাক, বই কিংবা একটি কুরআন শরীফ – আপনার যে কোনো সহযোগিতাই হতে পারে আপনার
                  দুনিয়া ও আখিরাতের সফলতার মাধ্যম ইনশা আল্লাহ।
                </p>
              </div>
            </div>
          </div>

          {/* Impact of Your Donation - Separate Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6">
              <h3 className="bangla-text text-2xl font-bold mb-4 text-gray-900">
                নির্দিষ্ট অংকের অনুদানে কী হয়?
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="bangla-text text-gray-700 font-semibold">৳ ১,০০০</span>
                      <span className="text-gray-600 text-sm">(≈ USD 9)</span>
                    </div>
                    <span className="bangla-text text-islamic-green font-semibold">
                      ১ জন ছাত্রের মাসিক খাবার
                    </span>
                  </div>
                  <BaseLink
                    href="/bn/donate/form?amount=1000"
                    className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors bangla-text"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    এখনই অনুদান দিন
                  </BaseLink>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="bangla-text text-gray-700 font-semibold">৳ ৩,০০০</span>
                      <span className="text-gray-600 text-sm">(≈ USD 27)</span>
                    </div>
                    <span className="bangla-text text-islamic-green font-semibold">
                      ১ জন ছাত্রের মাসিক শিক্ষা ব্যয়
                    </span>
                  </div>
                  <BaseLink
                    href="/bn/donate/form?amount=3000"
                    className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors bangla-text"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    এখনই অনুদান দিন
                  </BaseLink>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="bangla-text text-gray-700 font-semibold">
                        ৳ ৪,০০০ - ৫,০০০
                      </span>
                      <span className="text-gray-600 text-sm">(≈ USD 36 - 45)</span>
                    </div>
                    <span className="bangla-text text-islamic-green font-semibold">
                      ১ জন ছাত্রের মাসিক পূর্ণাঙ্গ ব্যয়
                    </span>
                  </div>
                  <BaseLink
                    href="/bn/donate/form?amount=4500"
                    className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors bangla-text"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    এখনই অনুদান দিন
                  </BaseLink>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="bangla-text text-gray-700 font-semibold">৳ ৮,০০০</span>
                      <span className="text-gray-600 text-sm">(≈ USD 73)</span>
                    </div>
                    <span className="bangla-text text-islamic-green font-semibold">
                      ১ জন ছাত্রের বাৎসরিক ইউনিফর্ম ও শিক্ষা সামগ্রী
                    </span>
                  </div>
                  <BaseLink
                    href="/bn/donate/form?amount=8000"
                    className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors bangla-text"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    এখনই অনুদান দিন
                  </BaseLink>
                </div>

                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-col">
                      <span className="bangla-text text-gray-700 font-semibold">৳ ২০,০০০</span>
                      <span className="text-gray-600 text-sm">(≈ USD 182)</span>
                    </div>
                    <span className="bangla-text text-islamic-green font-semibold">
                      ১ জন এতিমের বাৎসরিক সম্পূর্ণ স্পন্সরশিপ
                    </span>
                  </div>
                  <BaseLink
                    href="/bn/donate/form?amount=20000"
                    className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors bangla-text"
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    এখনই অনুদান দিন
                  </BaseLink>
                </div>
              </div>
            </div>
          </div>

          {/* Donate Any Amount */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="bangla-text text-3xl font-bold mb-4 text-gray-900">
                  আপনার সুবিধামতো যেকোনো পরিমাণ অনুদান দিন
                </h3>
                <p className="bangla-text text-lg text-gray-700">
                  অল্প কিংবা বেশি – যেকোনো পরিমাণ সহযোগিতাই আমাদের জন্য মূল্যবান।
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-8 border-2 border-islamic-green/20">
                <div className="mb-4">
                  <label
                    htmlFor="currency-select"
                    className="bangla-text block text-sm font-semibold text-gray-700 mb-2"
                  >
                    মুদ্রা নির্বাচন করুন
                  </label>
                  <select
                    id="currency-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as "BDT" | "USD")}
                    className="w-full sm:w-auto px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors bg-white"
                  >
                    <option value="BDT">BDT (বাংলাদেশি টাকা)</option>
                    <option value="USD">USD (US Dollar)</option>
                  </select>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 w-full">
                    <label
                      htmlFor="amount"
                      className="bangla-text block text-sm font-semibold text-gray-700 mb-2"
                    >
                      অনুদানের পরিমাণ লিখুন ({currency})
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                        {currency}
                      </span>
                      <input
                        type="number"
                        id="amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="পরিমাণ লিখুন"
                        min="1"
                        step={currency === "USD" ? "0.01" : "1"}
                        className="w-full pl-16 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none text-lg font-semibold"
                      />
                    </div>
                    {customAmount && parseFloat(customAmount) > 0 && (
                      <p className="mt-2 text-sm text-gray-600 bangla-text">
                        আনুমানিক{" "}
                        {currency === "BDT"
                          ? `USD ${convertAmount(parseFloat(customAmount), "BDT", "USD").toFixed(2)}`
                          : `BDT ${Math.round(
                              convertAmount(parseFloat(customAmount), "USD", "BDT"),
                            ).toLocaleString()}`}
                      </p>
                    )}
                  </div>
                  <div className="w-full sm:w-auto">
                    <BaseLink
                      href={
                        customAmount && parseFloat(customAmount) > 0
                          ? `/bn/donate/form?amount=${customAmount}&currency=${currency}`
                          : "/bn/donate/form"
                      }
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-islamic-green to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 bangla-text"
                    >
                      <Heart className="h-5 w-5 mr-2" />
                      এখনই অনুদান দিন
                    </BaseLink>
                  </div>
                </div>
                
                {customAmount && parseFloat(customAmount) > 0 && (
                  <div className="mt-6 p-4 bg-islamic-green/10 rounded-lg border border-islamic-green/30">
                    <p className="text-center text-gray-700 bangla-text">
                      <span className="font-semibold text-islamic-green">
                        {currency}{" "}
                        {parseFloat(customAmount).toLocaleString(undefined, {
                          minimumFractionDigits: currency === "USD" ? 2 : 0,
                          maximumFractionDigits: currency === "USD" ? 2 : 0,
                        })}
                      </span>
                      {currency === "BDT" && (
                        <span className="text-gray-600">
                          {" "}
                          (≈ USD{" "}
                          {convertAmount(parseFloat(customAmount), "BDT", "USD").toFixed(2)})
                        </span>
                      )}
                      {currency === "USD" && (
                        <span className="text-gray-600">
                          {" "}
                          (≈ BDT{" "}
                          {Math.round(
                            convertAmount(parseFloat(customAmount), "USD", "BDT"),
                          ).toLocaleString()}
                          )
                        </span>
                      )}
                      {" "}আপনার এই সহযোগিতার মাধ্যমে আমরা আমাদের শিক্ষার্থীদের কল্যাণে গুরুত্বপূর্ণ কাজ করতে পারব ইনশা আল্লাহ।
                    </p>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center bangla-text">
                    <Shield className="h-4 w-4 inline mr-1 text-islamic-green" />
                    সকল অনুদান নিরাপদভাবে গ্রহণ করা হয় এবং সরাসরি শিক্ষার্থীদের কল্যাণ ও
                    প্রতিষ্ঠানের উন্নয়নে ব্যয় করা হয়।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Types */}
          <div className="mb-12">
            <h2 className="bangla-text text-3xl font-bold mb-8 text-center text-gray-900">
              কোন কোন খাতে অনুদান দিতে পারেন?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: "যাকাত ও সদকা",
                  description:
                    "যাকাত, ফিতরা, সদকা, উজরাহ ইত্যাদি আমাদের মাধ্যমে সরাসরি এতিম ও দরিদ্র শিক্ষার্থীদের কল্যাণে ব্যয় হয়।",
                  color: "from-red-500 to-pink-600",
                },
                {
                  icon: Users,
                  title: "মাসিক স্পন্সরশিপ",
                  description:
                    "কোনো একজন এতিম শিশুর সম্পূর্ণ মাসিক ব্যয় (খাবার, থাকা, পোশাক, শিক্ষা) নির্দিষ্ট অংকে স্পন্সর করতে পারেন।",
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  icon: BookOpen,
                  title: "শিক্ষা সহায়তা",
                  description:
                    "কিতাব, খাতা, কলম, শিক্ষকদের বেতন, ক্লাসরুম সাজানোসহ বিভিন্ন শিক্ষামূলক খাতে অনুদান দিতে পারেন।",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: Shield,
                  title: "ওয়াকফ ও স্থায়ী দান",
                  description:
                    "দীর্ঘমেয়াদী ওয়াকফ, সম্পদ, জমি বা স্থায়ী দানের মাধ্যমে এই সাদাকায়ে জারিয়ার কাজে শরিক হতে পারেন।",
                  color: "from-purple-500 to-indigo-600",
                },
              ].map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col"
                  >
                    <div
                      className={`bg-gradient-to-r ${type.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="bangla-text text-2xl font-bold mb-4 text-gray-900">
                      {type.title}
                    </h3>
                    <p className="bangla-text text-gray-700 leading-relaxed mb-6 flex-grow">
                      {type.description}
                    </p>
                    <BaseLink
                      href="/bn/donate/form"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-islamic-green to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bangla-text"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      এই খাতে অনুদান দিন
                    </BaseLink>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donation Methods */}
          <div
            id="donation-methods"
            className="bg-white rounded-xl shadow-lg p-8 mb-12 scroll-mt-20"
          >
            <h2 className="bangla-text text-3xl font-bold mb-8 text-gray-900">
              কীভাবে অনুদান পাঠাবেন?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-islamic-green transition-colors"
                >
                  <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="bangla-text text-gray-700 mb-2">{method.details}</p>
                  {method.phone ? (
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="h-4 w-4 text-islamic-green" />
                      <a
                        href={`tel:${method.phone}`}
                        className="bangla-text text-sm text-islamic-green hover:text-islamic-dark font-medium transition-colors"
                      >
                        {method.info}
                      </a>
                    </div>
                  ) : (
                    <p className="bangla-text text-sm text-gray-600 italic">{method.info}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Donation */}
          <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-xl shadow-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="h-12 w-12 mx-auto mb-6" />
              <h2 className="bangla-text text-3xl font-bold mb-4">
                অনুদান বা স্পন্সরশিপ বিষয়ে জানতে চান?
              </h2>
              <p className="bangla-text text-xl mb-8 text-teal-100">
                অনুদান, ওয়াকফ, মাসিক স্পন্সরশিপ বা অন্যান্য যে কোনো বিষয়ে আলাপ করতে নিচের ঠিকানায় যোগাযোগ করতে
                পারেন।
              </p>
              <div className="space-y-4">
                <p className="bangla-text text-lg">
                  <strong>ই-মেইল:</strong>{" "}
                  <a
                    href="mailto:mu.madrasaorphanage.bd@gmail.com"
                    className="underline hover:text-teal-200"
                  >
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </p>
                <p className="bangla-text text-lg">
                  <strong>ঠিকানা:</strong> কৈয়াকুড়ি ( বালিগঞ্জ বাজার ), নকলা, শেরপুর, ময়মনসিংহ, বাংলাদেশ
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <BaseLink
                  href="/bn/contact"
                  className="bangla-text bg-white text-islamic-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  যোগাযোগ করুন
                </BaseLink>
                <BaseLink
                  href="/bn/about"
                  className="bangla-text bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors"
                >
                  আমাদের সম্পর্কে আরও জানুন
                </BaseLink>
              </div>
            </div>
          </div>

          {/* Transparency */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900 text-center">
              স্বচ্ছতা ও জবাবদিহিতা
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">
                  নিবন্ধিত প্রতিষ্ঠান
                </h3>
                <p className="bangla-text text-gray-700">
                  বাংলাদেশ সরকারের সংশ্লিষ্ট দপ্তরের বিধি-বিধান অনুসরণ করে প্রতিষ্ঠান পরিচালিত হয় এবং নিবন্ধন প্রক্রিয়া
                  সম্পন্ন/চলমান আছে।
                </p>
              </div>
              <div className="text-center p-6">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">
                  আর্থিক জবাবদিহিতা
                </h3>
                <p className="bangla-text text-gray-700">
                  স্থায়ী কমিটি ও নির্বাহী কমিটির তত্ত্বাবধানে সকল আয়-ব্যয়ের হিসাব সংরক্ষণ ও নিরীক্ষা করা হয়।
                </p>
              </div>
              <div className="text-center p-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="bangla-text text-xl font-semibold mb-2 text-gray-900">
                  সরাসরি প্রভাব
                </h3>
                <p className="bangla-text text-gray-700">
                  আপনার অনুদান সরাসরি এতিম ও দরিদ্র শিক্ষার্থীদের কল্যাণ, শিক্ষা ও প্রতিষ্ঠানের উন্নয়নে ব্যয় হয় –
                  অপ্রয়োজনীয় প্রশাসনিক ব্যয় ব্যতীত।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

