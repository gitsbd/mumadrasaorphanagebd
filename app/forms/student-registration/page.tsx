"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Printer, Download } from "lucide-react";

export default function StudentRegistrationFormPage() {
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
      pdf.save("student-registration-form.pdf");
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
          Print Form
        </button>
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={isGeneratingPdf}
          className="inline-flex items-center gap-2 px-4 py-2 bg-islamic-green text-white rounded-lg text-sm font-medium shadow-sm hover:bg-teal-700 disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          {isGeneratingPdf ? "Generating PDF..." : "Download PDF"}
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
              <p className="text-sm font-semibold">Madinatul Uloom</p>
              <p className="text-xs text-gray-600">Madrasa &amp; Orphanage</p>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-8">Student Admission Form</h1>

        {/* Name of Applicant */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1">Name of the Applicant:</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-300 h-9" />
            <div className="border border-gray-300 h-9" />
          </div>
          <div className="grid grid-cols-2 text-xs text-gray-500 mt-1">
            <span>First Name</span>
            <span className="text-right">Last Name</span>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <p className="font-semibold text-sm mb-1">Date of Birth:</p>
          <div className="flex gap-3 items-center">
            <div className="flex gap-2">
              <div className="w-12 border border-gray-300 h-9" />
              <div className="w-12 border border-gray-300 h-9" />
              <div className="w-12 border border-gray-300 h-9" />
            </div>
          </div>
          <div className="flex gap-2 text-xs text-gray-500 mt-1">
            <span className="w-12 text-center">MM</span>
            <span className="w-12 text-center">DD</span>
            <span className="w-12 text-center">YY</span>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1">Gender:</p>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>Male</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>Female</span>
            </div>
          </div>
        </div>

        {/* Grade */}
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1">Grade:</p>
          <div className="border border-gray-300 h-9" />
        </div>

        {/* Languages spoken */}
        <div className="mb-3">
          <p className="font-semibold text-sm mb-1">Languages spoken:</p>
          <div className="border border-gray-300 h-9" />
        </div>

        {/* Siblings */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1">Details of Siblings:</p>
          <div className="border border-gray-300 h-9 mb-1 flex items-center text-xs text-gray-500 px-2">1.</div>
          <div className="border border-gray-300 h-9 flex items-center text-xs text-gray-500 px-2">2.</div>
        </div>

        {/* Parent's Information */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-2">Parent&apos;s Information:</p>
          <table className="w-full text-xs border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 w-1/3">Father&apos;s Name</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Father&apos;s Qualification</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Father&apos;s Email &amp; Phone No.</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Father&apos;s Occupation</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Mother&apos;s Name</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Mother&apos;s Qualification</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Mother&apos;s Email &amp; Phone No.</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Mother&apos;s Occupation</td>
                <td className="border border-gray-300 px-2 py-1" />
              </tr>
            </tbody>
          </table>
        </div>

        {/* Address */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1">Address:</p>
          <div className="bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1 mb-1">Residential Address:</div>
          <div className="border border-gray-300 h-20" />
        </div>

        {/* Payment Details */}
        <div className="mb-6">
          <p className="font-semibold text-sm mb-1">Payment Details</p>
          <div className="flex items-center gap-6 text-sm mt-1">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>Cash</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>Check</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 border border-gray-400" />
              <span>Card</span>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-10">
          <div className="bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1 mb-1">
            Terms and Conditions:
          </div>
          <div className="border border-gray-300 px-3 py-2 text-xs leading-relaxed">
            <ol className="list-decimal list-inside space-y-1">
              <li>I/we certify that the above information provided by me/us is correct.</li>
              <li>I undertake to submit all the documents in original for verification.</li>
            </ol>
          </div>
        </div>

        {/* Signature */}
        <div className="flex justify-end mt-12">
          <div className="text-xs text-gray-700 text-right">
            <div className="border-t border-gray-400 w-40 mb-1" />
            <span>Signature and Date</span>
          </div>
        </div>
      </div>
    </div>
  );
}

