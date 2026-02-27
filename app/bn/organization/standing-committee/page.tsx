import BaseLink from "@/components/BaseLink";
import { ArrowLeft, Phone } from "lucide-react";

export default function StandingCommitteePageBn() {
  const members = [
    { name: "Md. Shahnewaz Zaman (Shanto)", designation: "সভাপতি", mobile: "+1 (917) 561-6554" },
    { name: "Md. Shahadat Hossain (Selim)", designation: "মাননীয় সদস্য", mobile: "+968 97423851" },
    { name: "Md. Fakhrulzzaman (Rana)", designation: "মাননীয় সদস্য", mobile: "01731-348383" },
    { name: "Md. Saidul Islam (Suman)", designation: "মাননীয় সদস্য", mobile: "01771-555987" },
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
          <h1 className="bangla-text text-4xl font-bold text-gray-900 mb-2">স্ট্যান্ডিং কমিটি</h1>
          <p className="bangla-text text-gray-600">সংগঠন কাঠামো ও নেতৃত্ব</p>
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
                      <a
                        href={`tel:${member.mobile.replace(/\s/g, "")}`}
                        className="text-islamic-green hover:text-islamic-dark font-medium transition-colors flex items-center space-x-2"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{member.mobile}</span>
                      </a>
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
