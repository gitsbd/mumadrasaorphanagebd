import { Heart, DollarSign, Users, BookOpen, Shield, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

export default function Donate() {
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

  const useOfFunds = [
    "Orphan housing, meals, and education",
    "Staff salaries and teacher compensation",
    "Educational materials and resources",
    "Medical care and health services",
    "Institutional development and maintenance",
    "Religious and educational projects",
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
      info: "Contact us for mobile banking numbers",
    },
    {
      title: "In-Person Donation",
      details: "Visit our institution to make a direct donation",
      info: "Kaya Kori (Baligange Bazar), Nakla, Sherpur",
    },
    {
      title: "Online Payment",
      details: "Secure online payment gateway (coming soon)",
      info: "We are working on implementing online payment options",
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Your Support Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Madinatul Uloom Madrasa & Orphanage is a non-profit institution dedicated to providing free
                  Islamic and moral education to orphans and underprivileged children. Your donations directly
                  impact the lives of these children by providing:
                </p>
                <ul className="space-y-3">
                  {useOfFunds.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Impact of Your Donation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <span className="text-gray-700">BDT 1,000</span>
                    <span className="text-islamic-green font-semibold">1 Student Monthly Meals</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <span className="text-gray-700">BDT 3,000</span>
                    <span className="text-islamic-green font-semibold">1 Student Monthly Education</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <span className="text-gray-700">BDT 4,000 - 5,000</span>
                    <span className="text-islamic-green font-semibold">1 Student Monthly Expenses (Including everything)</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <span className="text-gray-700">BDT 8,000</span>
                    <span className="text-islamic-green font-semibold">Yearly Complete Uniform & Supplies</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                    <span className="text-gray-700">BDT 20,000</span>
                    <span className="text-islamic-green font-semibold">1 Student Yearly Sponsorship</span>
                  </div>
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
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className={`bg-gradient-to-r ${type.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{type.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donation Methods */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Donation Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationMethods.map((method, idx) => (
                <div key={idx} className="border-2 border-gray-200 rounded-lg p-6 hover:border-islamic-green transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-gray-700 mb-2">{method.details}</p>
                  <p className="text-sm text-gray-600 italic">{method.info}</p>
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

