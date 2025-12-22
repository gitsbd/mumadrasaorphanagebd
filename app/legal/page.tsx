import BaseLink from "@/components/BaseLink";
import { Shield, FileText, RefreshCw, AlertTriangle, FileCheck, Copyright, ArrowRight } from "lucide-react";

export default function LegalIndex() {
  const legalPages = [
    {
      href: "/legal/privacy-policy",
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information in compliance with Bangladesh Digital Security Act, 2018",
      icon: Shield,
      color: "from-blue-500 to-cyan-600",
    },
    {
      href: "/legal/terms",
      title: "Terms & Conditions",
      description: "Terms of use for our website and services, governed by Bangladesh laws and regulations",
      icon: FileText,
      color: "from-green-500 to-emerald-600",
    },
    {
      href: "/legal/refund-policy",
      title: "Refund Policy",
      description: "Policy regarding refunds for donations and contributions, compliant with Bangladesh non-profit regulations",
      icon: RefreshCw,
      color: "from-purple-500 to-indigo-600",
    },
    {
      href: "/legal/disclaimer",
      title: "Disclaimer",
      description: "Legal disclaimers regarding website content, services, and liability limitations",
      icon: AlertTriangle,
      color: "from-yellow-500 to-orange-600",
    },
    {
      href: "/legal/registration",
      title: "Registration & Compliance",
      description: "Legal registration status and compliance information as per Bangladesh government regulations",
      icon: FileCheck,
      color: "from-teal-500 to-cyan-600",
    },
    {
      href: "/legal/copyright",
      title: "Copyright Notice",
      description: "Intellectual property rights, usage guidelines, and copyright protection information",
      icon: Copyright,
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Legal Information</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Comprehensive legal documents and policies compliant with Bangladesh government regulations
          </p>
        </div>
      </section>

      {/* Legal Pages Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Legal Documents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All legal documents are prepared in compliance with Bangladesh laws and regulations, including the 
              Societies Registration Act, Digital Security Act, 2018, and Department of Social Welfare guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${page.color} p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-islamic-green transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{page.description}</p>
                  <div className="flex items-center text-islamic-green font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
                </BaseLink>
              );
            })}
          </div>

          {/* Compliance Notice */}
          <div className="mt-12 bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Compliance Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Madinatul Uloom Madrasa & Orphanage operates in full compliance with Bangladesh government regulations 
              and standards. Our legal documents are regularly reviewed and updated to ensure continued compliance with:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Government Regulations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Societies Registration Act</li>
                  <li>• Digital Security Act, 2018</li>
                  <li>• Voluntary Social Welfare Agencies Ordinance</li>
                  <li>• Department of Social Welfare Guidelines</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Standards & Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Islamic Foundation Bangladesh Standards</li>
                  <li>• Non-Profit Organization Compliance Rules</li>
                  <li>• Data Protection Regulations</li>
                  <li>• Financial Reporting Requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions About Legal Matters?</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our legal documents or compliance, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>Address:</strong> Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

