import { Link } from "react-router";
import { Home, Cpu, Blinds, Smartphone, Mic, Calendar, Zap, Cloud, Building2, User, ArrowRight, Shield, Code2, BarChart3, Server, Settings, Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import SendUsMessageSection from "../components/SendUsMessageSection";
import ProductImageSlideshow from "../components/ProductImageSlideshow";
import {
  getProductSlideshow,
  PRODUCT_SLIDESHOWS,
  type ProductSlideImage,
} from "../data/productSlideshowImages";

const SMART_HOME_REQUIREMENT_OPTIONS = [
  "Smart Home Automation",
  "OEM Technical Support for Smart Automation Partners",
];

interface SmartHomeProduct {
  id: string;
  name: string;
  category: string;
  model: string;
  description: string;
  image: string;
  slideshowImages?: ProductSlideImage[];
}

export default function SmartHomeAutomation() {
  const [activeTab, setActiveTab] = useState("all");

  const productTabs = [
    { id: "all", label: "All" },
    { id: "2m", label: "2M" },
    { id: "4m", label: "4M" },
    { id: "8m", label: "8M" },
    { id: "12m", label: "12M" },
    { id: "cc", label: "CC" },
  ];

  const products: SmartHomeProduct[] = [
    {
      id: "trendy-touch-2-module",
      name: "Trendy Touch 2 Module",
      category: "2m",
      model: "TT-2M-01",
      description: "Premium 2-module smart touch switch",
      image: "2M",
      slideshowImages: getProductSlideshow("Trendy Touch 2 Module", PRODUCT_SLIDESHOWS.twoModule),
    },
    {
      id: "smart-sens-2-module",
      name: "Smart Sens 2 Module",
      category: "2m",
      model: "SS-2M-01",
      description: "Smart sensor enabled 2-module switch",
      image: "2M",
      slideshowImages: getProductSlideshow("Smart Sens 2 Module", PRODUCT_SLIDESHOWS.twoModule),
    },
    {
      id: "trendy-touch-bell",
      name: "Trendy Touch Bell",
      category: "2m",
      model: "TT-BELL-01",
      description: "Smart doorbell touch switch",
      image: "2M",
      slideshowImages: getProductSlideshow("Trendy Touch Bell", PRODUCT_SLIDESHOWS.twoModule),
    },
    {
      id: "trendy-touch-4-module",
      name: "Trendy Touch 4 Module",
      category: "4m",
      model: "TT-4M-01",
      description: "Premium 4-module smart touch switch",
      image: "4M",
      slideshowImages: getProductSlideshow("Trendy Touch 4 Module", PRODUCT_SLIDESHOWS.fourModule),
    },
    {
      id: "trendy-touch-8-module",
      name: "Trendy Touch 8 Module",
      category: "8m",
      model: "TT-8M-01",
      description: "Premium 8-module smart touch switch",
      image: "8M",
      slideshowImages: getProductSlideshow("Trendy Touch 8 Module", PRODUCT_SLIDESHOWS.eightModule),
    },
    {
      id: "trendy-touch-12-module",
      name: "Trendy Touch 12 Module",
      category: "12m",
      model: "TT-12M-01",
      description: "Premium 12-module smart touch switch",
      image: "12M",
      slideshowImages: getProductSlideshow("Trendy Touch 12 Module", PRODUCT_SLIDESHOWS.twelveModule),
    },
    {
      id: "curtain-controller",
      name: "Curtain Controller",
      category: "cc",
      model: "CC-01",
      description: "Smart automated curtain controller",
      image: "CC",
      slideshowImages: getProductSlideshow("Curtain Controller", PRODUCT_SLIDESHOWS.curtainController),
    },
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(p => p.category === activeTab);

  const features = [
    {
      title: "App Control",
      description: "Control all devices from your smartphone anywhere, anytime",
      icon: Smartphone,
    },
    {
      title: "Voice Control",
      description: "Seamless integration with Alexa, Google Assistant, and other voice assistants",
      icon: Mic,
    },
    {
      title: "Scene Automation",
      description: "Create custom scenes for different moods and activities",
      icon: Home,
    },
    {
      title: "Schedule Automation",
      description: "Set schedules for automatic device control based on time",
      icon: Calendar,
    },
    {
      title: "Events & Triggers",
      description: "Advanced automation based on events and conditions",
      icon: Zap,
    },
    {
      title: "Secure Cloud Connectivity",
      description: "Enterprise-grade security for all your smart home data",
      icon: Cloud,
    },
  ];

  const howItWorksSteps = [
    { step: "1", title: "Install Devices", description: "Install smart switches and devices" },
    { step: "2", title: "Connect Hub", description: "Set up the central smart hub" },
    { step: "3", title: "Control from App", description: "Download app and add devices" },
    { step: "4", title: "Automate Your Home", description: "Create scenes and schedules" },
  ];

  const useCases = [
    { name: "Homes", icon: Home },
    { name: "Apartments", icon: Building2 },
    { name: "Villas", icon: Home },
    { name: "Offices", icon: Building2 },
    { name: "Builders", icon: Building2 },
    { name: "Interior Designers", icon: User },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#009A9A]/5 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Smart Home Automation Designed for Modern Living
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Control lights, fans, curtains, scenes, schedules, and your complete home experience from one intelligent EmbeHome platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors shadow-lg shadow-[#009A9A]/20"
              >
                Request Demo
              </Link>
              <a
                href="#products"
                className="px-8 py-3 bg-white text-[#009A9A] font-medium rounded-lg border-2 border-[#009A9A] hover:bg-[#009A9A]/5 transition-colors"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Technical Support Section */}
      <section id="oem-support" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#009A9A]/10 text-[#009A9A] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                For Approved Smart Automation Partners
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                OEM Technical Support for Smart Automation Partners
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                White-label and OEM partnership support under mutual agreement.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                EmbeHome provides technical support for approved smart automation partners who want to build, integrate, or scale smart automation solutions. Our support can include product integration guidance, firmware coordination, mobile app support, cloud/backend support, dashboard support, and deployment assistance based on mutually agreed scope and responsibilities.
              </p>
              <p className="text-sm text-gray-500 italic mb-8">
                Available only for approved partners under mutual agreement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors text-center shadow-lg shadow-[#009A9A]/20"
                >
                  Discuss Smart Automation Partnership
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white text-[#009A9A] font-medium rounded-lg border-2 border-[#009A9A] hover:bg-[#009A9A]/5 transition-colors text-center"
                >
                  Request Technical Discussion
                </Link>
              </div>
            </div>

            {/* Right Side - Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Product Integration Guidance</h3>
                <p className="text-sm text-gray-600">
                  Support for integrating smart automation products into a complete user-ready ecosystem.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Firmware Coordination</h3>
                <p className="text-sm text-gray-600">
                  Guidance for device firmware behavior, command flow, testing, and product-side coordination.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile App Support</h3>
                <p className="text-sm text-gray-600">
                  Support for Android/iOS app integration, user flows, device control, onboarding, and smart automation UX.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud & Backend Support</h3>
                <p className="text-sm text-gray-600">
                  Support for backend, APIs, MQTT/cloud communication, database flow, and deployment coordination.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dashboard / Admin Support</h3>
                <p className="text-sm text-gray-600">
                  Support for partner-facing dashboards, monitoring, product management, and technical operations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Deployment & Technical Guidance</h3>
                <p className="text-sm text-gray-600">
                  Assistance for setup flow, installation coordination, testing, and launch-readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Product Showcase */}
      <section id="products" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Smart Home Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore EmbeHome touch switchboards and smart automation controllers.
            </p>
          </div>

          {/* Horizontal Product Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-gray-100">
              {productTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#009A9A] text-white shadow-md"
                      : "text-gray-600 hover:text-[#009A9A]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#009A9A]/20 transition-all overflow-hidden"
              >
                {product.slideshowImages ? (
                  <ProductImageSlideshow
                    productId={product.id}
                    images={product.slideshowImages}
                  />
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#009A9A]/10 to-[#009A9A]/5 flex items-center justify-center">
                        <span className="text-4xl font-bold text-[#009A9A]">{product.image}</span>
                      </div>
                      <p className="text-sm text-gray-500">360° Product View</p>
                    </div>
                  </div>
                )}

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">Model: {product.model}</p>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="block w-full px-6 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors text-center shadow-md"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for complete home automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-[#009A9A]/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#009A9A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with EmbeHome in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {index < howItWorksSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-[#009A9A]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by homeowners, builders, and design professionals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-[#009A9A]/10 flex items-center justify-center mx-auto mb-3">
                  <useCase.icon className="w-6 h-6 text-[#009A9A]" />
                </div>
                <p className="text-sm font-medium text-gray-900">{useCase.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SendUsMessageSection
        contextType="smart-home"
        requirementOptions={SMART_HOME_REQUIREMENT_OPTIONS}
        defaultRequirementType="Smart Home Automation"
      />

      {/* Social Media */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Follow Us</h2>
            <p className="text-gray-500 text-sm">Stay connected with EmbeHome</p>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              aria-label="YouTube"
              className="w-12 h-12 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors group"
            >
              <Youtube className="w-6 h-6 text-red-500 group-hover:text-red-600" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-12 h-12 rounded-xl bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors group"
            >
              <Facebook className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-12 h-12 rounded-xl bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors group"
            >
              <Instagram className="w-6 h-6 text-pink-500 group-hover:text-pink-600" />
            </a>
            <a
              href="#"
              aria-label="Twitter / X"
              className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
            >
              <Twitter className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#009A9A] to-[#00b8b8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Make Your Home Smarter?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Experience the convenience of EmbeHome smart automation
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#009A9A] font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
