"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, CheckCircle, ArrowLeft, Shield, Mail, Phone, MapPin, Upload, Briefcase, AlertCircle } from "lucide-react";
import Link from "next/link";
import { APPS_SCRIPT_URLS } from "@/config/apps-script-urls";

function CareerApplyContent() {
  const searchParams = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: searchParams?.get("position") || "",
    education: "",
    experience: "",
    certifications: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const positions = [
    "Qur'an Teacher (Hifz)",
    "Noorani Program Teacher",
    "Islamic Studies Teacher",
    "General Education Teacher",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const scriptUrl = APPS_SCRIPT_URLS.CAREER_APPLICATION;
      
      if (!scriptUrl || scriptUrl.trim() === '') {
        throw new Error("Apps Script URL is not configured. Please add NEXT_PUBLIC_CAREER_SCRIPT_URL to your .env.local file and restart the development server.");
      }

      // Ensure URL ends with /exec (required for Google Apps Script web apps)
      const finalUrl = scriptUrl.endsWith('/exec') ? scriptUrl : scriptUrl.replace(/\/dev$/, '/exec');

      // Convert file to base64 if present
      let resumeBase64 = '';
      let resumeFileName = '';
      let resumeMimeType = '';
      
      if (formData.resume) {
        resumeFileName = formData.resume.name;
        resumeMimeType = formData.resume.type || '';
        
        // Check file size (limit to 10MB to avoid issues)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (formData.resume.size > maxSize) {
          throw new Error(`File size (${(formData.resume.size / 1024 / 1024).toFixed(2)}MB) exceeds the maximum allowed size of 10MB. Please compress your file or use a smaller file.`);
        }
        
        // Determine MIME type if not detected
        if (!resumeMimeType) {
          const fileName = resumeFileName.toLowerCase();
          if (fileName.endsWith('.pdf')) {
            resumeMimeType = 'application/pdf';
          } else if (fileName.endsWith('.doc')) {
            resumeMimeType = 'application/msword';
          } else if (fileName.endsWith('.docx')) {
            resumeMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          } else {
            resumeMimeType = 'application/pdf'; // Default
          }
        }
        
        // Convert file to base64
        resumeBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            try {
              const result = reader.result as string;
              if (!result) {
                reject(new Error('Failed to read file'));
                return;
              }
              // Remove data URL prefix (e.g., "data:application/pdf;base64,")
              const base64 = result.split(',')[1];
              if (!base64) {
                reject(new Error('Failed to extract base64 data from file'));
                return;
              }
              console.log('File converted to base64. Size:', base64.length, 'characters');
              resolve(base64);
            } catch (err) {
              reject(err);
            }
          };
          reader.onerror = (error) => {
            console.error('FileReader error:', error);
            reject(new Error('Failed to read file: ' + error));
          };
          reader.readAsDataURL(formData.resume!);
        });
        
        if (!resumeBase64 || resumeBase64.length === 0) {
          throw new Error('Failed to convert file to base64');
        }
      }

      // Prepare form data including base64 file
      const submitData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        position: formData.position,
        education: formData.education,
        experience: formData.experience,
        certifications: formData.certifications,
        coverLetter: formData.coverLetter,
        resumeFileName: resumeFileName,
        resumeBase64: resumeBase64,
        resumeMimeType: resumeMimeType,
      };

      // Use fetch with no-cors mode for Google Apps Script
      // This bypasses CORS but we can't read the response
      // The Apps Script will still process the request
      await fetch(finalUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      // With no-cors mode, we can't verify the response
      // But if no error was thrown, assume success
      // The Apps Script will process the request and send email
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting career application:", err);
      
      let errorMessage = 'An error occurred while submitting the application. ';
      
      if (err instanceof TypeError) {
        if (err.message.includes('fetch')) {
          errorMessage = `Network error: ${err.message}. Please check:\n1. Your internet connection\n2. The Apps Script URL is correct (should end with /exec)\n3. The Apps Script is deployed with "Anyone" access\n4. Check browser console (F12) for more details`;
        } else {
          errorMessage = `Error: ${err.message}. Please check the browser console (F12) for details.`;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage += 'Please check the browser console (F12) for details.';
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">Application Submitted Successfully!</h1>
              <p className="text-xl text-gray-700">
                Thank you for your interest in joining our team. We have received your application.
              </p>
            </div>

            <div className="bg-gradient-to-br from-islamic-light to-white rounded-lg p-6 mb-6 border-2 border-islamic-green/20">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Application Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Name:</span>
                  <span className="text-gray-900 font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Position:</span>
                  <span className="text-gray-900 font-semibold">{formData.position}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Email:</span>
                  <span className="text-gray-900 font-semibold">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Phone:</span>
                  <span className="text-gray-900 font-semibold">{formData.phoneNumber}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">What Happens Next?</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Our HR team will review your application</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>If shortlisted, we will contact you via email or phone within 1-2 weeks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Selected candidates will be invited for an interview</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-islamic-green to-teal-700 rounded-lg p-6 text-white mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <a
                    href="mailto:mu.madrasaorphanage.bd@gmail.com"
                    className="hover:text-teal-200 transition-colors"
                  >
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+8801728018014" className="hover:text-teal-200 transition-colors">
                    +88 01728 018014
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm">Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career"
                className="inline-flex items-center justify-center bg-islamic-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Career Page
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    address: "",
                    position: "",
                    education: "",
                    experience: "",
                    certifications: "",
                    coverLetter: "",
                    resume: null,
                  });
                }}
                className="inline-flex items-center justify-center bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Submit Another Application
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
            href="/career"
            className="inline-flex items-center text-islamic-green hover:text-teal-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Career Page
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Career Application Form</h1>
          <p className="text-lg text-gray-700">
            Please fill out the form below to apply for a teaching position. All information is secure and confidential.
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

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="your.email@example.com"
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
                placeholder="+880 1XXX XXXXXX"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors"
                placeholder="City, District, Country"
              />
            </div>

            {/* Position */}
            <div>
              <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                Position Applied For <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors bg-white"
              >
                <option value="">Select a position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>

            {/* Education */}
            <div>
              <label htmlFor="education" className="block text-sm font-semibold text-gray-700 mb-2">
                Educational Qualifications <span className="text-red-500">*</span>
              </label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors resize-none"
                placeholder="List your educational qualifications, degrees, and certifications..."
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                Teaching Experience <span className="text-red-500">*</span>
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors resize-none"
                placeholder="Describe your teaching experience, years of experience, and relevant work history..."
              />
            </div>

            {/* Certifications */}
            <div>
              <label htmlFor="certifications" className="block text-sm font-semibold text-gray-700 mb-2">
                Certifications & Additional Qualifications
              </label>
              <textarea
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors resize-none"
                placeholder="Any additional certifications, training, or qualifications..."
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                Cover Letter <span className="text-red-500">*</span>
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-islamic-green focus:ring-2 focus:ring-islamic-green/20 outline-none transition-colors resize-none"
                placeholder="Tell us why you are interested in this position and how you can contribute to our mission..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                Resume/CV Upload <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex-1 cursor-pointer">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                  />
                  <div className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-islamic-green transition-colors flex items-center justify-center space-x-2">
                    <Upload className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      {formData.resume ? formData.resume.name : "Choose file (PDF, DOC, DOCX)"}
                    </span>
                  </div>
                </label>
              </div>
              {formData.resume && (
                <p className="mt-2 text-sm text-green-600 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  File selected: {formData.resume.name}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="pt-4">
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-semibold mb-1">Error</p>
                    <p className="text-red-700 text-sm whitespace-pre-line">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-islamic-green to-teal-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-islamic-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FileText className="h-5 w-5 mr-2" />
                    Submit Application
                  </>
                )}
              </button>
            </div>

            {/* Security Note */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Your information is secure and will only be used for recruitment purposes. We respect your privacy 
                  and will never share your information with third parties.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function CareerApply() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading application form...</p>
        </div>
      </div>
    }>
      <CareerApplyContent />
    </Suspense>
  );
}

