import BaseLink from "@/components/BaseLink";
import { ArrowLeft, GraduationCap, UserCheck, Award } from "lucide-react";

export default function HifzProgramStudents() {
  // Sample data - replace with actual data from your database
  const activeStudents = [
    { name: "Md. Yusuf", age: 10, currentJuz: "Juz 5", admissionDate: "2023-01-15", guardian: "Md. Rahman", phone: "01712-345678" },
    { name: "Aminul Islam", age: 9, currentJuz: "Juz 8", admissionDate: "2023-03-20", guardian: "Md. Ali", phone: "01713-456789" },
    { name: "Md. Hamza", age: 11, currentJuz: "Juz 12", admissionDate: "2022-11-10", guardian: "Md. Karim", phone: "01714-567890" },
    { name: "Abdur Rahman", age: 10, currentJuz: "Juz 15", admissionDate: "2022-12-05", guardian: "Md. Hossain", phone: "01715-678901" },
    { name: "Md. Zubair", age: 12, currentJuz: "Juz 20", admissionDate: "2022-08-15", guardian: "Md. Islam", phone: "01716-789012" },
    { name: "Ibrahim Ali", age: 11, currentJuz: "Juz 25", admissionDate: "2022-09-20", guardian: "Md. Ahmed", phone: "01717-890123" },
    { name: "Md. Saad", age: 13, currentJuz: "Juz 28", admissionDate: "2022-06-10", guardian: "Md. Salam", phone: "01718-901234" },
  ];

  const completedStudents = [
    { name: "Md. Hafizur Rahman", completionDate: "2023-06-15", completionYear: "2023", guardian: "Md. Salam", phone: "01718-901234" },
    { name: "Abdullah Al Mamun", completionDate: "2023-07-20", completionYear: "2023", guardian: "Md. Rahim", phone: "01719-012345" },
    { name: "Md. Hafiz Ahmed", completionDate: "2023-05-10", completionYear: "2023", guardian: "Md. Naser", phone: "01720-123456" },
    { name: "Ibrahim Hossain", completionDate: "2023-08-25", completionYear: "2023", guardian: "Md. Farid", phone: "01721-234567" },
    { name: "Md. Hafiz Ali", completionDate: "2022-12-15", completionYear: "2022", guardian: "Md. Karim", phone: "01722-345678" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/students"
            className="inline-flex items-center text-islamic-green hover:text-islamic-dark transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Students
          </BaseLink>
          <div className="flex items-center space-x-3 mb-2">
            <GraduationCap className="h-8 w-8 text-teal-700" />
            <h1 className="text-4xl font-bold text-gray-900">Hifz Program Students</h1>
          </div>
          <p className="text-gray-600">Qur'an Memorization Program</p>
        </div>

        {/* Active Students Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center mb-6 pb-3 border-b-2 border-teal-700">
            <UserCheck className="h-6 w-6 mr-3 text-teal-700" />
            <h2 className="text-2xl font-semibold text-gray-900">Active Students</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-teal-700 to-islamic-dark text-white">
                  <th className="px-6 py-4 text-left font-semibold w-16">#</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Age</th>
                  <th className="px-6 py-4 text-left font-semibold">Current Juz</th>
                  <th className="px-6 py-4 text-left font-semibold">Admission Date</th>
                  <th className="px-6 py-4 text-left font-semibold">Guardian</th>
                  <th className="px-6 py-4 text-left font-semibold">Contact</th>
                </tr>
              </thead>
              <tbody>
                {activeStudents.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.age} years</td>
                    <td className="px-6 py-4 text-gray-600">{student.currentJuz}</td>
                    <td className="px-6 py-4 text-gray-600">{student.admissionDate}</td>
                    <td className="px-6 py-4 text-gray-600">{student.guardian}</td>
                    <td className="px-6 py-4">
                      <a
                        href={`tel:${student.phone.replace(/\s/g, "")}`}
                        className="text-teal-700 hover:text-teal-900 font-medium transition-colors"
                      >
                        {student.phone}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Completed Students Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex items-center mb-6 pb-3 border-b-2 border-islamic-green">
            <Award className="h-6 w-6 mr-3 text-islamic-green" />
            <h2 className="text-2xl font-semibold text-gray-900">Completed Students (Hafiz-ul-Qur'an)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-islamic-green to-teal-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold w-16">#</th>
                  <th className="px-6 py-4 text-left font-semibold">Name</th>
                  <th className="px-6 py-4 text-left font-semibold">Completion Date</th>
                  <th className="px-6 py-4 text-left font-semibold">Completion Year</th>
                  <th className="px-6 py-4 text-left font-semibold">Guardian</th>
                  <th className="px-6 py-4 text-left font-semibold">Contact</th>
                </tr>
              </thead>
              <tbody>
                {completedStudents.map((student, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-500 font-medium">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.completionDate}</td>
                    <td className="px-6 py-4 text-gray-600">{student.completionYear}</td>
                    <td className="px-6 py-4 text-gray-600">{student.guardian}</td>
                    <td className="px-6 py-4">
                      <a
                        href={`tel:${student.phone.replace(/\s/g, "")}`}
                        className="text-islamic-green hover:text-islamic-dark font-medium transition-colors"
                      >
                        {student.phone}
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

