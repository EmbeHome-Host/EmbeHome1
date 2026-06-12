import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import embehomeLogo from "@/assets/embehome-logo.png";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/smart-home-automation", label: "Smart Home Automation" },
    { path: "/saas-ai-services", label: "SaaS & AI Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={embehomeLogo}
                alt="EmbeHome Automations"
                width={52}
                height={52}
                fetchPriority="high"
                decoding="async"
                className="h-11 w-11 sm:h-[52px] sm:w-[52px] object-contain shrink-0 bg-transparent"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-gray-900 tracking-tight">EmbeHome</span>
                <span className="text-[10px] text-[#009A9A] font-medium tracking-widest uppercase">Automations</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#009A9A]"
                      : "text-gray-600 hover:text-[#009A9A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#009A9A] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-[#009A9A]/10 text-[#009A9A]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={embehomeLogo}
                  alt="EmbeHome Automations"
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0 bg-transparent"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold text-white tracking-tight">EmbeHome</span>
                  <span className="text-[10px] text-[#009A9A] font-medium tracking-widest uppercase">Automations</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                EmbeHome Automations and Technologies Pvt Ltd - Building smart home automation products and technology solutions across IoT, firmware, mobile apps, web dashboards, cloud, backend, databases, analytics, OEM support, and AI video creation.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-[#009A9A] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>EmbeHome Automations and Technologies Pvt Ltd</p>
                <Link to="/contact" className="block hover:text-[#009A9A] transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} EmbeHome Automations and Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
