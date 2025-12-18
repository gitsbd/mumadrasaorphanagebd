import { Shield, FileText, Lock, Eye, Users, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-teal-200 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <FileText className="h-8 w-8 mr-3 text-islamic-green" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Madinatul Uloom Madrasa & Orphanage ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website or interact with our institution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This policy complies with the <strong>Bangladesh Digital Security Act, 2018</strong> and other applicable 
              data protection regulations in Bangladesh. By using our website, you consent to the collection and use of 
              information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Eye className="h-8 w-8 mr-3 text-islamic-green" />
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Personal Information</h3>
                <p className="text-gray-700 mb-3">We may collect the following personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Donation information and payment details (processed securely through third-party payment processors)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you voluntarily provide when contacting us or making donations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Non-Personal Information</h3>
                <p className="text-gray-700 mb-3">We automatically collect certain non-personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Browser type and version</li>
                  <li>IP address and general location</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Users className="h-8 w-8 mr-3 text-islamic-green" />
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>To process donations and provide donation receipts</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>To respond to your inquiries and provide customer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>To send you updates about our programs and activities (with your consent)</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>To improve our website and services</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>To comply with legal obligations and regulatory requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>To maintain records as required by Bangladesh government regulations</span>
              </li>
            </ul>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Lock className="h-8 w-8 mr-3 text-islamic-green" />
              Data Protection and Security
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet or electronic storage is 100% secure.
            </p>
            <div className="bg-islamic-light p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Security Measures Include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Secure data transmission using encryption (SSL/TLS)</li>
                <li>• Restricted access to personal information</li>
                <li>• Regular security assessments</li>
                <li>• Compliance with Bangladesh Digital Security Act, 2018</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating 
                our website and processing donations (e.g., payment processors), subject to confidentiality agreements</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Legal Requirements:</strong> When required by law, court order, or government regulation in Bangladesh</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our 
                students, staff, or others</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>With Your Consent:</strong> When you have given explicit consent for such sharing</span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Rights</h2>
            <p className="text-gray-700 mb-4">Under Bangladesh law, you have the following rights regarding your personal information:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Right to Access:</strong> Request access to your personal information we hold</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Right to Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Right to Object:</strong> Object to processing of your personal information</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-6">
              To exercise these rights, please contact us at:{" "}
              <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                mu.madrasaorphanage.bd@gmail.com
              </a>
            </p>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law. Financial records are 
              retained as required by Bangladesh government regulations for non-profit organizations, typically for a 
              minimum of 7 years.
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can 
              control cookie preferences through your browser settings.
            </p>
            <p className="text-gray-700">
              We use cookies for: website functionality, analytics, and improving user experience. No personally 
              identifiable information is collected through cookies without your consent.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not directed to children under 13 years of age. We do not knowingly collect personal 
              information from children. If you are a parent or guardian and believe your child has provided us with 
              personal information, please contact us immediately. We comply with Bangladesh laws regarding protection 
              of children's privacy.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this 
              Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Mail className="h-8 w-8 mr-3 text-islamic-green" />
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>Address:</strong> Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh</p>
              <p><strong>Executive Director:</strong> Md. Shahnewaz Zaman (Shanto)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

