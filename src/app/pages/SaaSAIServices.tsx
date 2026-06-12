import { Link } from "react-router";
import { Smartphone, Monitor, BarChart3, Settings, Cloud, Database, Cpu, Code2, Video, Sparkles, FileVideo, Share2, Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import SendUsMessageSection from "../components/SendUsMessageSection";

const SAAS_AI_DEFAULT_REQUIREMENT = "New idea discussion";

const SAAS_AI_REQUIREMENT_OPTIONS = [
  SAAS_AI_DEFAULT_REQUIREMENT,
  "SaaS Product Development",
  "AI Tools & Automation",
  "Mobile App Development",
  "Web App Development",
  "Dashboard Development",
  "Backend / API Development",
  "Cloud Deployment",
  "Database / Data Analytics",
  "IoT Product Development",
  "Firmware Support",
  "Complete Product Development",
];

export default function SaaSAIServices() {
  const saasServices = [
    {
      title: "App Designing",
      description: "UI/UX design for mobile and web applications with modern interfaces",
      icon: Sparkles,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
    },
    {
      title: "Web App Development",
      description: "Responsive web applications with modern frameworks and technologies",
      icon: Monitor,
    },
    {
      title: "Dashboarding",
      description: "Interactive dashboards for data visualization and business intelligence",
      icon: BarChart3,
    },
    {
      title: "Admin Panels",
      description: "Comprehensive admin interfaces for system management and control",
      icon: Settings,
    },
    {
      title: "Data Analytics",
      description: "Analytics platforms for insights, reporting, and data-driven decisions",
      icon: BarChart3,
    },
    {
      title: "Cloud Systems",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: Cloud,
    },
    {
      title: "Backend APIs",
      description: "RESTful and GraphQL APIs for seamless system integration",
      icon: Code2,
    },
    {
      title: "Database Design",
      description: "Database architecture, optimization, and data management",
      icon: Database,
    },
    {
      title: "IoT Integration",
      description: "IoT device connectivity and platform integration services",
      icon: Cpu,
    },
    {
      title: "Firmware Support",
      description: "Embedded firmware development for IoT and smart devices",
      icon: Cpu,
    },
  ];

  const aiVideoServices = [
    {
      title: "AI Product Videos",
      description: "Professional product showcase videos created with AI automation",
      icon: Video,
    },
    {
      title: "Promotional Videos",
      description: "Marketing and promotional content for brand campaigns",
      icon: Sparkles,
    },
    {
      title: "Explainer Videos",
      description: "Clear and engaging videos explaining products or services",
      icon: FileVideo,
    },
    {
      title: "Brand Videos",
      description: "Brand storytelling and corporate video content",
      icon: Video,
    },
    {
      title: "Social Media Reels",
      description: "Short-form video content optimized for social platforms",
      icon: Share2,
    },
    {
      title: "Creative Automation Videos",
      description: "AI-powered video creation for various creative needs",
      icon: Sparkles,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#009A9A]/5 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SaaS, AI & Digital Technology Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From app design and web dashboards to backend, cloud, analytics, IoT, firmware, and AI video creation — EmbeHome builds complete digital technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#009A9A] text-white font-medium rounded-lg hover:bg-[#008080] transition-colors shadow-lg shadow-[#009A9A]/20"
              >
                Start Your Project
              </Link>
              <a
                href="#services"
                className="px-8 py-3 bg-white text-[#009A9A] font-medium rounded-lg border-2 border-[#009A9A] hover:bg-[#009A9A]/5 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Services */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">SaaS Development Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-stack software development from design to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#009A9A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Complete Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern frameworks and tools for scalable, performant applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend</h3>
              <p className="text-gray-600">React, React Native, Next.js, TypeScript, Tailwind CSS, responsive design</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend</h3>
              <p className="text-gray-600">Node.js, Python, REST APIs, GraphQL, microservices architecture</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-gray-600">AWS, Azure, Docker, Kubernetes, PostgreSQL, MongoDB, Redis</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Video Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#009A9A]/10 text-[#009A9A] px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered Video Creation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AI Video Maker Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional video content creation powered by artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiVideoServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#009A9A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#009A9A]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured approach ensuring quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
              <p className="text-sm text-gray-600">Requirements analysis and project roadmap</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Architecture</h3>
              <p className="text-sm text-gray-600">UI/UX design and technical architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-sm text-gray-600">Agile development with continuous testing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Support</h3>
              <p className="text-sm text-gray-600">Launch and ongoing maintenance</p>
            </div>
          </div>
        </div>
      </section>

      <SendUsMessageSection
        contextType="saas-ai"
        requirementOptions={SAAS_AI_REQUIREMENT_OPTIONS}
        defaultRequirementType={SAAS_AI_DEFAULT_REQUIREMENT}
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
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Transform your digital vision into reality with EmbeHome's SaaS and AI services
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#009A9A] font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
