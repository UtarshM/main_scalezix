import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/scalezix_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "AI Consulting", path: "/services/ai-consulting" },
      { name: "Custom AI Development", path: "/services/ai-development" },
      { name: "LLM Fine-tuning", path: "/services/ai-development" },
      { name: "Cloud AI Deployment", path: "/services/cloud-services" },
      { name: "AI Infrastructure", path: "/services/ai-infrastructure" },
      { name: "Computer Vision", path: "/services/ai-development" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about" },
      { name: "Portfolio", path: "/portfolio" },
      { name: "Contact", path: "/contact" },
      { name: "Insights", path: "/blog" },
      { name: "Careers", path: "/contact" },
    ],
    support: [
      { name: "Help Center", path: "/contact" },
      { name: "Documentation", path: "/blog" },
      { name: "API Reference", path: "/blog" },
      { name: "Community", path: "https://www.linkedin.com/company/scalezixco/" },
      { name: "Status Page", path: "/contact" },
      { name: "Bug Reports", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/scalezix", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/scalezix", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/scalezixco/", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/scalezix/", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4 sm:mb-6">
              <img
                src={logo}
                alt="Scalezix"
                className="h-6 sm:h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Scalezix is your trusted partner for AI transformation. We
              help businesses harness the power of artificial intelligence with 
              custom AI solutions, LLM fine-tuning, and enterprise deployment services.
            </p>

            {/* Startup India Certification */}
            <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    alt="India Flag"
                    className="w-4 h-3 sm:w-6 sm:h-4 object-cover rounded-sm"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    Startup India Certified
                  </h4>
                  <p className="text-orange-100 text-xs sm:text-sm">
                    Government of India Recognition
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">
                  contact@scalezix.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">
                  +91 82000 10241
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">
                  i-Hub, Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-lg transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {link.path.startsWith('http') ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Subscribe to our newsletter for the latest AI insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                Subscribe
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Scalezix. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
