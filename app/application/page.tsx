"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, BookOpen, GraduationCap, User, Phone, Mail, Calendar, MapPin, Users, CheckCircle } from "lucide-react";

function ApplicationForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    programType: "",
    studentName: "",
    studentAge: "",
    fatherName: "",
    motherName: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    guardianEmail: "",
    address: "",
    previousEducation: "",
    admissionDate: "",
    specialNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const program = searchParams.get("program");
    if (program === "noorani" || program === "hifz") {
      setFormData((prev) => ({
        ...prev,
        programType: program,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Application submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        programType: "",
        studentName: "",
        studentAge: "",
        fatherName: "",
        motherName: "",
        guardianName: "",
        guardianRelation: "",
        guardianPhone: "",
        guardianEmail: "",
        address: "",
        previousEducation: "",
        admissionDate: "",
        specialNotes: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Student Application</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Enroll now for admission to our Islamic educational programs
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Application Submitted Successfully!</h2>
              <p className="text-lg text-gray-700">
                Thank you for your application. We will review it and contact you soon.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Type Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <GraduationCap className="h-5 w-5 inline mr-2 text-islamic-green" />
                    Student Type Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="programType"
                    value={formData.programType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent bg-white text-gray-900 font-medium"
                  >
                    <option value="">Select a program...</option>
                    <option value="noorani">Noorani Program - Modern & Integrated Curriculum</option>
                    <option value="hifz">Hifz Program - Qur'an Memorization Program</option>
                  </select>
                  {formData.programType === "noorani" && (
                    <div className="mt-3 p-4 bg-islamic-light rounded-lg border-l-4 border-islamic-green">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-islamic-green" />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">Noorani Program</p>
                          <p className="text-sm text-gray-600">Modern & Integrated Curriculum for ages 4-8</p>
                          {searchParams.get("level") && (
                            <p className="text-sm text-islamic-green font-medium mt-1">
                              Selected Level: Level {searchParams.get("level")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {formData.programType === "hifz" && (
                    <div className="mt-3 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-700">
                      <div className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-teal-700" />
                        <div>
                          <p className="font-semibold text-gray-900">Hifz Program</p>
                          <p className="text-sm text-gray-600">Qur'an Memorization Program for ages 6-15</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Student Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <User className="h-5 w-5 mr-2 text-islamic-green" />
                    Student Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Student Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="studentAge"
                        value={formData.studentAge}
                        onChange={handleChange}
                        required
                        min="4"
                        max="15"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-islamic-green" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Father's Name
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mother's Name
                      </label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Guardian's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Relation to Student <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Father, Mother, Uncle"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="h-4 w-4 inline mr-1 text-islamic-green" />
                        Guardian's Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="h-4 w-4 inline mr-1 text-islamic-green" />
                        Guardian's Email
                      </label>
                      <input
                        type="email"
                        name="guardianEmail"
                        value={formData.guardianEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="border-t pt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-1 text-islamic-green" />
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                  />
                </div>

                {/* Additional Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-islamic-green" />
                    Additional Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Previous Education
                      </label>
                      <input
                        type="text"
                        name="previousEducation"
                        value={formData.previousEducation}
                        onChange={handleChange}
                        placeholder="e.g., Class 3, Noorani Qaida"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Admission Date
                      </label>
                      <input
                        type="date"
                        name="admissionDate"
                        value={formData.admissionDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Notes or Requirements
                    </label>
                    <textarea
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional information you'd like to share..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-islamic-green to-teal-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-islamic-green transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    By submitting this form, you agree to our terms and conditions. We will contact you soon regarding the admission process.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function Application() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading application form...</p>
        </div>
      </div>
    }>
      <ApplicationForm />
    </Suspense>
  );
}

