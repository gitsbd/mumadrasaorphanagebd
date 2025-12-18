"use client";

import { Heart, DollarSign, Users, BookOpen, Shield, CheckCircle, Mail, Phone, Home, Utensils, GraduationCap, UserCircle, FileText, Stethoscope, Wrench, Building2, Lightbulb, Volume2, TreePine, Droplets, ShoppingCart, Shirt, Sun, BookMarked } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Donate() {
  const [customAmount, setCustomAmount] = useState("");
  const donationTypes = [
    {
      icon: Heart,
      title: "Zakat & Sadaqah",
      description: "Your Zakat and Sadaqah contributions directly support orphan education, housing, and daily needs.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Monthly Sponsorship",
      description: "Sponsor an orphan's monthly expenses including food, education, clothing, and medical care.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: BookOpen,
      title: "Educational Support",
      description: "Contribute to educational materials, teacher salaries, and facility improvements.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Waqf & Endowment",
      description: "Long-term contributions and endowments that ensure sustainable support for the institution.",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const yourDonationsSupport = [
    { icon: Home, text: "Orphan Housing – Safe and clean residential facilities" },
    { icon: Utensils, text: "Meals and Daily Nutrition – Three meals a day, snacks, and clean drinking water" },
    { icon: BookOpen, text: "Islamic and General Education – Including Qur'an, Arabic, Bangla, English, Math, etc." },
    { icon: UserCircle, text: "Staff Salaries and Teachers' Compensation" },
    { icon: FileText, text: "Educational Materials – Books, notebooks, pens, blackboards, etc." },
    { icon: Stethoscope, text: "Medical Care & Health Services – Basic health checkups and emergency needs" },
    { icon: Wrench, text: "Infrastructure Development – Classrooms, toilets, kitchen, boundary wall" },
    { icon: Building2, text: "Mosque Construction & Maintenance" },
  ];

  const utilityEssentials = [
    { icon: Lightbulb, text: "Electricity & Lighting (bulbs, ceiling fans, solar systems)" },
    { icon: Volume2, text: "Prayer Equipment (Azan microphones, speaker systems, digital prayer clocks)" },
    { icon: Shield, text: "Madrasa and Mosque Carpeting" },
    { icon: TreePine, text: "Plants & Trees for shade, beauty, and sustainability" },
    { icon: Droplets, text: "Water Supply (motor, tank, filter system)" },
    { icon: ShoppingCart, text: "Monthly Food Supply for students and staff" },
    { icon: Shirt, text: "Prayer Rugs (Janamaz) and Religious Clothing (Topi, Panjabi)" },
    { icon: Sun, text: "Solar Panels to reduce electricity bills and promote sustainability" },
    { icon: BookMarked, text: "Islamic Learning Kits (Qaida, Juz Amma, Noorani books, etc.)" },
  ];

  const donationMethods = [
    {
      title: "Bank Transfer",
      details: "Direct bank transfer to our official account",
      info: "Contact us for bank account details",
    },
    {
      title: "Mobile Banking",
      details: "bKash, Nagad, Rocket, or other mobile banking services",
      info: "+880 17 2801 4014",
      phone: "+8801728014014",
    },
    {
      title: "Zelle Payment",
      details: "Send donations via Zelle payment service",
      info: "+1 (917) 561-6554",
      phone: "+19175616554",
    },
    {
      title: "In-Person Donation",
      details: "Visit our institution to make a direct donation",
      info: "Kaya Kori (Baligange Bazar), Nakla, Sherpur",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Your generosity helps us provide education, care, and hope to orphaned and underprivileged children
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Your Support Matters</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <strong>Madinatul Uloom Madrasa & Orphanage</strong> is a non-profit Islamic educational institution committed to offering{" "}
                <strong>free Qur'anic, moral, and general education</strong> to <strong>orphans and underprivileged children</strong> in Bangladesh. 
                Your <strong>donation is more than charity</strong>—it is an investment in a child's future and a means of ongoing{" "}
                <em>Sadaqah Jariyah (continuous charity)</em>.
              </p>
            </div>

            {/* Your Donations Support */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-islamic-green" />
                Your Donations Support:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {yourDonationsSupport.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start p-4 bg-islamic-light rounded-lg hover:bg-gray-50 transition-colors">
                      <Icon className="h-5 w-5 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Utility & Religious Essentials */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-teal-700" />
                Utility & Religious Essentials:
              </h3>
              <p className="text-gray-700 mb-4 italic">
                Your support also helps us cover vital daily needs and religious resources, including:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {utilityEssentials.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start p-3 bg-teal-50 rounded-lg border border-teal-100">
                      <Icon className="h-4 w-4 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* A Lasting Impact */}
            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                A Lasting Impact
              </h3>
              <p className="text-lg mb-4 leading-relaxed">
                Each contribution, no matter how small, helps us sustain this <strong>sacred mission</strong> of shaping young lives through Islamic education, love, and dignity.
              </p>
              <div className="bg-white/10 rounded-lg p-4 border-l-4 border-white">
                <p className="text-lg italic">
                  Sponsor a child, build a mosque, donate a fan, or help buy a Qur'an—every donation brings reward, both in this world and the hereafter.
                </p>
              </div>
            </div>
          </div>

          {/* Impact of Your Donation - Separate Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Impact of Your Donation</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">BDT 1,000</span>
                      <span className="text-islamic-green font-semibold">1 Student Monthly Meals</span>
                    </div>
                    <Link
                      href="/donate/form?amount=1000"
                      className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Donate Now
                    </Link>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">BDT 3,000</span>
                      <span className="text-islamic-green font-semibold">1 Student Monthly Education</span>
                    </div>
                    <Link
                      href="/donate/form?amount=3000"
                      className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Donate Now
                    </Link>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">BDT 4,000 - 5,000</span>
                      <span className="text-islamic-green font-semibold">1 Student Monthly Expenses (Including everything)</span>
                    </div>
                    <Link
                      href="/donate/form?amount=4500"
                      className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Donate Now
                    </Link>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">BDT 8,000</span>
                      <span className="text-islamic-green font-semibold">Yearly Complete Uniform & Supplies</span>
                    </div>
                    <Link
                      href="/donate/form?amount=8000"
                      className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Donate Now
                    </Link>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-700 font-semibold">BDT 20,000</span>
                      <span className="text-islamic-green font-semibold">1 Student Yearly Sponsorship</span>
                    </div>
                    <Link
                      href="/donate/form?amount=20000"
                      className="inline-flex items-center text-sm bg-islamic-green text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Donate Now
                    </Link>
                  </div>
                </div>
            </div>
          </div>

          {/* Donate Any Amount */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Donate Any Amount</h3>
                <p className="text-lg text-gray-700">
                  Every contribution makes a difference. Enter your desired amount and support our mission.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-8 border-2 border-islamic-green/20">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 w-full">
                    <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Enter Amount (BDT)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
                        BDT
                      </span>
                      <input
                        type="number"
                        id="amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        min="1"
                        className="w-full pl-16 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none text-lg font-semibold"
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-auto">
                    <Link
                      href={customAmount && parseFloat(customAmount) > 0 ? `/donate/form?amount=${customAmount}` : "/donate/form"}
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-islamic-green to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Heart className="h-5 w-5 mr-2" />
                      Donate Now
                    </Link>
                  </div>
                </div>
                
                {customAmount && parseFloat(customAmount) > 0 && (
                  <div className="mt-6 p-4 bg-islamic-green/10 rounded-lg border border-islamic-green/30">
                    <p className="text-center text-gray-700">
                      <span className="font-semibold text-islamic-green">BDT {parseFloat(customAmount).toLocaleString()}</span>
                      {" "}will help support our students and mission. Thank you for your generosity!
                    </p>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    <Shield className="h-4 w-4 inline mr-1 text-islamic-green" />
                    All donations are secure and directly support our educational programs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Ways to Donate</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col"
                  >
                    <div className={`bg-gradient-to-r ${type.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{type.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{type.description}</p>
                    <Link
                      href="/donate/form"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-islamic-green to-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Donate
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donation Methods */}
          <div id="donation-methods" className="bg-white rounded-xl shadow-lg p-8 mb-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Donation Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationMethods.map((method, idx) => (
                <div key={idx} className="border-2 border-gray-200 rounded-lg p-6 hover:border-islamic-green transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-gray-700 mb-2">{method.details}</p>
                  {method.phone ? (
                    <div className="flex items-center space-x-2 mt-2">
                      <Phone className="h-4 w-4 text-islamic-green" />
                      <a
                        href={`tel:${method.phone}`}
                        className="text-sm text-islamic-green hover:text-islamic-dark font-medium transition-colors"
                      >
                        {method.info}
                      </a>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600 italic">{method.info}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Donation */}
          <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-xl shadow-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="h-12 w-12 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
              <p className="text-xl mb-8 text-teal-100">
                Contact us to learn more about donation options, sponsorship programs, or to discuss how you can
                support our mission.
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:mu.madrasaorphanage.bd@gmail.com"
                    className="underline hover:text-teal-200"
                  >
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </p>
                <p className="text-lg">
                  <strong>Location:</strong> Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-islamic-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>

          {/* Transparency */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Transparency & Accountability</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Registered Institution</h3>
                <p className="text-gray-700">
                  Registered under Bangladesh Government regulations (Department of Social Welfare, Cooperative
                  Department, or Islamic Foundation Bangladesh)
                </p>
              </div>
              <div className="text-center p-6">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Financial Accountability</h3>
                <p className="text-gray-700">
                  All funds are managed transparently with proper oversight from the Permanent Committee and
                  Executive Committee
                </p>
              </div>
              <div className="text-center p-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-islamic-green" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Direct Impact</h3>
                <p className="text-gray-700">
                  Your donations directly support orphan care, education, and institutional development - no
                  administrative overhead
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

