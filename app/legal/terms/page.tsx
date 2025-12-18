import { FileText, Scale, AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Please read these terms carefully before using our website and services.
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
              These Terms and Conditions ("Terms") govern your access to and use of the website of Madinatul Uloom 
              Madrasa and Orphanage ("we," "us," or "our"). By accessing or using our website, you agree to be bound 
              by these Terms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These Terms are governed by the laws of Bangladesh and comply with the <strong>Societies Registration Act</strong>, 
              <strong> Digital Security Act, 2018</strong>, and other applicable Bangladesh regulations.
            </p>
          </div>

          {/* Acceptance */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
              <p className="text-gray-800">
                <strong>Note:</strong> These Terms constitute a legally binding agreement between you and Madinatul Uloom 
                Madrasa and Orphanage.
              </p>
            </div>
          </div>

          {/* Use of Website */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Use of Website</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Permitted Use</h3>
            <p className="text-gray-700 mb-4">You may use our website for lawful purposes only. You agree to:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Use the website in accordance with all applicable laws and regulations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Provide accurate and truthful information when making donations or contacting us</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Respect the intellectual property rights of the institution</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Prohibited Use</h3>
            <p className="text-gray-700 mb-4">You agree NOT to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Use the website for any illegal or unauthorized purpose</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Attempt to gain unauthorized access to any part of the website</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Transmit any viruses, malware, or harmful code</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Use automated systems to access the website without permission</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Reproduce, duplicate, or copy content without authorization</span>
              </li>
            </ul>
          </div>

          {/* Donations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Donations</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1 Donation Process</h3>
            <p className="text-gray-700 mb-4">
              When making a donation through our website, you agree that:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>All donations are voluntary and made at your own discretion</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>You provide accurate payment information</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Donations are processed securely through third-party payment processors</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>We will provide receipts for donations as required by Bangladesh tax laws</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2 Use of Donations</h3>
            <p className="text-gray-700">
              All donations received are used exclusively for the purposes stated in our constitution: orphan care, 
              education, institutional development, and related activities. Financial records are maintained in 
              accordance with Bangladesh government regulations for non-profit organizations.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, 
              is the property of Madinatul Uloom Madrasa & Orphanage or its content suppliers and is protected by 
              Bangladesh copyright laws and international copyright treaties.
            </p>
            <p className="text-gray-700">
              You may not reproduce, distribute, modify, or create derivative works from any content on this website 
              without our express written permission.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-yellow-600" />
              5. Disclaimers
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">5.1 Website Availability</h3>
            <p className="text-gray-700 mb-4">
              We strive to ensure the website is available 24/7, but we do not guarantee uninterrupted access. The 
              website may be unavailable due to maintenance, technical issues, or circumstances beyond our control.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">5.2 Information Accuracy</h3>
            <p className="text-gray-700 mb-4">
              While we make every effort to ensure the accuracy of information on our website, we do not warrant that 
              all information is complete, accurate, or up-to-date. Information is provided "as is" without warranties 
              of any kind.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">5.3 Third-Party Links</h3>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy 
              policies, or practices of third-party websites. Your use of third-party websites is at your own risk.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by Bangladesh law, Madinatul Uloom Madrasa & Orphanage shall not be 
              liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
              or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
              intangible losses resulting from your use of the website.
            </p>
            <p className="text-gray-700">
              Our total liability for any claims arising from your use of the website shall not exceed the amount you 
              paid to us, if any, in the 12 months preceding the claim.
            </p>
          </div>

          {/* Indemnification */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">7. Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold harmless Madinatul Uloom Madrasa & Orphanage, its officers, directors, 
              employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) 
              arising from your use of the website or violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">8. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the People's Republic of 
              Bangladesh, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700">
              Any disputes arising from these Terms or your use of the website shall be subject to the exclusive 
              jurisdiction of the courts of Bangladesh, specifically the courts having jurisdiction over Mymensingh 
              Division, Sherpur District.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by 
              posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of the 
              website after such changes constitutes acceptance of the modified Terms.
            </p>
          </div>

          {/* Severability */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">10. Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent 
              jurisdiction, the remaining provisions shall remain in full force and effect.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
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

