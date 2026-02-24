"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, BookOpen, GraduationCap, User, Phone, Mail, Calendar, MapPin, Users, CheckCircle, AlertCircle, Printer, Download, X } from "lucide-react";
import { APPS_SCRIPT_URLS } from "@/config/apps-script-urls";

const PROGRAM_LABELS: Record<string, string> = {
  noorani: "Noorani Program - Modern & Integrated Curriculum",
  hifz: "Hifz Program - Qur'an Memorization Program",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ApplicationForm() {
  const searchParams = useSearchParams();
  const previewRef = useRef<HTMLDivElement>(null);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

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

  const handlePreview = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = (e.target as HTMLElement).closest("form");
    if (form && form.reportValidity()) {
      setError(null);
      setShowPreview(true);
    }
  };

  const getPreviewHtml = () => {
    const d = formData;
    const esc = (v: string) => escapeHtml(v || "—");
    const program = PROGRAM_LABELS[d.programType] || d.programType || "—";
    const nameParts = (d.studentName || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "—";
    const lastName = nameParts.slice(1).join(" ") || "—";
    return `
      <div class="form-page">
        <h1 class="form-title">Student Registration Form</h1>

        <p class="section-label">Name of the Applicant:</p>
        <div class="two-fields">
          <span class="field-box">${esc(firstName)}</span>
          <span class="field-box">${esc(lastName)}</span>
        </div>
        <div class="hints-row two"><span>First Name</span><span>Last Name</span></div>

        <p class="section-label">Date of Birth:</p>
        <div class="three-fields">
          <span class="field-box small">—</span>
          <span class="field-box small">—</span>
          <span class="field-box small">—</span>
        </div>
        <div class="hints-row three"><span>MM</span><span>DD</span><span>YY</span></div>

        <p class="section-label">Age:</p>
        <div class="one-field"><span class="field-box">${esc(d.studentAge)}</span></div>

        <p class="section-label">Grade / Program:</p>
        <div class="one-field"><span class="field-box">${escapeHtml(program)}</span></div>

        <p class="section-label">Previous Education:</p>
        <div class="one-field"><span class="field-box">${esc(d.previousEducation)}</span></div>

        <h2 class="banner">Parent's Information:</h2>
        <table class="parent-table">
          <tr><td class="td-label">Father's Name</td><td class="field-box">${esc(d.fatherName)}</td></tr>
          <tr><td class="td-label">Father's Email &amp; Phone No.</td><td class="field-box">${esc(d.guardianPhone)} ${esc(d.guardianEmail)}</td></tr>
          <tr><td class="td-label">Mother's Name</td><td class="field-box">${esc(d.motherName)}</td></tr>
          <tr><td class="td-label">Guardian's Name</td><td class="field-box">${esc(d.guardianName)}</td></tr>
          <tr><td class="td-label">Relation to Student</td><td class="field-box">${esc(d.guardianRelation)}</td></tr>
          <tr><td class="td-label">Guardian's Email &amp; Phone No.</td><td class="field-box">${esc(d.guardianPhone)} ${esc(d.guardianEmail)}</td></tr>
        </table>

        <h2 class="banner">Residential Address:</h2>
        <div class="address-box">${escapeHtml(d.address || "—").replace(/\n/g, "<br>")}</div>

        <p class="section-label">Preferred Admission Date:</p>
        <div class="one-field"><span class="field-box">${esc(d.admissionDate)}</span></div>
        ${d.specialNotes ? `<p class="section-label">Special Notes:</p><div class="address-box">${esc(d.specialNotes)}</div>` : ""}

        <h2 class="banner">Terms and Conditions:</h2>
        <ol class="terms-list">
          <li>I/we certify that the above information provided by me/us is correct.</li>
          <li>I undertake to submit all the documents in original for verification.</li>
        </ol>

        <p class="signature-line">Signature and Date</p>
      </div>
    `;
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head><title>Student Registration Form</title>
        <style>
          * { box-sizing: border-box; }
          body { font-family: system-ui, sans-serif; color: #333; margin: 0; padding: 20px 32px; background: #fff; }
          .form-page { max-width: 700px; margin: 0 auto; padding: 24px 28px; min-height: 100vh; }
          .form-title { text-align: center; font-size: 1.5rem; font-weight: bold; margin: 0 0 20px 0; color: #111; }
          .section-label { font-weight: 600; color: #374151; margin: 14px 0 6px 0; font-size: 0.95rem; }
          .field-box { display: inline-block; border: 1px solid #d1d5db; padding: 6px 10px; min-height: 28px; min-width: 120px; background: #fff; }
          .field-box.small { min-width: 48px; text-align: center; }
          .two-fields { display: flex; gap: 12px; margin-top: 4px; }
          .two-fields .field-box { flex: 1; }
          .three-fields { display: flex; gap: 8px; margin-top: 4px; }
          .three-fields .field-box { width: 56px; }
          .one-field { margin-top: 4px; }
          .one-field .field-box { width: 100%; max-width: 320px; }
          .hints-row { font-size: 0.75rem; color: #6b7280; margin: 2px 0 0 0; display: flex; gap: 12px; }
          .hints-row.two span { flex: 1; }
          .hints-row.three span { flex: 1; text-align: center; }
          .hints-row.three span:last-child { text-align: right; }
          .hints-row.three span:first-child { text-align: left; }
          .banner { background: #1e3a5f; color: #fff; margin: 18px 0 10px 0; padding: 8px 12px; font-size: 1rem; font-weight: 600; }
          .parent-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
          .parent-table .td-label { font-weight: 600; color: #374151; padding: 6px 8px 6px 0; vertical-align: top; width: 42%; }
          .parent-table .field-box { width: 100%; }
          .address-box { border: 1px solid #d1d5db; padding: 10px 12px; min-height: 72px; background: #fff; margin-top: 4px; }
          .terms-list { margin: 8px 0 0 12px; padding: 0; }
          .terms-list li { margin: 6px 0; }
          .signature-line { text-align: right; margin-top: 28px; font-weight: 600; color: #374151; }
        </style>
        </head>
        <body>${getPreviewHtml()}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const handleDownloadPdf = async () => {
    if (!previewRef.current) return;
    setIsGeneratingPdf(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const ratio = Math.min((pageW - 20) / canvas.width, (pageH - 20) / canvas.height) * 0.95;
      const w = canvas.width * ratio;
      const h = canvas.height * ratio;
      pdf.addImage(imgData, "PNG", 10, 10, w, h);
      pdf.save(`application-${formData.studentName || "student"}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError("Failed to generate PDF. You can use Print and choose 'Save as PDF' instead.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const scriptUrl = APPS_SCRIPT_URLS.STUDENT_APPLICATION;
      
      if (!scriptUrl || scriptUrl.trim() === '') {
        throw new Error("Apps Script URL is not configured. Please add NEXT_PUBLIC_APPLICATION_SCRIPT_URL to your .env.local file and restart the development server.");
      }

      // Ensure URL ends with /exec (required for Google Apps Script web apps)
      const finalUrl = scriptUrl.endsWith('/exec') ? scriptUrl : scriptUrl.replace(/\/dev$/, '/exec');

      console.log('Submitting to:', finalUrl);
      console.log('Form data:', formData);

      // Use fetch with no-cors mode for Google Apps Script
      // This bypasses CORS but we can't read the response
      // The Apps Script will still process the request
      await fetch(finalUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // With no-cors mode, we can't verify the response
      // But if no error was thrown, assume success
      // The Apps Script will process the request and send email
      setSubmitted(true);
      setShowPreview(false);

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
    } catch (err) {
      console.error("Error submitting application:", err);
      
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
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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

                {/* Error Message */}
                {error && (
                  <div className="border-t pt-6">
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start mb-4">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-800 font-semibold mb-1">Error</p>
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Preview & Submit */}
                <div className="border-t pt-6">
                  <button
                    type="button"
                    onClick={handlePreview}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-islamic-green to-teal-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-islamic-green transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    Preview Application & Submit
                  </button>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    You will see a preview to print or download as PDF, then submit.
                  </p>
                </div>
              </form>

              {/* Preview modal: view as PDF, print, download, then submit */}
              {showPreview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 print:hidden">
                  <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                      <h3 className="text-lg font-semibold text-gray-900">Review your application</h3>
                      <button
                        type="button"
                        onClick={() => setShowPreview(false)}
                        className="p-2 rounded-lg hover:bg-gray-200 text-gray-600"
                        aria-label="Close"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="overflow-auto p-6 flex-1">
                      <div
                        ref={previewRef}
                        className="application-preview bg-white text-gray-900 rounded-lg"
                        style={{
                          maxWidth: 700,
                          margin: "0 auto",
                          padding: "24px 28px",
                          minHeight: 400,
                        }}
                      >
                        <h1 className="text-center text-xl font-bold mb-5 text-gray-900">
                          Student Registration Form
                        </h1>

                        <p className="text-sm font-semibold text-gray-700 mt-3 mb-1">Name of the Applicant:</p>
                        <div className="flex gap-3 mt-1">
                          <span className="flex-1 border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded">
                            {formData.studentName ? formData.studentName.trim().split(/\s+/)[0] || "—" : "—"}
                          </span>
                          <span className="flex-1 border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded">
                            {formData.studentName ? formData.studentName.trim().split(/\s+/).slice(1).join(" ") || "—" : "—"}
                          </span>
                        </div>
                        <div className="flex gap-3 text-xs text-gray-500 mt-0.5">
                          <span className="flex-1">First Name</span>
                          <span className="flex-1 text-right">Last Name</span>
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mt-4 mb-1">Date of Birth:</p>
                        <div className="flex gap-2 mt-1">
                          <span className="w-14 border border-gray-300 px-2 py-2 bg-white text-center rounded">—</span>
                          <span className="w-14 border border-gray-300 px-2 py-2 bg-white text-center rounded">—</span>
                          <span className="w-14 border border-gray-300 px-2 py-2 bg-white text-center rounded">—</span>
                        </div>
                        <div className="flex gap-2 text-xs text-gray-500 mt-0.5">
                          <span className="w-14 text-center">MM</span>
                          <span className="w-14 text-center">DD</span>
                          <span className="w-14 text-center">YY</span>
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mt-4 mb-1">Age:</p>
                        <div className="mt-1">
                          <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-xs w-full">
                            {formData.studentAge || "—"}
                          </span>
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mt-4 mb-1">Grade / Program:</p>
                        <div className="mt-1">
                          <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-md w-full">
                            {PROGRAM_LABELS[formData.programType] || formData.programType || "—"}
                          </span>
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mt-4 mb-1">Previous Education:</p>
                        <div className="mt-1">
                          <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-md w-full">
                            {formData.previousEducation || "—"}
                          </span>
                        </div>

                        <h2 className="bg-[#1e3a5f] text-white text-sm font-semibold mt-5 mb-2 px-3 py-2 rounded">
                          Parent&apos;s Information:
                        </h2>
                        <table className="w-full text-sm border-collapse">
                          <tbody>
                            <tr><td className="font-semibold text-gray-700 py-1.5 pr-2 align-top w-[42%]">Father&apos;s Name</td><td className="border border-gray-300 px-3 py-2 bg-white rounded">{formData.fatherName || "—"}</td></tr>
                            <tr><td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">Father&apos;s Email &amp; Phone No.</td><td className="border border-gray-300 px-3 py-2 bg-white rounded">{formData.guardianPhone || "—"} {formData.guardianEmail || "—"}</td></tr>
                            <tr><td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">Mother&apos;s Name</td><td className="border border-gray-300 px-3 py-2 bg-white rounded">{formData.motherName || "—"}</td></tr>
                            <tr><td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">Guardian&apos;s Name</td><td className="border border-gray-300 px-3 py-2 bg-white rounded">{formData.guardianName || "—"}</td></tr>
                            <tr><td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">Relation to Student</td><td className="border border-gray-300 px-3 py-2 bg-white rounded">{formData.guardianRelation || "—"}</td></tr>
                            <tr><td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">Guardian&apos;s Email &amp; Phone No.</td><td className="border border-gray-300 px-3 py-2 bg-white rounded">{formData.guardianPhone || "—"} {formData.guardianEmail || "—"}</td></tr>
                          </tbody>
                        </table>

                        <h2 className="bg-[#1e3a5f] text-white text-sm font-semibold mt-5 mb-2 px-3 py-2 rounded">
                          Residential Address:
                        </h2>
                        <div className="border border-gray-300 px-3 py-3 bg-white min-h-[80px] rounded whitespace-pre-wrap text-sm">
                          {formData.address || "—"}
                        </div>

                        <p className="text-sm font-semibold text-gray-700 mt-4 mb-1">Preferred Admission Date:</p>
                        <div className="mt-1">
                          <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-xs w-full">
                            {formData.admissionDate || "—"}
                          </span>
                        </div>
                        {formData.specialNotes && (
                          <>
                            <p className="text-sm font-semibold text-gray-700 mt-4 mb-1">Special Notes:</p>
                            <div className="border border-gray-300 px-3 py-3 bg-white rounded text-sm mt-1">{formData.specialNotes}</div>
                          </>
                        )}

                        <h2 className="bg-[#1e3a5f] text-white text-sm font-semibold mt-5 mb-2 px-3 py-2 rounded">
                          Terms and Conditions:
                        </h2>
                        <ol className="list-decimal list-inside text-sm text-gray-700 mt-1 space-y-1 ml-1">
                          <li>I/we certify that the above information provided by me/us is correct.</li>
                          <li>I undertake to submit all the documents in original for verification.</li>
                        </ol>

                        <p className="text-right font-semibold text-gray-700 mt-8">Signature and Date</p>
                      </div>
                    </div>
                    <div className="p-4 border-t bg-gray-50 flex flex-wrap gap-3 justify-center">
                      <button
                        type="button"
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
                      >
                        <Printer className="h-5 w-5" /> Print
                      </button>
                      <button
                        type="button"
                        onClick={handleDownloadPdf}
                        disabled={isGeneratingPdf}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50"
                      >
                        <Download className="h-5 w-5" /> {isGeneratingPdf ? "Generating…" : "Download PDF"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowPreview(false);
                          handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                        }}
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-islamic-green to-teal-700 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-islamic-green disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                            Submitting…
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
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

