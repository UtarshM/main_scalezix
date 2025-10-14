import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Eye,
  BarChart3,
  Cog,
} from "lucide-react";

const AIDevelopment = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and understanding",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Image and video analysis with machine learning models",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Data-driven predictions and business intelligence",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Process Automation",
      description: "Intelligent automation for business processes",
    },
  ];

  const services = [
    "Custom Machine Learning Models",
    "Chatbot Development",
    "Natural Language Processing",
    "Computer Vision Solutions",
    "Predictive Analytics",
    "Recommendation Systems",
    "AI-Powered Automation",
    "Deep Learning Applications",
    "AI Model Training & Optimization",
    "AI Integration Services",
    "MLOps Implementation",
    "AI Performance Monitoring",
  ];

  const solutions = [
    {
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots for customer service and support",
      features: [
        "Natural Language Understanding",
        "Multi-language Support",
        "Integration with CRM",
        "24/7 Availability",
      ],
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models for business forecasting",
      features: [
        "Sales Forecasting",
        "Demand Prediction",
        "Risk Assessment",
        "Customer Behavior Analysis",
      ],
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for various applications",
      features: [
        "Object Detection",
        "Facial Recognition",
        "Quality Control",
        "Medical Imaging",
      ],
    },
    {
      title: "Process Automation",
      description: "Intelligent automation for repetitive tasks",
      features: [
        "Document Processing",
        "Data Entry Automation",
        "Workflow Optimization",
        "Decision Making",
      ],
    },
  ];

  const technologies = [
    {
      name: "Python",
      category: "Language",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "TensorFlow",
      category: "Framework",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    },
    {
      name: "PyTorch",
      category: "Framework",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    },
    {
      name: "OpenAI API",
      category: "LLM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Langchain",
      category: "Framework",
      logo: "https://python.langchain.com/img/brand/wordmark.png",
    },
    {
      name: "Scikit-learn",
      category: "Library",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    },
    {
      name: "Pandas",
      category: "Data",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
    },
    {
      name: "NumPy",
      category: "Computing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <Cpu className="w-8 h-8 text-indigo-600" />
                </div>
                <span className="text-indigo-600 font-semibold">
                  AI Development
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom AI <span className="text-indigo-600">Development</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build intelligent applications with custom AI solutions. We
                develop machine learning models, chatbots, and intelligent
                automation systems tailored to your specific business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Build AI Solution
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                >
                  View AI Projects
                </Link>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <p className="text-gray-600">
                  Custom AI development and implementation
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Development"
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
              AI Development Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI development services to build intelligent
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-indigo-600">{feature.icon}</div>
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

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Solutions We Build
            </h2>
            <p className="text-xl text-gray-600">
              Custom AI applications designed to solve real business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Development Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end AI development from concept to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Development Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks for AI development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100"
              >
                <div className="h-12 flex items-center justify-center mb-4">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="max-h-10 max-w-24 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <span className="text-sm text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build AI Solutions?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Let's create intelligent applications that automate processes and
            drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start AI Project
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

export default AIDevelopment;
