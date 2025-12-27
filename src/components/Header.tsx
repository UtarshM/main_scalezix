import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import logo from "../assets/scalezix_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown when navigating to a service page
  useEffect(() => {
    if (location.pathname.startsWith("/services/")) {
      setIsServicesOpen(false);
    }
  }, [location.pathname]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "AI Consulting",
          path: "/services/ai-consulting",
          description: "Strategy & implementation roadmap",
          icon: "🧠",
        },
        {
          name: "Custom AI Development",
          path: "/services/ai-development",
          description: "AI models, chatbots & automation",
          icon: "🤖",
        },
        {
          name: "LLM Fine-tuning",
          path: "/services/ai-development",
          description: "GPT, Claude, Llama optimization",
          icon: "🎯",
        },
        {
          name: "Cloud AI Deployment",
          path: "/services/cloud-services",
          description: "AWS/GCP/Azure deployment",
          icon: "☁️",
        },
        {
          name: "AI Infrastructure",
          path: "/services/ai-infrastructure",
          description: "MLOps, monitoring & scaling",
          icon: "⚙️",
        },
        {
          name: "Computer Vision",
          path: "/services/ai-development",
          description: "Image & video AI solutions",
          icon: "👁️",
        },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Scalezix"
              className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group flex">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`font-medium transition-all duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${
                        location.pathname === item.path ||
                        location.pathname.startsWith("/services/")
                          ? "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    <div
                      className={`fixed top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100 py-8 z-50 transition-all duration-300 ${
                        isServicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-4"
                      }`}
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="px-6 py-2 border-b border-gray-100 mb-4">
                          <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                            Our Services
                          </h3>
                          <p className="text-gray-600 text-center text-sm">
                            Comprehensive technology solutions for your business
                          </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.path}
                              className="block p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-2xl transition-all duration-300 group text-center transform hover:-translate-y-2 hover:shadow-lg border border-gray-100 hover:border-blue-200"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="flex flex-col items-center gap-2">
                                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                                  {dropdownItem.icon}
                                </div>
                                <div>
                                  <div className="text-gray-900 font-bold group-hover:text-blue-600 transition-colors duration-300 text-base leading-tight mb-2">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${
                      location.pathname === item.path
                        ? "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918200010241"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 group"
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">+91 82000 10241</span>
            </a>
            <AnimatedButton to="/contact" variant="primary" size="md">
              Get Quote
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-4 rounded-b-2xl shadow-xl animate-fadeInUp">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 font-medium transition-all duration-300 rounded-lg mx-2 ${
                    location.pathname === item.path
                      ? "text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="grid grid-cols-2 gap-2 px-4 pb-2">
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.path}
                        className="block p-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group text-center transform hover:-translate-y-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-lg">{dropdownItem.icon}</span>
                        <span className="text-xs leading-tight">
                          {dropdownItem.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-gray-100 mt-4 space-y-3">
              <a
                href="tel:+918200010241"
                className="flex items-center gap-2 text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 82000 10241</span>
              </a>
              <AnimatedButton
                to="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </AnimatedButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
