"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Heart, DollarSign, CheckCircle, Phone, Mail, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

function DonateFormContent() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    donationType: "",
    currency: "BDT",
    amount: searchParams?.get("amount") || "",
    referenceNumber: "",
    comments: "",
  });

  const donationTypes = [
    "Zakat & Sadaqah",
    "Monthly Sponsorship",
    "Educational Support",
    "Waqf & Endowment",
    "Orphan Housing Support",
    "Meals and Daily Nutrition",
    "Islamic and General Education",
    "Staff Salaries and Teachers' Compensation",
    "Educational Materials",
    "Medical Care & Health Services",
    "Infrastructure Development",
    "Mosque Construction & Maintenance",
    "Electricity & Lighting",
    "Prayer Equipment",
    "Madrasa and Mosque Carpeting",
    "Plants & Trees",
    "Water Supply",
    "Monthly Food Supply",
    "Prayer Rugs & Religious Clothing",
    "Solar Panels",
    "Islamic Learning Kits",
    "General Donation",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/API
    // For now, we'll just show the success message
    console.log("Donation Form Data:", formData);
    setIsSubmitted(true);
  };

  const formatAmount = (value: string) => {
    // Remove non-numeric characters except decimal point
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
              <h1 className="text-4xl font-bold mb-4 text-gray-900">Thank You for Your Donation!</h1>
              <p className="text-xl text-gray-700">
                Your contribution will make a significant difference in the lives of our students.
              </p>
            </div>

            <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6 mb-6 border-2 border-islamic-green/20">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Donation Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Name:</span>
                  <span className="text-gray-900 font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Donation Type:</span>
                  <span className="text-gray-900 font-semibold">{formData.donationType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Amount:</span>
                  <span className="text-islamic-green font-bold text-xl">{formData.currency} {parseFloat(formData.amount || "0").toLocaleString()}</span>
                </div>
                {formData.referenceNumber && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Reference Number:</span>
                    <span className="text-gray-900 font-semibold">{formData.referenceNumber}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-8 text-white mb-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                Complete Your Payment
              </h2>
              <p className="text-lg mb-6 text-teal-100">
                Please complete your donation using one of the following methods:
              </p>

              <div className="space-y-6">
                {/* bKash Payment */}
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Mobile Banking (bKash)
                  </h3>
                  <div className="space-y-2">
                    <p className="text-teal-100">Send your donation via bKash to:</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <a
                        href="tel:+8801728014014"
                        className="text-2xl font-bold hover:text-teal-200 transition-colors"
                      >
                        +880 17 2801 4014
                      </a>
                    </div>
                    <p className="text-sm text-teal-100 mt-2">
                      Please include your name in the reference/note field when sending.
                    </p>
                  </div>
                </div>

                {/* Zelle Payment */}
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Zelle Payment
                  </h3>
                  <div className="space-y-2">
                    <p className="text-teal-100">Send your donation via Zelle to:</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <a
                        href="tel:+19175616554"
                        className="text-2xl font-bold hover:text-teal-200 transition-colors"
                      >
                        +1 (917) 561-6554
                      </a>
                    </div>
                    <p className="text-sm text-teal-100 mt-2">
                      Please include your name and donation type in the memo field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">What Happens Next?</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You will receive a confirmation email at the provided contact information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Our team will verify your payment and send you a receipt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your donation will be allocated according to your selected donation type</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center bg-islamic-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Donate Page
              </Link>
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
                className="inline-flex items-center justify-center bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Submit Another Donation
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
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/donate"
            className="inline-flex items-center text-islamic-green hover:text-teal-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Donate Page
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Donation Form</h1>
          <p className="text-lg text-gray-700">
            Please fill out the form below to complete your donation. All information is secure and confidential.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="+880 1XXX XXXXXX or +1 (XXX) XXX-XXXX"
              />
            </div>

            {/* Location/Address */}
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                Location/Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="City, Country (e.g., Dhaka, Bangladesh)"
              />
            </div>

            {/* Donation Type */}
            <div>
              <label htmlFor="donationType" className="block text-sm font-semibold text-gray-700 mb-2">
                Donation Type <span className="text-red-500">*</span>
              </label>
              <select
                id="donationType"
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors bg-white"
              >
                <option value="">Select a donation type</option>
                {donationTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Currency Selection */}
            <div>
              <label htmlFor="currency" className="block text-sm font-semibold text-gray-700 mb-2">
                Currency <span className="text-red-500">*</span>
              </label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors bg-white"
              >
                <option value="BDT">BDT (Bangladeshi Taka)</option>
                <option value="USD">USD (US Dollar)</option>
              </select>
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                Amount ({formData.currency}) <span className="text-red-500">*</span>
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
                  placeholder="Enter amount"
                />
              </div>
              {formData.amount && (
                <p className="mt-2 text-sm text-gray-600">
                  Amount: {formData.currency} {parseFloat(formData.amount || "0").toLocaleString()}
                </p>
              )}
            </div>

            {/* Reference Number (bKash or Zelle) */}
            <div>
              <label htmlFor="referenceNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                {formData.currency === "BDT" ? "bKash" : "Zelle"} Reference Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="referenceNumber"
                name="referenceNumber"
                value={formData.referenceNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder={formData.currency === "BDT" ? "Enter bKash transaction reference number" : "Enter Zelle transaction reference number"}
              />
              <p className="mt-2 text-xs text-gray-500">
                Please enter the transaction reference number from your {formData.currency === "BDT" ? "bKash" : "Zelle"} payment.
              </p>
            </div>

            {/* Comments */}
            <div>
              <label htmlFor="comments" className="block text-sm font-semibold text-gray-700 mb-2">
                Comments (Optional)
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors resize-none"
                placeholder="Any additional information or special instructions..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-islamic-green to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Heart className="h-5 w-5 mr-2" />
                Submit Donation
              </button>
            </div>

            {/* Security Note */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Your information is secure and will only be used for donation processing and receipt purposes.
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function DonateForm() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading donation form...</p>
        </div>
      </div>
    }>
      <DonateFormContent />
    </Suspense>
  );
}

