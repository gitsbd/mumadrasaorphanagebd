import { MapPin, Mail, Phone, Clock, User, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Get in touch with Madinatul Uloom Madrasa & Orphanage
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Address</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Kaya Kori (Baligange Bazar), Nakla,<br />
                Sherpur, Mymensingh, Bangladesh
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Email</h3>
              <a
                href="mailto:mu.madrasaorphanage.bd@gmail.com"
                className="text-islamic-green hover:underline text-sm break-all"
              >
                mu.madrasaorphanage.bd@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">WhatsApp | Phone</h3>
              <div className="space-y-2">
                <a href="tel:+8801728014014" className="block text-gray-700 hover:text-islamic-green transition-colors text-sm">
                  +880 17 2801 4014
                </a>
                <a href="tel:+8801791206098" className="block text-gray-700 hover:text-islamic-green transition-colors text-sm">
                  +880 17 9120 6098
                </a>
                <a href="tel:+19175616554" className="block text-gray-700 hover:text-islamic-green transition-colors text-sm">
                  +1 (917) 561-6554
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="bg-islamic-light p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Facebook className="h-8 w-8 text-islamic-green" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Social Media</h3>
              <a
                href="http://facebook.com/profile.php?id=61551745422535"
                target="_blank"
                rel="noopener noreferrer"
                className="text-islamic-green hover:underline text-sm"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>

          {/* Executive Committee Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <User className="h-8 w-8 mr-3 text-islamic-green" />
              Executive Committee
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-islamic-green pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">Executive Director</h3>
                <p className="text-gray-700">Md. Shahnewaz Zaman (Shanto)</p>
              </div>
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">President</h3>
                <p className="text-gray-700">Md. Mominul Islam</p>
              </div>
              <div className="border-l-4 border-teal-700 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">General Secretary</h3>
                <p className="text-gray-700">Abu Salim Sujon</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Visiting Hours</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">General Visits</h3>
                <p className="text-gray-700 mb-4">
                  We welcome visitors who wish to learn more about our institution and see our facilities. Please contact us in advance to schedule a visit.
                </p>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-islamic-green" />
                  <span>Best time: 9:00 AM - 5:00 PM (Sunday - Thursday)</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Donation & Sponsorship</h3>
                <p className="text-gray-700 mb-4">
                  For donations, sponsorships, or to discuss how you can support our mission, please reach out via email or visit us during office hours.
                </p>
                <p className="text-gray-700">
                  We accept Zakat, Sadaqah, Waqf contributions, and monthly sponsorships for orphan care.
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Location</h2>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Kaya Kori (Baligange Bazar)</p>
                <p>Nakla, Sherpur, Mymensingh, Bangladesh</p>
                <p className="text-sm mt-2">Map integration can be added here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

