import { Mail, Phone, MapPin, Clock, QrCode } from "lucide-react";

export default function Contact() {
  const offices = [
    {
      title: "Head Quarter",
      address: "Tilak Road, Rajahmundry",
      icon: MapPin,
    },
    {
      title: "Bangalore Office",
      address: "BHIVE Workspace, Koramangala, Bangalore",
      icon: MapPin,
    },
    {
      title: "Hyderabad Office",
      address: "Financial District, Hyderabad",
      icon: MapPin,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#009A9A]/5 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact EmbeHome
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get in touch with our team to discuss your smart automation, OEM support, or technology development requirements
            </p>
          </div>
        </div>
      </section>

      {/* Office Addresses */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600">Visit us at any of our locations across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#009A9A]/20 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-5">
                  <office.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{office.title}</h3>
                <p className="text-gray-600 leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>

          {/* Contact Details & Business Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact */}
            <div className="bg-gradient-to-br from-[#009A9A]/5 to-white rounded-2xl p-8 border border-[#009A9A]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg font-medium text-gray-900">8688778353</p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#009A9A]" />
                  <a href="mailto:info@embehome.in" className="hover:text-[#009A9A] transition-colors text-sm">
                    info@embehome.in
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-gray-500">Closed</span>
                </div>
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Save EmbeHome Contact</h3>
              <p className="text-sm text-gray-500 mb-6">Scan QR to save contact details</p>

              {/* QR Placeholder */}
              <div className="w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="grid grid-cols-5 gap-1 p-3 w-full h-full">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,7,8,11,12,13,16,17,18][i % 25] % 3 === 0
                          ? "bg-gray-900"
                          : "bg-white"
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-[#009A9A]" />
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-400 space-y-1">
                <p>Phone: 8688778353</p>
                <p>Email: info@embehome.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
