import BaseLink from "@/components/BaseLink";
import { ArrowLeft, Phone } from "lucide-react";

export default function StandingCommitteePage() {
  const members = [
    {
      name: "Md. Shahnewaz Zaman (Shanto)",
      designation: "Head",
      mobile: "+1 (917) 561-6554",
    },
    {
      name: "Md. Shahadat Hossain (Selim)",
      designation: "Honorable Member",
      mobile: "+968 97423851",
    },
    {
      name: "Md. Fakhrulzzaman (Rana)",
      designation: "Honorable Member",
      mobile: "01731-348383",
    },
    {
      name: "Md. Saidul Islam (Suman)",
      designation: "Honorable Member",
      mobile: "01771-555987",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-islamic-green hover:text-islamic-dark transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </BaseLink>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Standing Committee</h1>
          <p className="text-gray-600">Organizational structure and leadership</p>
        </div>

        {/* Members Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-islamic-green">
            Committee Members
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-islamic-green to-teal-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold w-16">#</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Designation</th>
                  <th className="px-6 py-4 text-left font-semibold">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{member.name}</td>
                    <td className="px-6 py-4 text-gray-600">{member.designation}</td>
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

