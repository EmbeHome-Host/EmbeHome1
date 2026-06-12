import { Link, useParams } from "react-router";
import { ArrowLeft, Zap, Shield, ThermometerSun, CheckCircle2 } from "lucide-react";

export default function ProductDetail() {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    "trendy-touch-2-module": {
      name: "Trendy Touch 2 Module",
      model: "TT-2M-01",
      category: "2M",
      description: "Premium 2-module capacitive touch smart switch with app and voice control. Designed for modern homes with elegant aesthetics and intelligent automation.",
      specifications: [
        "Module Configuration: 2 Module",
        "Touch Type: Capacitive Touch Sensor",
        "Voltage Rating: 230V AC",
        "Load Capacity: 6A per module",
        "Connectivity: Wi-Fi 2.4GHz",
        "Material: Tempered Glass Front Panel",
        "Dimensions: Standard 2M size",
        "Installation: Retrofit compatible",
      ],
      features: [
        { name: "Capacitive Touch Sensor", description: "High-precision touch detection" },
        { name: "Retrofit in Minutes", description: "Easy installation in existing boards" },
        { name: "Heat Resistant", description: "Operates safely at high temperatures" },
        { name: "Shock Proof", description: "Protected against electrical shocks" },
        { name: "RoHS Compliant", description: "Environment-friendly materials" },
        { name: "Touch Sensitivity Configuration", description: "Adjustable touch response" },
      ],
    },
    "smart-sens-2-module": {
      name: "Smart Sens 2 Module",
      model: "SS-2M-01",
      category: "2M",
      description: "Smart sensor enabled 2-module touch switch with motion detection and ambient light sensing for intelligent automation.",
      specifications: [
        "Module Configuration: 2 Module",
        "Touch Type: Capacitive with Motion Sensor",
        "Voltage Rating: 230V AC",
        "Load Capacity: 6A per module",
        "Connectivity: Wi-Fi 2.4GHz",
        "Sensor: PIR Motion + Light Sensor",
        "Dimensions: Standard 2M size",
        "Installation: Retrofit compatible",
      ],
      features: [
        { name: "Capacitive Touch Sensor", description: "High-precision touch detection" },
        { name: "Motion Detection", description: "Automatic control based on presence" },
        { name: "Retrofit in Minutes", description: "Easy installation in existing boards" },
        { name: "Heat Resistant", description: "Operates safely at high temperatures" },
        { name: "Shock Proof", description: "Protected against electrical shocks" },
        { name: "RoHS Compliant", description: "Environment-friendly materials" },
      ],
    },
    "trendy-touch-bell": {
      name: "Trendy Touch Bell",
      model: "TT-BELL-01",
      category: "2M",
      description: "Smart doorbell touch switch with app notifications and customizable chimes for enhanced home security and convenience.",
      specifications: [
        "Module Configuration: Bell Module",
        "Touch Type: Capacitive Touch",
        "Voltage Rating: 230V AC / 12V DC",
        "Connectivity: Wi-Fi 2.4GHz",
        "Notification: Push notifications to app",
        "Material: Tempered Glass",
        "Dimensions: Standard 2M size",
        "Installation: Retrofit compatible",
      ],
      features: [
        { name: "Capacitive Touch Sensor", description: "Responsive doorbell touch" },
        { name: "App Notifications", description: "Instant alerts on your phone" },
        { name: "Retrofit in Minutes", description: "Easy installation" },
        { name: "Heat Resistant", description: "Durable in all conditions" },
        { name: "Shock Proof", description: "Safe electrical protection" },
        { name: "RoHS Compliant", description: "Eco-friendly design" },
      ],
    },
    "trendy-touch-4-module": {
      name: "Trendy Touch 4 Module",
      model: "TT-4M-01",
      category: "4M",
      description: "Premium 4-module capacitive touch smart switch for comprehensive room control with app and voice integration.",
      specifications: [
        "Module Configuration: 4 Module",
        "Touch Type: Capacitive Touch Sensor",
        "Voltage Rating: 230V AC",
        "Load Capacity: 6A per module",
        "Connectivity: Wi-Fi 2.4GHz",
        "Material: Tempered Glass Front Panel",
        "Dimensions: Standard 4M size",
        "Installation: Retrofit compatible",
      ],
      features: [
        { name: "Capacitive Touch Sensor", description: "Precise multi-point touch" },
        { name: "Retrofit in Minutes", description: "Quick installation" },
        { name: "Heat Resistant", description: "High-temperature operation" },
        { name: "Shock Proof", description: "Enhanced safety" },
        { name: "RoHS Compliant", description: "Sustainable materials" },
        { name: "Touch Sensitivity Configuration", description: "Customizable sensitivity" },
      ],
    },
    "trendy-touch-8-module": {
      name: "Trendy Touch 8 Module",
      model: "TT-8M-01",
      category: "8M",
      description: "Premium 8-module capacitive touch smart switch for complete zone control in larger spaces with advanced automation.",
      specifications: [
        "Module Configuration: 8 Module",
        "Touch Type: Capacitive Touch Sensor",
        "Voltage Rating: 230V AC",
        "Load Capacity: 6A per module",
        "Connectivity: Wi-Fi 2.4GHz",
        "Material: Tempered Glass Front Panel",
        "Dimensions: Standard 8M size",
        "Installation: Retrofit compatible",
      ],
      features: [
        { name: "Capacitive Touch Sensor", description: "8-point precision touch" },
        { name: "Retrofit in Minutes", description: "Professional installation" },
        { name: "Heat Resistant", description: "Reliable performance" },
        { name: "Shock Proof", description: "Maximum protection" },
        { name: "RoHS Compliant", description: "Green technology" },
        { name: "Touch Sensitivity Configuration", description: "Individual zone control" },
      ],
    },
    "trendy-touch-12-module": {
      name: "Trendy Touch 12 Module",
      model: "TT-12M-01",
      category: "12M",
      description: "Premium 12-module capacitive touch smart switch for comprehensive control of large spaces with full automation capabilities.",
      specifications: [
        "Module Configuration: 12 Module",
        "Touch Type: Capacitive Touch Sensor",
        "Voltage Rating: 230V AC",
        "Load Capacity: 6A per module",
        "Connectivity: Wi-Fi 2.4GHz",
        "Material: Tempered Glass Front Panel",
        "Dimensions: Standard 12M size",
        "Installation: Retrofit compatible",
      ],
      features: [
        { name: "Capacitive Touch Sensor", description: "12-point precision control" },
        { name: "Retrofit in Minutes", description: "Expert installation support" },
        { name: "Heat Resistant", description: "Industrial-grade durability" },
        { name: "Shock Proof", description: "Advanced safety features" },
        { name: "RoHS Compliant", description: "Environmentally certified" },
        { name: "Touch Sensitivity Configuration", description: "Full customization" },
      ],
    },
    "curtain-controller": {
      name: "Curtain Controller",
      model: "CC-01",
      category: "CC",
      description: "Smart automated curtain controller with app and voice control for effortless window treatment management and scheduling.",
      specifications: [
        "Type: Curtain Motor Controller",
        "Voltage Rating: 230V AC",
        "Motor Support: Up to 100W",
        "Connectivity: Wi-Fi 2.4GHz",
        "Control: App, Voice, Schedule, Manual",
        "Material: Premium ABS housing",
        "Dimensions: Compact design",
        "Installation: Easy mount",
      ],
      features: [
        { name: "Automated Control", description: "Smart curtain automation" },
        { name: "Schedule Support", description: "Timed opening and closing" },
        { name: "Retrofit in Minutes", description: "Simple installation" },
        { name: "Heat Resistant", description: "Weather-proof design" },
        { name: "Shock Proof", description: "Safe operation" },
        { name: "RoHS Compliant", description: "Eco-friendly components" },
      ],
    },
  };

  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/smart-home-automation" className="text-[#009A9A] hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/smart-home-automation"
            className="inline-flex items-center gap-2 text-[#009A9A] hover:text-[#008080] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Smart Home Products
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Product Image */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#009A9A]/10 to-[#009A9A]/5 flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#009A9A]">{product.category}</span>
                </div>
                <p className="text-lg text-gray-500">360° Product View</p>
              </div>
            </div>

            {/* Right Side - Product Information */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <p className="text-lg text-gray-500 mb-6">Model: {product.model}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{product.description}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors text-center shadow-lg shadow-[#009A9A]/20"
                >
                  Request Demo
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-white text-[#009A9A] font-medium rounded-lg border-2 border-[#009A9A] hover:bg-[#009A9A]/5 transition-colors text-center"
                >
                  Contact Sales
                </Link>
              </div>

              {/* Specifications */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <ul className="space-y-3">
                    {product.specifications.map((spec: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#009A9A] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature: any, index: number) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#009A9A]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#009A9A]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.name}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-16 bg-gradient-to-br from-[#009A9A] to-[#00b8b8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in {product.name}?</h2>
          <p className="text-lg text-white/90 mb-8">
            Request a demo or contact our sales team for more information
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#009A9A] font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
