import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, CheckCircle, TrendingUp, Users, Target, Mail } from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    {
      icon: <Search className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "SEO Optimization",
      description: "Improve search rankings and organic traffic"
    },
    {
      icon: <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "PPC Campaigns",
      description: "Targeted advertising campaigns for maximum ROI"
    },
    {
      icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Social Media Marketing",
      description: "Engage audiences across all social platforms"
    },
    {
      icon: <Mail className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Email Marketing",
      description: "Automated email campaigns and nurture sequences"
    }
  ];

  const services = [
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC) Advertising",
    "Social Media Marketing",
    "Content Marketing Strategy",
    "Email Marketing Automation",
    "Conversion Rate Optimization",
    "Google Analytics Setup",
    "Social Media Management",
    "Influencer Marketing",
    "Online Reputation Management",
    "Marketing Automation",
    "Performance Tracking & Reporting"
  ];

  const platforms = [
    { name: "Google Ads", category: "PPC" },
    { name: "Facebook Ads", category: "Social" },
    { name: "Instagram Ads", category: "Social" },
    { name: "LinkedIn Ads", category: "B2B" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "SEMrush", category: "SEO" },
    { name: "Mailchimp", category: "Email" },
    { name: "HubSpot", category: "CRM" }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-green-100 p-2 sm:p-3 rounded-xl">
                  <Search className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
                </div>
                <span className="text-green-600 font-semibold text-sm sm:text-base">Digital Marketing</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Digital Marketing <span className="text-green-600">Solutions</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Boost your online presence and drive conversions with comprehensive digital marketing strategies. 
                From SEO to social media marketing, we help you reach your target audience effectively.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <Link 
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Marketing
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 text-center"
                >
                  View Results
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Digital Marketing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Digital Marketing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Marketing Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Everything you need to succeed in digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Marketing Platforms We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Industry-leading tools and platforms for maximum results
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{platform.name}</h3>
                <span className="text-xs sm:text-sm text-green-600 bg-green-100 px-2 sm:px-3 py-1 rounded-full">
                  {platform.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Let's create a digital marketing strategy that drives traffic, generates leads, and increases sales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Marketing
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;