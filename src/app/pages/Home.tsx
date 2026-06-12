import { Link } from "react-router";
import { Home as HomeIcon, Cpu, Cloud, Smartphone, Database, BarChart3, Zap, Shield, Code2, Lightbulb, Settings, CheckCircle2, Monitor, Blinds, Mic, Calendar, Video, Sparkles, Server, Layers, Rocket, CheckCircle, PenTool } from "lucide-react";

export default function Home() {
  const smartHomeFeatures = [
    { name: "Smart Touch Switches", icon: Zap },
    { name: "Smart Hub", icon: Cpu },
    { name: "Curtain Controller", icon: Blinds },
    { name: "Mobile App Control", icon: Smartphone },
    { name: "Voice Assistant Integration", icon: Mic },
    { name: "Scenes", icon: Lightbulb },
    { name: "Schedules", icon: Calendar },
    { name: "Events", icon: Settings },
  ];

  const saasProductServices = [
    { name: "Idea to SaaS Product", icon: Lightbulb },
    { name: "UI/UX & App Design", icon: PenTool },
    { name: "Mobile App Development", icon: Smartphone },
    { name: "Web App Development", icon: Monitor },
    { name: "Admin Dashboard", icon: BarChart3 },
    { name: "Backend APIs", icon: Server },
    { name: "Cloud Deployment", icon: Cloud },
    { name: "Database Architecture", icon: Database },
    { name: "Data Analytics", icon: BarChart3 },
    { name: "AI Features", icon: Sparkles },
    { name: "Product Testing", icon: CheckCircle },
    { name: "Launch Support", icon: Rocket },
  ];

  const technologyCapabilities = [
    { name: "Smart Automation", icon: Zap, type: "product" },
    { name: "SaaS Product Development", icon: Rocket, type: "service" },
    { name: "IoT Engineering", icon: Cpu, type: "service" },
    { name: "Firmware Development", icon: Code2, type: "service" },
    { name: "Mobile Applications", icon: Smartphone, type: "service" },
    { name: "Web Applications", icon: Monitor, type: "service" },
    { name: "Dashboards & Analytics", icon: BarChart3, type: "service" },
    { name: "Cloud Infrastructure", icon: Cloud, type: "service" },
    { name: "Backend Systems", icon: Server, type: "service" },
    { name: "Database Architecture", icon: Database, type: "service" },
    { name: "AI-Powered Features", icon: Sparkles, type: "service" },
    { name: "Product Engineering", icon: Settings, type: "product" },
  ];

  const whyChooseUs = [
    { title: "Smart Product Experience", description: "Proven expertise in smart home automation products", icon: HomeIcon },
    { title: "SaaS Product Expertise", description: "Full-stack SaaS platform development from idea to launch", icon: Rocket },
    { title: "IoT & Firmware Knowledge", description: "Deep embedded systems and IoT engineering", icon: Cpu },
    { title: "Cloud & Backend Strength", description: "Scalable cloud infrastructure and APIs", icon: Cloud },
    { title: "Dashboard & Analytics Capability", description: "Data visualization and business intelligence", icon: BarChart3 },
    { title: "OEM-Friendly Technical Process", description: "Structured support for product partners", icon: Shield },
  ];

  const ideaToSaasSteps = [
    {
      title: "Startup Ideas",
      description: "Transform your startup idea into a complete SaaS platform with mobile apps, web apps, and backend systems",
      icon: Lightbulb,
    },
    {
      title: "Business Platforms",
      description: "Build custom business management platforms with dashboards, admin panels, and automation workflows",
      icon: Monitor,
    },
    {
      title: "Analytics Systems",
      description: "Create data analytics platforms with visualizations, reporting, and business intelligence features",
      icon: BarChart3,
    },
    {
      title: "AI Tools",
      description: "Develop AI-powered applications with machine learning features, automation, and intelligent insights",
      icon: Sparkles,
    },
    {
      title: "Cloud Software",
      description: "Build scalable cloud-based software systems with APIs, databases, and deployment infrastructure",
      icon: Cloud,
    },
    {
      title: "Mobile Apps",
      description: "Design and develop complete mobile applications for iOS and Android with backend integration",
      icon: Smartphone,
    },
  ];

  return (
    <div className="w-full">
      {/* Split Hero Section */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Smart Automation & Scalable Digital Technology Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              EmbeHome builds smart home automation products and delivers SaaS, AI, IoT, firmware, cloud, backend, dashboard, database, and analytics solutions for modern businesses.
            </p>
          </div>

          {/* Split Hero Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left: Smart Home Automation */}
            <div className="bg-gradient-to-br from-[#009A9A]/5 via-white to-[#009A9A]/5 rounded-3xl p-8 lg:p-10 border-2 border-[#009A9A]/20 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Smart Home Automation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Complete smart home ecosystem with intelligent controls for lights, fans, curtains, scenes, and automation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {smartHomeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                    <feature.icon className="w-4 h-4 text-[#009A9A] flex-shrink-0" />
                    <span className="text-sm text-gray-900">{feature.name}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/smart-home-automation"
                className="block w-full px-6 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors text-center shadow-lg shadow-[#009A9A]/20"
              >
                Explore Smart Home
              </Link>
            </div>

            {/* Right: SaaS Product Development & AI Solutions */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 lg:p-10 border-2 border-gray-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">SaaS Product Development & AI Solutions</h2>
              </div>
              <p className="text-gray-300 mb-6">
                We turn your idea into a complete SaaS product — including UI/UX design, mobile apps, web apps, admin dashboards, backend APIs, cloud deployment, databases, analytics, automation, and AI-powered features.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {saasProductServices.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                    <feature.icon className="w-4 h-4 text-[#009A9A] flex-shrink-0" />
                    <span className="text-sm text-white">{feature.name}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/saas-ai-services"
                className="block w-full px-6 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#00b8b8] transition-colors text-center shadow-lg shadow-[#009A9A]/30"
              >
                Build Your SaaS Idea
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Solution Pillars */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Two Main Solution Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              EmbeHome delivers excellence across smart automation products and full-stack SaaS development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Smart Home Automation Pillar */}
            <Link
              to="/smart-home-automation"
              className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#009A9A]/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Home Automation</h3>
              <p className="text-gray-600 mb-6">
                Intelligent home control systems with smart switches, hubs, curtain controllers, app integration, voice control, scenes, schedules, and event-based automation for modern living spaces.
              </p>
              <div className="flex items-center gap-2 text-[#009A9A] font-medium">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* SaaS Product Development & AI Solutions Pillar */}
            <Link
              to="/saas-ai-services"
              className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#009A9A]/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS Product Development & AI Solutions</h3>
              <p className="text-gray-600 mb-6">
                Complete SaaS product development from idea to launch — including UI/UX design, mobile and web applications, admin dashboards, backend systems, cloud infrastructure, databases, analytics, and AI-powered features for any business idea.
              </p>
              <div className="flex items-center gap-2 text-[#009A9A] font-medium">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* From Idea to SaaS Product */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#009A9A]/10 text-[#009A9A] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              SaaS Product Development
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">From Idea to SaaS Product</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether it is a startup idea, business platform, mobile app, dashboard, analytics system, AI tool, or cloud software, EmbeHome helps design, build, deploy, and scale complete SaaS products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideaToSaasSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Home Automation Preview */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#009A9A]/10 text-[#009A9A] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HomeIcon className="w-4 h-4" />
              Smart Home Products
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Smart Home Automation Preview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete ecosystem for intelligent home control and automation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {smartHomeFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-2">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-medium text-gray-900">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Product Services Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#009A9A]/10 text-[#009A9A] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              SaaS Development Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete SaaS Product Development</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-stack development from concept to cloud deployment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {saasProductServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#009A9A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-gray-900">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Capability Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technology Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise across smart products and software engineering
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologyCapabilities.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#009A9A]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center flex-shrink-0">
                  <tech.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EmbeHome */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#009A9A] to-[#00b8b8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose EmbeHome</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Trusted expertise in smart automation products and full-stack SaaS development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-white/80">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Technical Support Banner */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-lg border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OEM Technical Support for Smart Automation Partners</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              White-label and OEM partnership support for approved smart automation partners under mutual agreement.
            </p>
            <Link
              to="/smart-home-automation#oem-support"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn About OEM Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Build Smart Products and Scalable Digital Platforms with EmbeHome
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you need smart home automation or a complete SaaS product, EmbeHome delivers innovation and excellence
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors shadow-lg shadow-[#009A9A]/20 text-center"
            >
              Discuss Smart Home Requirement
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg text-center"
            >
              Discuss SaaS / AI Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
