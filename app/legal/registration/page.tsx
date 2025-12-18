import { FileCheck, Building2, Shield, Award, CheckCircle, FileText } from "lucide-react";

export default function Registration() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FileCheck className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Registration & Compliance</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Legal registration and compliance information as per Bangladesh government regulations
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Institution Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Building2 className="h-8 w-8 mr-3 text-islamic-green" />
              Institution Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p><strong>Full Name:</strong> Madinatul Uloom Madrasa & Orphanage</p>
              </div>
              <div>
                <p><strong>Type:</strong> Non-Profit Islamic Educational and Charitable Institution</p>
              </div>
              <div>
                <p><strong>Location:</strong> Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh</p>
              </div>
              <div>
                <p><strong>Email:</strong>{" "}
                  <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p><strong>Executive Director:</strong> Md. Shahnewaz Zaman (Shanto)</p>
              </div>
            </div>
          </div>

          {/* Registration Status */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <FileCheck className="h-8 w-8 mr-3 text-islamic-green" />
              Registration Status
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Madinatul Uloom Madrasa & Orphanage is registered and operates in compliance with Bangladesh government 
              regulations. The institution may be registered under one or more of the following authorities:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-islamic-green pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Department of Social Welfare
                </h3>
                <p className="text-gray-700">
                  Registration under the Department of Social Welfare, Government of Bangladesh, for operating as a 
                  charitable institution and orphanage providing social welfare services.
                </p>
              </div>

              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Cooperative Department
                </h3>
                <p className="text-gray-700">
                  Registration under the Cooperative Department, Government of Bangladesh, if applicable for 
                  cooperative activities and community-based educational services.
                </p>
              </div>

              <div className="border-l-4 border-teal-700 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Islamic Foundation Bangladesh
                </h3>
                <p className="text-gray-700">
                  Registration or affiliation with Islamic Foundation Bangladesh for Islamic educational institutions 
                  and madrasas, ensuring compliance with Islamic education standards.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Framework */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-islamic-green" />
              Legal Framework
            </h2>
            <p className="text-gray-700 mb-6">
              Our institution operates under the following Bangladesh laws and regulations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900">Primary Legislation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Societies Registration Act</li>
                  <li>• Voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961</li>
                  <li>• Bangladesh Digital Security Act, 2018</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-gray-900">Relevant Regulations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Department of Social Welfare Guidelines</li>
                  <li>• Islamic Foundation Bangladesh Regulations</li>
                  <li>• Non-Profit Organization Compliance Rules</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Award className="h-8 w-8 mr-3 text-islamic-green" />
              Compliance Standards
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Financial Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Maintain accurate financial records as required by Bangladesh law</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Annual financial reporting to relevant government authorities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Transparent accounting practices with oversight by Permanent Committee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compliance with tax regulations for non-profit organizations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Operational Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Adherence to educational standards set by relevant authorities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compliance with child protection and welfare regulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Regular reporting to oversight committees and government bodies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Maintenance of proper documentation and records</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Protection Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Compliance with Bangladesh Digital Security Act, 2018</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Protection of personal information of students, donors, and staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Secure handling of financial and personal data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Governance Structure */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Governance Structure</h2>
            <p className="text-gray-700 mb-6">
              Our institution operates under a structured governance system in compliance with Bangladesh regulations:
            </p>
            <div className="space-y-4">
              <div className="bg-islamic-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Permanent Committee</h3>
                <p className="text-gray-700">
                  The highest policy-making and supervisory body, ensuring compliance with legal requirements and 
                  institutional objectives.
                </p>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Executive Committee</h3>
                <p className="text-gray-700">
                  Responsible for day-to-day operations, financial management, and ensuring adherence to all applicable 
                  laws and regulations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Advisory Committee</h3>
                <p className="text-gray-700">
                  Provides guidance on legal compliance, best practices, and institutional development.
                </p>
              </div>
            </div>
          </div>

          {/* Annual Reporting */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Annual Reporting</h2>
            <p className="text-gray-700 mb-4">
              As a registered non-profit organization, we are required to submit annual reports to relevant government 
              authorities, including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                <span>Annual financial statements and audit reports</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                <span>Activity reports detailing programs and services provided</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                <span>Compliance certificates and renewal documents</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-islamic-green mr-3 mt-0.5 flex-shrink-0" />
                <span>Student enrollment and educational progress reports</span>
              </li>
            </ul>
          </div>

          {/* Contact for Verification */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Verification and Inquiries</h2>
            <p className="text-gray-700 mb-4">
              For verification of our registration status or compliance inquiries, please contact:
            </p>
            <div className="space-y-2 text-gray-700 mb-6">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>Address:</strong> Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh</p>
              <p><strong>Executive Director:</strong> Md. Shahnewaz Zaman (Shanto)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Official registration documents and compliance certificates are available for 
                review upon request. We maintain transparency in all our operations and welcome inquiries from 
                government authorities, donors, and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

