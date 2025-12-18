import { AlertTriangle, Info, Shield, FileText } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Important legal disclaimers regarding the use of our website and services
          </p>
          <p className="text-sm text-teal-200 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* General Disclaimer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Info className="h-8 w-8 mr-3 text-islamic-green" />
              General Disclaimer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The information contained on this website is for general information purposes only. While we endeavor to 
              keep the information up to date and correct, we make no representations or warranties of any kind, express 
              or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to 
              the website or the information, products, services, or related graphics contained on the website for any 
              purpose.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
              <p className="text-gray-800">
                <strong>Important:</strong> Any reliance you place on such information is therefore strictly at your 
                own risk. In no event will we be liable for any loss or damage including without limitation, indirect or 
                consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits 
                arising out of, or in connection with, the use of this website.
              </p>
            </div>
          </div>

          {/* Website Disclaimer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Website Disclaimer</h2>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">1. No Warranty</h3>
            <p className="text-gray-700 mb-6">
              This website is provided "as is" without any representations or warranties, express or implied. 
              Madinatul Uloom Madrasa & Orphanage makes no representations or warranties in relation to this website 
              or the information and materials provided on this website.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Availability</h3>
            <p className="text-gray-700 mb-6">
              We do not warrant that this website will be constantly available, or available at all. We do not warrant 
              that the information on this website is complete, true, accurate, or non-misleading.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Technical Issues</h3>
            <p className="text-gray-700">
              We are not responsible for any technical malfunctions, errors, or delays in transmission. We reserve the 
              right to modify, suspend, or discontinue any aspect of the website at any time without notice.
            </p>
          </div>

          {/* Educational Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Educational Content Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The educational content, course descriptions, and curriculum information provided on this website are 
              subject to change without notice. While we strive to provide accurate information:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Course schedules, fees, and availability may change</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Admission requirements and procedures may be updated</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>We reserve the right to modify curriculum and programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Please contact us directly for the most current information</span>
              </li>
            </ul>
          </div>

          {/* Donation Disclaimer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Donation Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              While we make every effort to use donations for the stated purposes (orphan care, education, institutional 
              development), we cannot guarantee that:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>All donations will be used exactly as specified (though we strive to do so)</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Donations will achieve specific outcomes or results</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Donations are tax-deductible (please consult a tax advisor)</span>
              </li>
            </ul>
            <p className="text-gray-700">
              We maintain transparency in our financial reporting and are subject to oversight by our Permanent Committee 
              and relevant Bangladesh government authorities.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Third-Party Links Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Through this website, you are able to link to other websites which are not under the control of 
              Madinatul Uloom Madrasa & Orphanage. We have no control over the nature, content, and availability of 
              those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views 
              expressed within them.
            </p>
            <p className="text-gray-700">
              We are not responsible for the privacy practices, content, or security of third-party websites. Your use 
              of third-party websites is at your own risk.
            </p>
          </div>

          {/* Medical Disclaimer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Medical and Health Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Any medical or health information provided on this website is for general informational purposes only and 
              should not be considered as medical advice. We are not medical professionals, and any health-related 
              information should not replace consultation with qualified healthcare providers. For medical emergencies, 
              please contact appropriate medical authorities in Bangladesh.
            </p>
          </div>

          {/* Religious Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Religious Content Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The religious and Islamic educational content provided on this website reflects our understanding and 
              interpretation of Islamic teachings. While we strive to provide accurate and authentic Islamic education:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>Interpretations may vary among Islamic scholars</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>We follow mainstream Sunni Islamic teachings as practiced in Bangladesh</span>
              </li>
              <li className="flex items-start">
                <span className="text-islamic-green mr-3 text-xl">•</span>
                <span>For specific religious questions, consult qualified Islamic scholars</span>
              </li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Shield className="h-8 w-8 mr-3 text-islamic-green" />
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by Bangladesh law, Madinatul Uloom Madrasa & Orphanage, its officers, 
              directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, 
              consequential, or punitive damages resulting from:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Your use or inability to use the website</li>
              <li>• Any errors or omissions in the content</li>
              <li>• Any unauthorized access to or use of our servers</li>
              <li>• Any interruption or cessation of transmission to or from the website</li>
              <li>• Any bugs, viruses, or other harmful code transmitted through the website</li>
            </ul>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              This disclaimer is governed by the laws of the People's Republic of Bangladesh. Any disputes arising from 
              this disclaimer or your use of the website shall be subject to the exclusive jurisdiction of the courts 
              of Bangladesh.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Questions About This Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this disclaimer, please contact us:
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

