import BaseLink from "@/components/BaseLink";
import { ArrowLeft, Phone } from "lucide-react";

export default function ExecutiveCommitteePage() {
  const executiveMembers = [
    {
      name: "Md. Shahnewaz Zaman (Shanto)",
      designation: "Executive Director",
      mobile: "+1 (917) 651-6554",
    },
    {
      name: "Md. Monirul Islam",
      designation: "President",
      mobile: "01728-014014",
    },
    {
      name: "Md. Salehin Maruf",
      designation: "Vice President",
      mobile: "01790-388477",
    },
    {
      name: "Md. Fazlur Rahman",
      designation: "Vice President",
      mobile: "01317-244684",
    },
    {
      name: "Abu Salim Sujon",
      designation: "General Secretary",
      mobile: "01791-206098",
    },
    {
      name: "Md. Rifat Mia",
      designation: "Joint General Secretary",
      mobile: "01732-195296",
    },
    {
      name: "Nur Alam",
      designation: "Treasurer",
      mobile: "01885-420204",
    },
  ];

  const honorableMembers = [
    { name: "Md. Touhidur Rahman Lion", mobile: "01775-838283" },
    { name: "Md. Al-Amin", mobile: "01711-375730" },
    { name: "Md. Sadikur Rahman Shyamal", mobile: "01916-590108" },
    { name: "Md. Parvez Mosharaf", mobile: "01710-259033" },
    { name: "Md. Firoz Mia", mobile: "01911-157351" },
    { name: "Md. Kazi Gafur", mobile: "01755-151314" },
    { name: "Md. Al-Amin", mobile: "01515-280147" },
    { name: "Abu Raihan", mobile: "01757-944453" },
    { name: "Md. Robiul Ahmed", mobile: "01926-794050" },
    { name: "Md. Masud Rana", mobile: "01723-346070" },
    { name: "Md. Jahangir Alam Sohag", mobile: "01733-292025" },
    { name: "Md. Abdullah Al Mamun (Sujon)", mobile: "01824-088611" },
    { name: "Md. Zakaria Islam", mobile: "01716-795917" },
    { name: "Md. Masum Mia", mobile: "01719-295111" },
    { name: "Md. Nazmul Mia", mobile: "01780-806380" },
    { name: "Md. Limon Mia", mobile: "01926-132131" },
    { name: "Md. Uzzal Mia", mobile: "01724-449244" },
    { name: "Md. Nazmul Mia", mobile: "01948-208816" },
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Executive Committee</h1>
          <p className="text-gray-600">Reference: Executive Committee | Date: 11 March 2025</p>
        </div>

        {/* Executive Members Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-islamic-green">
            Executive Members
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
                {executiveMembers.map((member, index) => (
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

        {/* Honorable Members Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-islamic-green">
            Honorable Members
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-islamic-green to-teal-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold w-16">#</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {honorableMembers.map((member, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{member.name}</td>
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

