"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, DollarSign, CheckCircle, Phone, Mail, ArrowLeft, Shield, AlertCircle } from "lucide-react";
import BaseLink from "@/components/BaseLink";
import { APPS_SCRIPT_URLS } from "@/config/apps-script-urls";

function DonateFormContentBn() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    donationType: "",
    currency: (searchParams?.get("currency") === "USD" ? "USD" : "BDT") as "BDT" | "USD",
    amount: searchParams?.get("amount") || "",
    referenceNumber: "",
    comments: "",
  });

  const donationTypes = [
    "যাকাত ও সদকা",
    "মাসিক স্পন্সরশিপ",
    "শিক্ষা সহায়তা",
    "ওয়াকফ ও স্থায়ী দান",
    "এতিম আবাসন সহায়তা",
    "খাবার ও পুষ্টি ব্যয়",
    "ইসলামি ও সাধারণ শিক্ষা",
    "স্টাফ ও শিক্ষকদের বেতন",
    "শিক্ষা উপকরণ",
    "চিকিৎসা ও স্বাস্থ্য সেবা",
    "ইনফ্রাসট্রাকচার উন্নয়ন",
    "মসজিদ নির্মাণ ও রক্ষণাবেক্ষণ",
    "বিদ্যুৎ ও আলোকসজ্জা",
    "নামাজের সরঞ্জাম",
    "মাদ্রাসা ও মসজিদের কার্পেটিং",
    "গাছপালা ও সবুজায়ন",
    "পানি সরবরাহ",
    "মাসিক খাদ্য ব্যয়",
    "জায়নামাজ ও ধর্মীয় পোশাক",
    "সোলার প্যানেল",
    "ইসলামি শিক্ষাসামগ্রী",
    "সাধারণ অনুদান",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const scriptUrl = APPS_SCRIPT_URLS.DONATION_FORM;

      if (!scriptUrl || scriptUrl.trim() === "") {
        throw new Error(
          "Apps Script URL is not configured. Please add NEXT_PUBLIC_DONATION_SCRIPT_URL to your .env.local file and restart the development server.",
        );
      }

      const finalUrl = scriptUrl.endsWith("/exec") ? scriptUrl : scriptUrl.replace(/\/dev$/, "/exec");

      await fetch(finalUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting donation form:", err);

      let errorMessage = "An error occurred while submitting the form. ";

      if (err instanceof TypeError) {
        if (err.message.includes("fetch")) {
          errorMessage = `Network error: ${err.message}. Please check:\n1. Your internet connection\n2. The Apps Script URL is correct (should end with /exec)\n3. The Apps Script is deployed with "Anyone" access\n4. Check browser console (F12) for more details`;
        } else {
          errorMessage = `Error: ${err.message}. Please check the browser console (F12) for details.`;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage += "Please check the browser console (F12) for details.";
      }

      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/[^\d.]/g, "");
    return numericValue;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h1 className="bangla-text text-3xl sm:text-4xl font-bold mb-4 text-gray-900">আপনার অনুদানের জন্য ধন্যবাদ!</h1>
              <p className="bangla-text text-lg text-gray-700">
                আপনার এই অনুদান আমাদের শিক্ষার্থীদের জীবনে গুরুত্বপূর্ণ পরিবর্তন আনবে ইনশা আল্লাহ।
              </p>
            </div>

            <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6 mb-6 border-2 border-islamic-green/20">
              <h2 className="bangla-text text-2xl font-bold mb-4 text-gray-900">অনুদানের সারসংক্ষেপ</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="bangla-text text-gray-600 font-medium">নাম:</span>
                  <span className="bangla-text text-gray-900 font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="bangla-text text-gray-600 font-medium">অনুদানের ধরণ:</span>
                  <span className="bangla-text text-gray-900 font-semibold">{formData.donationType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="bangla-text text-gray-600 font-medium">পরিমাণ:</span>
                  <span className="bangla-text text-islamic-green font-bold text-xl">
                    {formData.currency} {parseFloat(formData.amount || "0").toLocaleString()}
                  </span>
                </div>
                {formData.referenceNumber && (
                  <div className="flex justify-between">
                    <span className="bangla-text text-gray-600 font-medium">রেফারেন্স নম্বর:</span>
                    <span className="bangla-text text-gray-900 font-semibold">{formData.referenceNumber}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-8 text-white mb-6">
              <h2 className="bangla-text text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                অনুদান সম্পূর্ণ করুন
              </h2>
              <p className="bangla-text text-lg mb-6 text-teal-100">
                অনুগ্রহ করে নিচের যেকোনো একটি মাধ্যমে আপনার অনুদানের টাকা প্রেরণ সম্পূর্ণ করুন:
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="bangla-text text-xl font-bold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    মোবাইল ব্যাংকিং (বিকাশ)
                  </h3>
                  <div className="space-y-2">
                    <p className="bangla-text text-teal-100">নিম্নের বিকাশ নম্বরে আপনার অনুদান পাঠান:</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <a
                        href="tel:+8801728014014"
                        className="text-2xl font-bold hover:text-teal-200 transition-colors"
                      >
                        +880 17 2801 4014
                      </a>
                    </div>
                    <p className="bangla-text text-sm text-teal-100 mt-2">
                      অনুগ্রহ করে বিকাশ পাঠানোর সময় রেফারেন্স/নোট ঘরে আপনার নাম লিখুন।
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="bangla-text text-xl font-bold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Zelle পেমেন্ট (বিদেশি দাতাদের জন্য)
                  </h3>
                  <div className="space-y-2">
                    <p className="bangla-text text-teal-100">নিম্নের নম্বরে Zelle এর মাধ্যমে আপনার অনুদান পাঠাতে পারেন:</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <a
                        href="tel:+19175616554"
                        className="text-2xl font-bold hover:text-teal-200 transition-colors"
                      >
                        +1 (917) 561-6554
                      </a>
                    </div>
                    <p className="bangla-text text-sm text-teal-100 mt-2">
                      অনুগ্রহ করে মেমো ঘরে আপনার নাম ও অনুদানের ধরন উল্লেখ করুন।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h3 className="bangla-text text-lg font-semibold mb-2 text-blue-900">এরপর কী হবে?</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="bangla-text">আপনার প্রদত্ত যোগাযোগ ঠিকানায় কনফার্মেশন মেসেজ/ইমেইল পাঠানো হবে</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="bangla-text">আমাদের টিম আপনার পেমেন্ট ভেরিফাই করে রসিদ পাঠাবে</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="bangla-text">আপনার অনুদান আপনার নির্বাচিত খাত অনুযায়ী ব্যয় করা হবে ইনশা আল্লাহ</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BaseLink
                href="/bn/donate"
                className="inline-flex items-center justify-center bg-islamic-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors bangla-text"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                অনুদান পেইজে ফিরে যান
              </BaseLink>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    phoneNumber: "",
                    location: "",
                    donationType: "",
                    currency: "BDT",
                    amount: "",
                    referenceNumber: "",
                    comments: "",
                  });
                }}
                className="inline-flex items-center justify-center bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors bangla-text"
              >
                আরেকটি অনুদান জমা দিন
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <BaseLink
            href="/bn/donate"
            className="inline-flex items-center text-islamic-green hover:text-teal-700 mb-4 transition-colors bangla-text"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            অনুদান পেইজে ফিরে যান
          </BaseLink>
          <h1 className="bangla-text text-3xl sm:text-4xl font-bold mb-4 text-gray-900">অনুদান ফরম</h1>
          <p className="bangla-text text-lg text-gray-700">
            অনুগ্রহ করে নিচের ফরমটি পূরণ করুন। আপনার সকল তথ্য নিরাপদ এবং গোপনীয়ভাবে সংরক্ষণ করা হবে।
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                পূর্ণ নাম <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="আপনার পূর্ণ নাম লিখুন"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                মোবাইল নম্বর <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="+880 1XXX XXXXXX অথবা আন্তর্জাতিক নম্বর"
              />
            </div>

            <div>
              <label htmlFor="location" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                ঠিকানা/অবস্থান <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="শহর, দেশ (যেমন: ঢাকা, বাংলাদেশ)"
              />
            </div>

            <div>
              <label htmlFor="donationType" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                অনুদানের ধরণ <span className="text-red-500">*</span>
              </label>
              <select
                id="donationType"
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors bg-white bangla-text"
              >
                <option value="">অনুদানের ধরণ নির্বাচন করুন</option>
                {donationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="currency" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                মুদ্রা <span className="text-red-500">*</span>
              </label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors bg-white"
              >
                <option value="BDT">BDT (বাংলাদেশি টাকা)</option>
                <option value="USD">USD (US Dollar)</option>
              </select>
            </div>

            <div>
              <label htmlFor="amount" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                পরিমাণ ({formData.currency}) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                  {formData.currency}
                </span>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={(e) => {
                    const formatted = formatAmount(e.target.value);
                    setFormData((prev) => ({ ...prev, amount: formatted }));
                  }}
                  required
                  className="w-full pl-16 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                  placeholder="অনুদানের পরিমাণ লিখুন"
                />
              </div>
              {formData.amount && (
                <p className="bangla-text mt-2 text-sm text-gray-600">
                  পরিমাণ: {formData.currency} {parseFloat(formData.amount || "0").toLocaleString()}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="referenceNumber" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                {formData.currency === "BDT" ? "বিকাশ" : "Zelle"} ট্রানজ্যাকশন রেফারেন্স নম্বর{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="referenceNumber"
                name="referenceNumber"
                value={formData.referenceNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder={
                  formData.currency === "BDT"
                    ? "বিকাশ ট্রানজ্যাকশনের রেফারেন্স নম্বর লিখুন"
                    : "Zelle ট্রানজ্যাকশনের রেফারেন্স নম্বর লিখুন"
                }
              />
              <p className="bangla-text mt-2 text-xs text-gray-500">
                আপনার {formData.currency === "BDT" ? "বিকাশ" : "Zelle"} পেমেন্টের রিসিপ্টে যে রেফারেন্স নম্বর আছে সেটি লিখুন।
              </p>
            </div>

            <div>
              <label htmlFor="comments" className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                অতিরিক্ত মন্তব্য (ইচ্ছাধীন)
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors resize-none bangla-text"
                placeholder="কোনো বিশেষ নির্দেশনা বা মন্তব্য থাকলে এখানে লিখুন..."
              />
            </div>

            {error && (
              <div className="pt-4">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="bangla-text text-red-800 font-semibold mb-1">ত্রুটি</p>
                    <p className="text-red-700 text-sm whitespace-pre-line">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-islamic-green to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bangla-text"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    অনুদান পাঠানো হচ্ছে...
                  </>
                ) : (
                  <>
                    <Heart className="h-5 w-5 mr-2" />
                    অনুদান জমা দিন
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                <p className="bangla-text text-sm text-gray-600">
                  আপনার তথ্য নিরাপদ থাকবে এবং শুধুমাত্র অনুদান প্রক্রিয়া ও রসিদ পাঠানোর কাজে ব্যবহার করা হবে। আমরা আপনার
                  ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের সাথে শেয়ার করি না।
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function DonateFormBn() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-green mx-auto mb-4"></div>
            <p className="bangla-text text-gray-600">অনুদান ফরম লোড হচ্ছে...</p>
          </div>
        </div>
      }
    >
      <DonateFormContentBn />
    </Suspense>
  );
}

