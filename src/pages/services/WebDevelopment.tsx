import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, CheckCircle, Globe, Smartphone, Zap, Shield } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Websites that work perfectly on all devices and screen sizes"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimized",
      description: "Fast loading times and optimized user experience"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Scalable",
      description: "Built with security best practices and scalable architecture"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Designed with mobile users as the primary focus"
    }
  ];

  const services = [
    "Custom Web Application Development",
    "E-commerce Website Development",
    "Content Management Systems (CMS)",
    "Progressive Web Applications (PWA)",
    "API Development & Integration",
    "Database Design & Optimization",
    "Third-party Service Integration",
    "Website Maintenance & Support"
  ];

  const technologies = [
    { 
      name: "React", 
      category: "Frontend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    { 
      name: "Next.js", 
      category: "Framework",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
    },
    { 
      name: "Node.js", 
      category: "Backend",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    { 
      name: "TypeScript", 
      category: "Language",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
    },
    { 
      name: "MongoDB", 
      category: "Database",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
    },
    { 
      name: "PostgreSQL", 
      category: "Database",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
    },
    { 
      name: "AWS", 
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    { 
      name: "Docker", 
      category: "DevOps",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business requirements and create a detailed project specification."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the user interface and system architecture for optimal performance."
    },
    {
      step: "03",
      title: "Development",
      description: "We build your web application using modern technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Comprehensive testing followed by deployment to your preferred hosting platform."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">Web Development</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom Web <span className="text-blue-600">Development</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with custom web applications built using cutting-edge technologies. 
                We create scalable, secure, and high-performance web solutions tailored to your specific needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Web Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional web solutions that drive business growth and user engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From simple websites to complex web applications, we provide comprehensive 
                web development services to meet all your business needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Web Development Services"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              We leverage the latest technologies to build modern, scalable web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="h-12 flex items-center justify-center mb-4">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="max-h-10 max-w-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a custom web solution that drives your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;