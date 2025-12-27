import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  CreditCard,
  Package,
} from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";
import AnimatedButton from "../../components/AnimatedButton";

const EcommerceSolutions = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Custom E-commerce Development",
      description:
        "Tailored online stores built for your specific business needs",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Integration",
      description: "Secure payment gateways with multiple payment options",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimized",
      description: "Responsive design optimized for mobile shopping",
    },
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "Complete Shopify store development and customization",
      features: [
        "Custom Shopify Theme Development",
        "Shopify App Integration",
        "Payment Gateway Setup",
        "SEO Optimization",
        "Mobile Responsive Design",
        "Third-party Integrations",
      ],
      popular: true,
    },
    {
      name: "WordPress WooCommerce",
      description: "Flexible WordPress e-commerce solutions",
      features: [
        "Custom WooCommerce Development",
        "Plugin Development",
        "Payment Integration",
        "Inventory Management",
        "Multi-vendor Support",
        "Performance Optimization",
      ],
      popular: false,
    },
    {
      name: "Custom E-commerce",
      description: "Fully custom e-commerce platforms",
      features: [
        "Custom Platform Development",
        "Advanced Features",
        "Scalable Architecture",
        "API Development",
        "Admin Dashboard",
        "Analytics Integration",
      ],
      popular: false,
    },
  ];

  const services = [
    "E-commerce Website Development",
    "Shopify Store Setup & Customization",
    "WordPress WooCommerce Development",
    "Payment Gateway Integration",
    "Inventory Management Systems",
    "Product Catalog Management",
    "Shopping Cart Development",
    "Order Management Systems",
    "Multi-vendor Marketplace",
    "Mobile App Development",
    "SEO & Digital Marketing",
    "Ongoing Maintenance & Support",
  ];

  const technologies = [
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    },
    {
      name: "WordPress",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    },
    {
      name: "WooCommerce",
      logo: "https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    },
    {
      name: "PayPal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      name: "Razorpay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
    },
  ];

  return (
    <div className="pt-20">
      {/* SEO Meta Tags */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "E-commerce Solutions - Shopify & WordPress Development",
          provider: {
            "@type": "Organization",
            name: "Scalezix",
            url: "https://scalezix.com",
          },
          description:
            "Professional e-commerce development services including Shopify stores, WordPress WooCommerce, and custom online shopping platforms",
          serviceType: [
            "E-commerce Development",
            "Shopify Development",
            "WordPress WooCommerce",
            "Online Store Development",
          ],
          areaServed: "Worldwide",
          offers: {
            "@type": "Offer",
            price: "1999",
            priceCurrency: "USD",
            description: "E-commerce development",
          },
        })}
      </script>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <ShoppingCart className="w-8 h-8 text-purple-600" />
                </div>
                <span className="text-purple-600 font-semibold">
                  E-commerce Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-purple-600">E-commerce</span>{" "}
                Development
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch your online store with our expert e-commerce development
                services. We specialize in Shopify, WordPress WooCommerce, and
                custom e-commerce platforms that drive sales and growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <AnimatedButton
                  to="/contact"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Start Your Store
                </AnimatedButton>
                <AnimatedButton to="/portfolio" variant="outline" size="lg">
                  View E-commerce Projects
                </AnimatedButton>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-gray-600 m-0 p-0">
                  Complete e-commerce store development and setup
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="E-commerce Development"
                  className="rounded-2xl shadow-2xl hover-lift w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        50+
                      </div>
                      <div className="text-gray-600">Stores Built</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              E-commerce Development Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build a successful online store
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 hover-lift">
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="hidden py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              E-commerce Platforms We Specialize In
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect platform for your online business
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 150}
              >
                <div
                  className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 relative ${
                    platform.popular
                      ? "border-purple-200 ring-4 ring-purple-100"
                      : "border-gray-100"
                  }`}
                >
                  {platform.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{platform.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {platform.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <AnimatedButton
                    to="/contact"
                    variant={platform.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </AnimatedButton>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete E-commerce Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end e-commerce development and support services
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 50}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies & Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools and platforms for your e-commerce success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection
                key={index}
                animation="scaleIn"
                delay={index * 100}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100 hover-scale">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="max-h-10 max-w-20 object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {tech.name}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient-shift relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's build a powerful e-commerce platform that drives sales and
              grows your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
                showArrow
              >
                Start Your Project
              </AnimatedButton>
              <AnimatedButton
                to="/portfolio"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                View Portfolio
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSolutions;
