import BaseLink from "@/components/BaseLink";
import { ArrowLeft, Phone } from "lucide-react";

export default function AdvisoryCommitteePageBn() {
  const members = [
    { name: "A. Salam Sorkar", designation: "সভাপতি", mobile: "01745-117570" },
    { name: "Md. Jahirur Rahman", designation: "মাননীয় সদস্য", mobile: "01784-865193" },
    { name: "Md. Nawab Ali", designation: "মাননীয় সদস্য", mobile: "01921-557116" },
    { name: "Md. Rezaul Karim", designation: "মাননীয় সদস্য", mobile: "01714-775689" },
    { name: "Md. Mofiz Uddin", designation: "মাননীয় সদস্য", mobile: "01739-294455" },
    { name: "Md. Mojlu Mia", designation: "মাননীয় সদস্য", mobile: "N/A" },
    { name: "Md. Selim Mia", designation: "মাননীয় সদস্য", mobile: "01911-204337" },
    { name: "Md. Nurul Islam", designation: "মাননীয় সদস্য", mobile: "01739-533324" },
    { name: "Md. Mofizul Islam Mofi", designation: "মাননীয় সদস্য", mobile: "01786-281472" },
    { name: "Md. Ahmed Ali", designation: "মাননীয় সদস্য", mobile: "01724-158587" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <BaseLink
            href="/bn"
            className="inline-flex items-center text-islamic-green hover:text-islamic-dark transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="bangla-text">হোমে ফিরে যান</span>
          </BaseLink>
          <h1 className="bangla-text text-4xl font-bold text-gray-900 mb-2">পরামর্শক কমিটি</h1>
          <p className="bangla-text text-gray-600">পরামর্শ ও কৌশলগত দিকনির্দেশনা</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="bangla-text text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-islamic-green">
            কমিটি সদস্যবৃন্দ
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-islamic-green to-teal-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold w-16 bangla-text">#</th>
                  <th className="px-6 py-4 text-left font-semibold bangla-text">নাম</th>
                  <th className="px-6 py-4 text-left font-semibold bangla-text">পদবী</th>
                  <th className="px-6 py-4 text-left font-semibold bangla-text">মোবাইল</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{member.name}</td>
                    <td className="px-6 py-4 text-gray-600 bangla-text">{member.designation}</td>
                    <td className="px-6 py-4">
                      {member.mobile !== "N/A" ? (
                        <a
                          href={`tel:${member.mobile.replace(/\s/g, "")}`}
                          className="text-islamic-green hover:text-islamic-dark font-medium transition-colors flex items-center space-x-2"
                        >
                          <Phone className="h-4 w-4" />
                          <span>{member.mobile}</span>
                        </a>
                      ) : (
                        <span className="bangla-text text-gray-400 italic">মোবাইল নম্বর উল্লেখ নেই</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
