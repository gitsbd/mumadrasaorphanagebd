"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Printer, Download } from "lucide-react";

export default function StudentAdmissionFormBanglaPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (!formRef.current) return;
    setIsGeneratingPdf(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const { jsPDF } = await import("jspdf");

      const canvas = await html2canvas(formRef.current, {
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
      pdf.save("student-admission-form-bn.pdf");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 print:bg-white">
      <div className="max-w-4xl mx-auto mb-6 flex justify-end gap-3 print:hidden">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50"
        >
          <Printer className="h-4 w-4" />
          ফরম প্রিন্ট করুন
        </button>
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={isGeneratingPdf}
          className="inline-flex items-center gap-2 px-4 py-2 bg-islamic-green text-white rounded-lg text-sm font-medium shadow-sm hover:bg-teal-700 disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          {isGeneratingPdf ? "পিডিএফ তৈরি হচ্ছে..." : "পিডিএফ ডাউনলোড করুন"}
        </button>
      </div>

      <div
        ref={formRef}
        className="bg-white max-w-3xl mx-auto shadow-md border border-gray-300 px-8 py-10 text-gray-900 print:shadow-none print:border-0"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="Madinatul Uloom Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold bangla-text">মাদিনাতুল উলূম</p>
              <p className="text-xs text-gray-600 bangla-text">মাদ্রাসা ও এতিমখানা</p>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8 bangla-text">শিক্ষার্থী ভর্তি ফরম</h1>

        {/* Name of Applicant */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1 bangla-text">আবেদনকারীর নাম:</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-300 h-9" />
            <div className="border border-gray-300 h-9" />
          </div>
          <div className="grid grid-cols-2 text-xs text-gray-500 mt-1 bangla-text">
            <span>প্রথম নাম</span>
            <span className="text-right">শেষ নাম</span>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <p className="font-semibold text-sm mb-1 bangla-text">জন্ম তারিখ:</p>
          <div className="flex gap-3 items-center">
            <div className="flex gap-2">
              <div className="w-12 border border-gray-300 h-9" />
              <div className="w-12 border border-gray-300 h-9" />
              <div className="w-12 border border-gray-300 h-9" />
            </div>
          </div>
          <div className="flex gap-2 text-xs text-gray-500 mt-1 bangla-text">
            <span className="w-12 text-center">মাস</span>
            <span className="w-12 text-center">দিন</span>
            <span className="w-12 text-center">বছর</span>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1 bangla-text">লিঙ্গ:</p>
          <div className="flex items-center gap-6 text-sm bangla-text">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>পুরুষ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>মহিলা</span>
            </div>
          </div>
        </div>

        {/* Grade */}
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1 bangla-text">শ্রেণি:</p>
          <div className="border border-gray-300 h-9" />
        </div>

        {/* Languages spoken */}
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1 bangla-text">কথ্য ভাষা:</p>
          <div className="border border-gray-300 h-9" />
        </div>

        {/* Siblings */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1 bangla-text">সহোদরের তথ্য:</p>
          <div className="border border-gray-300 h-9 mb-1 flex items-center text-xs text-gray-500 px-2 bangla-text">১.</div>
          <div className="border border-gray-300 h-9 flex items-center text-xs text-gray-500 px-2 bangla-text">২.</div>
        </div>

        {/* Parent's Information */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-2 bangla-text">অভিভাবকের তথ্য:</p>
          <table className="w-full text-xs border border-gray-300 bangla-text">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 w-1/3">বাবার নাম</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">বাবার শিক্ষাগত যোগ্যতা</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">বাবার ইমেইল ও ফোন নম্বর</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">বাবার পেশা</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">মায়ের নাম</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">মায়ের শিক্ষাগত যোগ্যতা</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">মায়ের ইমেইল ও ফোন নম্বর</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">মায়ের পেশা</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
            </tbody>
          </table>
        </div>

        {/* Address */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1 bangla-text">ঠিকানা:</p>
          <div className="bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1 mb-1 bangla-text">স্থায়ী ঠিকানা:</div>
          <div className="border border-gray-300 h-20" />
        </div>

        {/* Payment Details */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1 bangla-text">পেমেন্টের বিবরণ</p>
          <div className="flex items-center gap-6 text-sm bangla-text mt-1">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>নগদ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>চেক</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>কার্ড</span>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-10">
          <div className="bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1 mb-1 bangla-text">
            শর্তাবলী:
          </div>
          <div className="border border-gray-300 px-3 py-2 text-xs leading-relaxed bangla-text">
            <ol className="list-decimal list-inside space-y-1">
              <li>আমি/আমরা নিশ্চিত করছি যে উপরোক্ত তথ্য সঠিক।</li>
              <li>মূল কাগজপত্র যাচাইয়ের জন্য জমা দিতে আমি/আমরা অঙ্গীকার করছি।</li>
            </ol>
          </div>
        </div>

        {/* Signature */}
        <div className="flex justify-end mt-12">
          <div className="text-xs text-gray-700 text-right bangla-text">
            <div className="border-t border-gray-400 w-40 mb-1" />
            <span>স্বাক্ষর ও তারিখ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

