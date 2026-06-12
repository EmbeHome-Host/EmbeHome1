import { Link } from "react-router";
import { Target, Eye, Zap, Shield, Lightbulb, Users, Code2, Cpu, Cloud, Smartphone, Award, CheckCircle2, Flag, UserCheck, CalendarDays, Layers } from "lucide-react";

export default function About() {
  const companyValues = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology solutions",
      icon: Lightbulb,
    },
    {
      title: "Quality",
      description: "Delivering excellence in every product and service we create",
      icon: Award,
    },
    {
      title: "Reliability",
      description: "Building trustworthy systems our partners and customers depend on",
      icon: Shield,
    },
    {
      title: "Customer Focus",
      description: "Understanding and exceeding customer expectations at every step",
      icon: Users,
    },
  ];

  const technologyStrengths = [
    {
      area: "Smart Home Automation",
      description: "Comprehensive experience in smart switches, hubs, curtain control, app integration, voice control, and complete home automation ecosystems",
      icon: Zap,
    },
    {
      area: "Software Engineering",
      description: "Full-stack development expertise across mobile apps, web applications, dashboards, admin panels, and cloud-based SaaS platforms",
      icon: Code2,
    },
    {
      area: "IoT & Firmware",
      description: "Deep knowledge in IoT device connectivity, embedded firmware development, protocols, and hardware-software integration",
      icon: Cpu,
    },
    {
      area: "Cloud & Backend",
      description: "Scalable cloud infrastructure, backend APIs, database architecture, real-time systems, and enterprise-grade server solutions",
      icon: Cloud,
    },
    {
      area: "Mobile Applications",
      description: "Native and cross-platform mobile app development for iOS and Android with seamless device integration",
      icon: Smartphone,
    },
    {
      area: "Data & Analytics",
      description: "Analytics platforms, data visualization, business intelligence, and AI-powered video creation services",
      icon: Award,
    },
  ];

  const qualityCommitments = [
    "Rigorous testing and quality assurance processes",
    "Security-first approach in all systems",
    "Scalable and maintainable code architecture",
    "Continuous innovation and improvement",
    "Professional documentation and support",
    "Timely delivery and project management",
  ];

  const highlights = [
    { icon: Flag, label: "Proudly Made in India" },
    { icon: UserCheck, label: "More than 10 skilled experts" },
    { icon: CalendarDays, label: "Since 2022" },
    { icon: Layers, label: "Smart Automation + SaaS + AI Expertise" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-[#009A9A]/5 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About EmbeHome
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              EmbeHome Automations and Technologies Pvt Ltd is a technology company building smart home automation products and comprehensive technology solutions across IoT, firmware, mobile apps, web platforms, cloud systems, and AI services.
            </p>
            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 bg-white rounded-xl px-4 py-4 shadow-sm border border-[#009A9A]/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-gray-800 text-center leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#009A9A]/5 to-white rounded-2xl p-8 border border-[#009A9A]/10">
            <p className="text-gray-700 leading-relaxed mb-4">
              EmbeHome Automations is a technology company focused on smart home automation products, digital platforms, and intelligent software solutions. Our team works across smart automation, mobile apps, web applications, backend systems, cloud deployment, dashboards, data analytics, firmware coordination, and AI-enabled workflows.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since 2022, EmbeHome has been building reliable and practical technology experiences for homes, partners, startups, and growing businesses. Proudly made in India, our work combines product thinking, engineering, and long-term technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#009A9A] to-[#00b8b8] text-white rounded-2xl p-8 lg:p-12">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To deliver innovative, reliable, and scalable technology solutions that empower homes and businesses with intelligent automation, robust software systems, and cutting-edge digital services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 lg:p-12">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To be a trusted technology partner recognized for excellence in smart automation, IoT engineering, software development, and AI-powered services that transform how people interact with technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#009A9A]/20 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Strengths */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technology Strengths</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep expertise across the complete technology ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStrengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#009A9A]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#009A9A] to-[#00b8b8] flex items-center justify-center mb-4">
                  <strength.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{strength.area}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Home Experience */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#009A9A]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Smart Home Automation Experience</h2>
              <p className="text-lg text-gray-600">
                EmbeHome has developed a complete smart home automation product ecosystem including smart touch switches, central hub systems, curtain controllers, mobile applications, voice assistant integration, and comprehensive automation features like scenes, schedules, and event-based triggers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                Our products provide seamless control over lights, fans, curtains, and complete home environments through intuitive mobile apps, voice commands, and intelligent automation. The platform supports remote access, real-time control, and secure cloud connectivity, delivering a premium smart home experience trusted by homeowners, builders, and interior designers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Innovation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quality & Innovation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to delivering excellence through rigorous processes and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {qualityCommitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-[#009A9A] flex-shrink-0 mt-0.5" />
                <p className="font-medium text-gray-900">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#009A9A] to-[#00b8b8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Partner with EmbeHome
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's work together to build innovative technology solutions
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
