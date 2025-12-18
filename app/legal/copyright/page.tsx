import { Copyright, FileText, Shield, AlertCircle } from "lucide-react";

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Copyright className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Copyright Notice</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Intellectual property rights and usage guidelines
          </p>
          <p className="text-sm text-teal-200 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Copyright Statement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Copyright className="h-8 w-8 mr-3 text-islamic-green" />
              Copyright Statement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              © {new Date().getFullYear()} Madinatul Uloom Madrasa & Orphanage. All rights reserved.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, audio clips, 
              digital downloads, and software, is the property of Madinatul Uloom Madrasa & Orphanage or its content 
              suppliers and is protected by Bangladesh copyright laws and international copyright treaties.
            </p>
          </div>

          {/* Protected Materials */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Protected Materials</h2>
            <p className="text-gray-700 mb-4">The following materials are protected by copyright:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>All text content, including course descriptions, curriculum information, and institutional documents</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Website design, layout, and user interface elements</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Logos, trademarks, and branding materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Photographs, images, and graphics (unless otherwise noted)</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Educational materials and curriculum content</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Software code and website functionality</span>
              </li>
            </ul>
          </div>

          {/* Permitted Use */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-green-600" />
              Permitted Use
            </h2>
            <p className="text-gray-700 mb-4">You may use our website content for the following purposes:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span><strong>Personal Use:</strong> Viewing and downloading content for personal, non-commercial use</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span><strong>Educational Use:</strong> Using content for educational purposes with proper attribution</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span><strong>Sharing:</strong> Sharing links to our website on social media or other platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span><strong>Printing:</strong> Printing pages for personal reference (not for redistribution)</span>
              </li>
            </ul>
          </div>

          {/* Prohibited Use */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <AlertCircle className="h-8 w-8 mr-3 text-red-600" />
              Prohibited Use
            </h2>
            <p className="text-gray-700 mb-4">You may NOT:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Reproduce, copy, or duplicate any content without written permission</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Modify, adapt, or create derivative works from our content</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Use our content for commercial purposes without authorization</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Remove copyright notices or attribution from materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Distribute or publish our content on other websites or platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 text-xl">✗</span>
                <span>Use automated systems to scrape or download content</span>
              </li>
            </ul>
          </div>

          {/* Fair Use */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Fair Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Bangladesh Copyright Act and international fair use principles, limited use of copyrighted 
              materials may be permitted for purposes such as:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Criticism, comment, and news reporting</li>
              <li>• Teaching, scholarship, and research</li>
              <li>• Parody and satire</li>
            </ul>
            <p className="text-gray-700 mt-4">
              However, such use must be limited, transformative, and not harm the market value of the original work. 
              When in doubt, please seek permission.
            </p>
          </div>

          {/* Permission Requests */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Permission Requests</h2>
            <p className="text-gray-700 mb-4">
              If you wish to use our copyrighted materials beyond what is permitted above, please contact us to request 
              permission. Include the following information in your request:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Description of the material you wish to use</li>
              <li>• Intended purpose and context of use</li>
              <li>• Duration and scope of use</li>
              <li>• Whether the use is commercial or non-commercial</li>
              <li>• Your contact information</li>
            </ul>
            <p className="text-gray-700">
              We will review your request and respond within a reasonable timeframe. Permission may be granted subject 
              to conditions, including proper attribution and usage restrictions.
            </p>
          </div>

          {/* Third-Party Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Third-Party Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Some content on our website may be owned by third parties or used under license. Such content is clearly 
              marked, and we respect the intellectual property rights of third parties. If you believe any content 
              on our website infringes your copyright, please contact us immediately.
            </p>
          </div>

          {/* Trademarks */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Trademarks</h2>
            <p className="text-gray-700 leading-relaxed">
              "Madinatul Uloom," "Madinatul Uloom Madrasa & Orphanage," and related logos and marks are trademarks 
              of Madinatul Uloom Madrasa & Orphanage. Unauthorized use of these trademarks is prohibited and may 
              violate trademark laws in Bangladesh and internationally.
            </p>
          </div>

          {/* Legal Enforcement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Legal Enforcement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We take copyright infringement seriously. Unauthorized use of our copyrighted materials may result in:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Legal action under Bangladesh Copyright Act</li>
              <li>• Claims for damages and injunctive relief</li>
              <li>• Criminal prosecution where applicable</li>
            </ul>
            <p className="text-gray-700 mt-4">
              If you become aware of any unauthorized use of our copyrighted materials, please report it to us 
              immediately.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact for Copyright Matters</h2>
            <p className="text-gray-700 mb-4">
              For copyright-related inquiries, permission requests, or infringement reports, please contact:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                  mu.madrasaorphanage.bd@gmail.com
                </a>
              </p>
              <p><strong>Subject Line:</strong> "Copyright Inquiry" or "Permission Request"</p>
              <p><strong>Address:</strong> Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh</p>
              <p><strong>Executive Director:</strong> Md. Shahnewaz Zaman (Shanto)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

