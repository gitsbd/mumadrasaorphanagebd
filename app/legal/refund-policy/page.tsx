import { RefreshCw, DollarSign, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <RefreshCw className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Policy regarding refunds for donations and contributions
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Madinatul Uloom Madrasa & Orphanage is a registered non-profit Islamic educational institution. 
              This Refund Policy outlines our policy regarding refunds for donations and contributions made to our 
              institution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This policy complies with Bangladesh government regulations for non-profit organizations and charitable 
              institutions, including the <strong>Societies Registration Act</strong> and <strong>Department of Social 
              Welfare</strong> guidelines.
            </p>
          </div>

          {/* General Policy */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <DollarSign className="h-8 w-8 mr-3 text-islamic-green" />
              General Refund Policy
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>Important:</strong> As a general rule, donations made to Madinatul Uloom Madrasa & Orphanage 
                are considered final and non-refundable. Donations are voluntary contributions made to support our 
                charitable and educational activities.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              However, we understand that exceptional circumstances may arise. Refund requests will be considered on a 
              case-by-case basis under the following conditions:
            </p>
          </div>

          {/* Eligible Refund Cases */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Eligible Refund Cases</h2>
            <p className="text-gray-700 mb-6">Refunds may be considered in the following exceptional circumstances:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  1. Technical Errors
                </h3>
                <p className="text-gray-700">
                  If a donation was processed due to a technical error on our website or payment system (e.g., duplicate 
                  charges, incorrect amount processed), we will refund the erroneous amount within 7-14 business days 
                  after verification.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  2. Unauthorized Transactions
                </h3>
                <p className="text-gray-700">
                  If your payment method was used without your authorization, please contact us immediately. We will 
                  investigate and process a refund if the transaction is confirmed as unauthorized.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  3. Processing Errors
                </h3>
                <p className="text-gray-700">
                  If a donation was processed incorrectly due to our error (e.g., wrong amount, wrong recipient), we 
                  will correct the error and process a refund if applicable.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Refundable Cases */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-red-600" />
              Non-Refundable Cases
            </h2>
            <p className="text-gray-700 mb-4">The following cases are generally NOT eligible for refunds:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Change of mind after making a donation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Donations made voluntarily and intentionally</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Donations that have already been allocated to programs or expenses</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Donations made more than 30 days ago (unless exceptional circumstances)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Donations made through third-party platforms where refunds must be processed through that platform</span>
              </li>
            </ul>
          </div>

          {/* Refund Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Clock className="h-8 w-8 mr-3 text-islamic-green" />
              Refund Request Process
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Step 1: Submit Request</h3>
                <p className="text-gray-700 mb-4">
                  To request a refund, please contact us via email at{" "}
                  <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                    mu.madrasaorphanage.bd@gmail.com
                  </a>{" "}
                  with the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Your full name and contact information</li>
                  <li>Date and amount of donation</li>
                  <li>Transaction reference number or receipt number</li>
                  <li>Reason for refund request</li>
                  <li>Supporting documentation (if applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Step 2: Review Process</h3>
                <p className="text-gray-700">
                  We will review your request within 5-7 business days. We may contact you for additional information 
                  or clarification. The review process includes verification of the transaction and assessment of the 
                  refund eligibility criteria.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Step 3: Refund Processing</h3>
                <p className="text-gray-700 mb-4">
                  If your refund request is approved:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Refunds will be processed within 7-14 business days after approval</li>
                  <li>Refunds will be issued to the original payment method used</li>
                  <li>You will receive confirmation via email once the refund is processed</li>
                  <li>Processing times may vary depending on your bank or payment provider</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tax Implications */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Tax Implications</h2>
            <p className="text-gray-700 leading-relaxed">
              Please note that if you have claimed a tax deduction for your donation, you may need to amend your tax 
              return if a refund is processed. We recommend consulting with a tax advisor regarding the tax implications 
              of refunded donations in Bangladesh.
            </p>
            <p className="text-gray-700 mt-4">
              We will provide updated donation receipts if a refund is processed, which may affect your tax deductions.
            </p>
          </div>

          {/* Zakat and Sadaqah */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Special Note: Zakat and Sadaqah</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Zakat and Sadaqah</strong> donations are considered religious obligations and acts of worship. 
              Once these funds have been distributed to eligible recipients (orphans, students, etc.) in accordance 
              with Islamic principles, refunds are generally not possible as the funds have fulfilled their intended 
              purpose.
            </p>
            <p className="text-gray-700">
              If you have concerns about how your Zakat or Sadaqah was used, please contact us, and we will provide 
              transparency reports on fund utilization.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For refund requests or questions about this policy, please contact:
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
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Response Time:</strong> We aim to respond to refund requests within 5-7 business days. 
                Please allow additional time during peak periods or holidays.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

