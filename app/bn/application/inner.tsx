"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  FileText,
  BookOpen,
  GraduationCap,
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  AlertCircle,
  Printer,
  Download,
  X,
} from "lucide-react";
import { APPS_SCRIPT_URLS } from "@/config/apps-script-urls";

const PROGRAM_LABELS_BN: Record<string, string> = {
  noorani: "নূরানী প্রোগ্রাম - আধুনিক ও সমন্বিত কারিকুলাম",
  hifz: "হিফজ প্রোগ্রাম - কুরআন হিফজ কোর্স",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default function ApplicationBnInner() {
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
    const program =
      PROGRAM_LABELS_BN[d.programType] || PROGRAM_LABELS_BN[d.programType] || d.programType || "—";
    const name = (d.studentName || "").trim() || "—";
    return `
      <div class="form-page">
        <h1 class="form-title">ভর্তি আবেদন ফরম (বাংলা)</h1>

        <p class="section-label">শিক্ষার্থীর নাম:</p>
        <div class="one-field"><span class="field-box">${esc(name)}</span></div>

        <p class="section-label">বয়স:</p>
        <div class="one-field"><span class="field-box">${esc(d.studentAge)}</span></div>

        <p class="section-label">কোর্স/প্রোগ্রাম:</p>
        <div class="one-field"><span class="field-box">${esc(program)}</span></div>

        <p class="section-label">পূর্ববর্তী শিক্ষাগত যোগ্যতা:</p>
        <div class="one-field"><span class="field-box">${esc(d.previousEducation)}</span></div>

        <h2 class="banner">অভিভাবকের তথ্য:</h2>
        <table class="parent-table">
          <tr><td class="td-label">পিতার নাম</td><td class="field-box">${esc(d.fatherName)}</td></tr>
          <tr><td class="td-label">মাতার নাম</td><td class="field-box">${esc(d.motherName)}</td></tr>
          <tr><td class="td-label">অভিভাবকের নাম</td><td class="field-box">${esc(d.guardianName)}</td></tr>
          <tr><td class="td-label">সম্পর্ক</td><td class="field-box">${esc(d.guardianRelation)}</td></tr>
          <tr><td class="td-label">মোবাইল নম্বর</td><td class="field-box">${esc(d.guardianPhone)}</td></tr>
          <tr><td class="td-label">ই-মেইল</td><td class="field-box">${esc(d.guardianEmail)}</td></tr>
        </table>

        <h2 class="banner">স্থায়ী ঠিকানা:</h2>
        <div class="address-box">${escapeHtml(d.address || "—").replace(/\n/g, "<br>")}</div>

        <p class="section-label">পছন্দের ভর্তি তারিখ:</p>
        <div class="one-field"><span class="field-box">${esc(d.admissionDate)}</span></div>
        ${
          d.specialNotes
            ? `<p class="section-label">বিশেষ মন্তব্য:</p><div class="address-box">${esc(
                d.specialNotes,
              )}</div>`
            : ""
        }

        <h2 class="banner">ঘোষণা:</h2>
        <ol class="terms-list">
          <li>উপরোক্ত সকল তথ্য আমার/আমাদের জ্ঞান ও বিশ্বাস অনুযায়ী সঠিক।</li>
          <li>প্রয়োজনে যাচাইয়ের জন্য প্রয়োজনীয় কাগজপত্র মূল কপি প্রদর্শন করতে সম্মত আছি।</li>
        </ol>

        <p class="signature-line">অভিভাবকের স্বাক্ষর ও তারিখ</p>
      </div>
    `;
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head><title>ভর্তি ফরম (বাংলা)</title>
        <style>
          * { box-sizing: border-box; }
          body { font-family: system-ui, sans-serif; color: #333; margin: 0; padding: 20px 32px; background: #fff; }
          .form-page { max-width: 700px; margin: 0 auto; padding: 24px 28px; min-height: 100vh; }
          .form-title { text-align: center; font-size: 1.5rem; font-weight: bold; margin: 0 0 20px 0; color: #111; }
          .section-label { font-weight: 600; color: #374151; margin: 14px 0 6px 0; font-size: 0.95rem; }
          .field-box { display: inline-block; border: 1px solid #d1d5db; padding: 6px 10px; min-height: 28px; min-width: 120px; background: #fff; }
          .one-field { margin-top: 4px; }
          .one-field .field-box { width: 100%; max-width: 360px; }
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
      const ratio =
        Math.min((pageW - 20) / canvas.width, (pageH - 20) / canvas.height) * 0.95;
      const w = canvas.width * ratio;
      const h = canvas.height * ratio;
      pdf.addImage(imgData, "PNG", 10, 10, w, h);
      pdf.save(`application-bn-${formData.studentName || "student"}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      setError(
        "PDF তৈরি করা সম্ভব হয়নি। দয়া করে প্রিন্ট অপশন ব্যবহার করে 'Save as PDF' নির্বাচন করুন।",
      );
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

      if (!scriptUrl || scriptUrl.trim() === "") {
        throw new Error(
          "Apps Script URL কনফিগার করা নেই। অনুগ্রহ করে NEXT_PUBLIC_APPLICATION_SCRIPT_URL সেট করুন।",
        );
      }

      const finalUrl = scriptUrl.endsWith("/exec")
        ? scriptUrl
        : scriptUrl.replace(/\/dev$/, "/exec");

      await fetch(finalUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, language: "bn" }),
      });

      setSubmitted(true);
      setShowPreview(false);

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
      let errorMessage =
        "আবেদন সাবমিট করার সময় একটি ত্রুটি হয়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।";

      if (err instanceof Error) {
        errorMessage += ` বিস্তারিত: ${err.message}`;
      }

      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
            <h2 className="bangla-text text-3xl font-bold mb-4 text-gray-900">
              আবেদন সফলভাবে জমা হয়েছে!
            </h2>
            <p className="bangla-text text-lg text-gray-700">
              জাযাকুমুল্লাহু খাইরান। আপনার আবেদনের তথ্য আমরা পেয়েছি। ইনশা আল্লাহ শীঘ্রই আপনাদের সাথে যোগাযোগ করা হবে।
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h1 className="bangla-text text-5xl font-bold mb-4">ভর্তি আবেদন ফরম</h1>
          <p className="bangla-text text-xl text-teal-100 max-w-3xl mx-auto">
            আমাদের নূরানী ও হিফজ প্রোগ্রামে ভর্তি হতে নিচের ফরমটি সঠিকভাবে পূরণ করুন।
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="bangla-text text-3xl font-bold mb-6 text-gray-900">
              আবেদন ফরম (বাংলা)
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Student Type Category */}
              <div>
                <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                  <GraduationCap className="h-5 w-5 inline mr-2 text-islamic-green" />
                  প্রোগ্রাম নির্বাচন করুন <span className="text-red-500">*</span>
                </label>
                <select
                  name="programType"
                  value={formData.programType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent bg-white text-gray-900 font-medium bangla-text"
                >
                  <option value="">একটি প্রোগ্রাম নির্বাচন করুন...</option>
                  <option value="noorani">{PROGRAM_LABELS_BN.noorani}</option>
                  <option value="hifz">{PROGRAM_LABELS_BN.hifz}</option>
                </select>
                {formData.programType === "noorani" && (
                  <div className="mt-3 p-4 bg-islamic-light rounded-lg border-l-4 border-islamic-green">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-islamic-green" />
                      <div className="flex-1 bangla-text">
                        <p className="font-semibold text-gray-900">নূরানী প্রোগ্রাম</p>
                        <p className="text-sm text-gray-600">
                          ৪–৮ বছর বয়সী শিশুদের জন্য ভিত্তিমূলক কুরআন ও সাধারণ শিক্ষা
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {formData.programType === "hifz" && (
                  <div className="mt-3 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-700">
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-teal-700" />
                      <div className="bangla-text">
                        <p className="font-semibold text-gray-900">হিফজ প্রোগ্রাম</p>
                        <p className="text-sm text-gray-600">
                          ৬–১৫ বছর বয়সী শিশুদের জন্য পূর্ণ কুরআন হিফজ কোর্স
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Student Information */}
              <div className="border-t pt-6">
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-islamic-green" />
                  শিক্ষার্থীর তথ্য
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      শিক্ষার্থীর পূর্ণ নাম <span className="text-red-500">*</span>
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
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      বয়স (বছর) <span className="text-red-500">*</span>
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
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-islamic-green" />
                  অভিভাবকের তথ্য
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      পিতার নাম
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
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      মাতার নাম
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
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      অভিভাবকের নাম <span className="text-red-500">*</span>
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
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      সম্পর্ক <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="guardianRelation"
                      value={formData.guardianRelation}
                      onChange={handleChange}
                      required
                      placeholder="যেমন: পিতা, মাতা, চাচা"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1 text-islamic-green" />
                      মোবাইল নম্বর <span className="text-red-500">*</span>
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
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-1 text-islamic-green" />
                      ই-মেইল (যদি থাকে)
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
                <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-1 text-islamic-green" />
                  স্থায়ী ঠিকানা <span className="text-red-500">*</span>
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
                <h3 className="bangla-text text-xl font-semibold mb-4 text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-islamic-green" />
                  অতিরিক্ত তথ্য
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      পূর্ববর্তী শিক্ষাগত অবস্থা
                    </label>
                    <input
                      type="text"
                      name="previousEducation"
                      value={formData.previousEducation}
                      onChange={handleChange}
                      placeholder="যেমন: ক্লাস ৩, নূরানী কায়দা শেষ, ইত্যাদি"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                      পছন্দের ভর্তি তারিখ
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
                  <label className="bangla-text block text-sm font-semibold text-gray-700 mb-2">
                    বিশেষ মন্তব্য বা প্রয়োজন (যদি থাকে)
                  </label>
                  <textarea
                    name="specialNotes"
                    value={formData.specialNotes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="যেমন: স্বাস্থ্যগত বিশেষ প্রয়োজন, খাদ্য অ্যালার্জি ইত্যাদি..."
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
                      <p className="bangla-text text-red-800 font-semibold mb-1">
                        একটি ত্রুটি পাওয়া গেছে
                      </p>
                      <p className="bangla-text text-red-700 text-sm whitespace-pre-line">
                        {error}
                      </p>
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
                  className="w-full bg-gradient-to-r from-islamic-green to-teal-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-islamic-green transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center bangla-text"
                >
                  ভর্তি ফরম প্রিভিউ ও সাবমিট করুন
                </button>
                <p className="bangla-text text-sm text-gray-600 mt-4 text-center">
                  সাবমিট করার আগে আপনি প্রিভিউ দেখে প্রিন্ট বা PDF ডাউনলোড করতে পারবেন।
                </p>
              </div>
            </form>

            {/* Preview modal */}
            {showPreview && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 print:hidden">
                <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                    <h3 className="bangla-text text-lg font-semibold text-gray-900">
                      আপনার আবেদনটি যাচাই করুন
                    </h3>
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
                      <h1 className="bangla-text text-center text-xl font-bold mb-5 text-gray-900">
                        ভর্তি আবেদন ফরম (বাংলা)
                      </h1>

                      <p className="bangla-text text-sm font-semibold text-gray-700 mt-3 mb-1">
                        শিক্ষার্থীর নাম:
                      </p>
                      <div className="mt-1">
                        <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-md w-full">
                          {formData.studentName || "—"}
                        </span>
                      </div>

                      <p className="bangla-text text-sm font-semibold text-gray-700 mt-4 mb-1">
                        বয়স:
                      </p>
                      <div className="mt-1">
                        <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-xs w-full">
                          {formData.studentAge || "—"}
                        </span>
                      </div>

                      <p className="bangla-text text-sm font-semibold text-gray-700 mt-4 mb-1">
                        প্রোগ্রাম:
                      </p>
                      <div className="mt-1">
                        <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-md w-full">
                          {PROGRAM_LABELS_BN[formData.programType] ||
                            formData.programType ||
                            "—"}
                        </span>
                      </div>

                      <p className="bangla-text text-sm font-semibold text-gray-700 mt-4 mb-1">
                        পূর্ববর্তী শিক্ষাগত অবস্থা:
                      </p>
                      <div className="mt-1">
                        <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-md w-full">
                          {formData.previousEducation || "—"}
                        </span>
                      </div>

                      <h2 className="bangla-text bg-[#1e3a5f] text-white text-sm font-semibold mt-5 mb-2 px-3 py-2 rounded">
                        অভিভাবকের তথ্য:
                      </h2>
                      <table className="w-full text-sm border-collapse bangla-text">
                        <tbody>
                          <tr>
                            <td className="font-semibold text-gray-700 py-1.5 pr-2 align-top w-[42%]">
                              পিতার নাম
                            </td>
                            <td className="border border-gray-300 px-3 py-2 bg-white rounded">
                              {formData.fatherName || "—"}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">
                              মাতার নাম
                            </td>
                            <td className="border border-gray-300 px-3 py-2 bg-white rounded">
                              {formData.motherName || "—"}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">
                              অভিভাবকের নাম
                            </td>
                            <td className="border border-gray-300 px-3 py-2 bg-white rounded">
                              {formData.guardianName || "—"}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">
                              সম্পর্ক
                            </td>
                            <td className="border border-gray-300 px-3 py-2 bg-white rounded">
                              {formData.guardianRelation || "—"}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold text-gray-700 py-1.5 pr-2 align-top">
                              মোবাইল নম্বর
                            </td>
                            <td className="border border-gray-300 px-3 py-2 bg-white rounded">
                              {formData.guardianPhone || "—"}
                            </td>
                          </tr>
                          <tr>
                            <td className="font-semibold text-gray-700 py-1.5 প্র-2 align-top">
                              ই-মেইল
                            </td>
                            <td className="border border-gray-300 px-3 py-2 bg-white rounded">
                              {formData.guardianEmail || "—"}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <h2 className="bangla-text bg-[#1e3a5f] text-white text-sm font-semibold mt-5 mb-2 px-3 py-2 rounded">
                        স্থায়ী ঠিকানা:
                      </h2>
                      <div className="bangla-text border border-gray-300 px-3 py-3 bg-white min-h-[80px] rounded whitespace-pre-wrap text-sm">
                        {formData.address || "—"}
                      </div>

                      <p className="bangla-text text-sm font-semibold text-gray-700 mt-4 mb-1">
                        পছন্দের ভর্তি তারিখ:
                      </p>
                      <div className="mt-1">
                        <span className="inline-block border border-gray-300 px-3 py-2 bg-white min-h-[36px] rounded max-w-xs w-full">
                          {formData.admissionDate || "—"}
                        </span>
                      </div>

                      {formData.specialNotes && (
                        <>
                          <p className="bangla-text text-sm font-semibold text-gray-700 mt-4 mb-1">
                            বিশেষ মন্তব্য:
                          </p>
                          <div className="bangla-text border border-gray-300 px-3 py-3 bg-white rounded text-sm mt-1">
                            {formData.specialNotes}
                          </div>
                        </>
                      )}

                      <h2 className="bangla-text bg-[#1e3a5f] text-white text-sm font-semibold mt-5 mb-2 px-3 py-2 rounded">
                        ঘোষণাসমূহ:
                      </h2>
                      <ol className="bangla-text list-decimal list-inside text-sm text-gray-700 mt-1 space-y-1 ml-1">
                        <li>উপরোক্ত সকল তথ্য আমার/আমাদের জ্ঞান ও বিশ্বাস অনুযায়ী সঠিক।</li>
                        <li>যাচাইয়ের প্রয়োজনে প্রয়োজনীয় কাগজপত্র মূল কপি প্রদর্শন করতে সম্মত আছি।</li>
                      </ol>

                      <p className="bangla-text text-right font-semibold text-gray-700 mt-8">
                        অভিভাবকের স্বাক্ষর ও তারিখ
                      </p>
                    </div>
                  </div>
                  <div className="p-4 border-t bg-gray-50 flex flex-wrap gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 bangla-text"
                    >
                      <Printer className="h-5 w-5" /> প্রিন্ট করুন
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadPdf}
                      disabled={isGeneratingPdf}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50 bangla-text"
                    >
                      <Download className="h-5 w-5" />{" "}
                      {isGeneratingPdf ? "PDF তৈরি হচ্ছে..." : "PDF ডাউনলোড"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowPreview(false);
                        handleSubmit({ preventDefault: () => {} } as React.FormEvent);
                      }}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-islamic-green to-teal-700 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-islamic-green disabled:opacity-50 bangla-text"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                          সাবমিট হচ্ছে...
                        </>
                      ) : (
                        "ফরম সাবমিট করুন"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

