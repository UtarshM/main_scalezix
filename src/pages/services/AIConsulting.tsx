import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
} from "lucide-react";

const AIConsulting = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategy Development",
      description: "Comprehensive AI strategy aligned with your business goals",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI Analysis",
      description: "Detailed analysis of potential return on AI investments",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Change Management",
      description: "Support for organizational change and AI adoption",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Roadmap",
      description: "Clear roadmap for AI implementation and scaling",
    },
  ];

  const services = [
    "AI Strategy Development",
    "Use Case Identification",
    "Technology Assessment",
    "Implementation Roadmap",
    "ROI Analysis & Business Case",
    "Data Strategy & Governance",
    "AI Ethics & Compliance",
    "Team Training & Upskilling",
    "Vendor Selection & Evaluation",
    "Proof of Concept Development",
    "Change Management Support",
    "Ongoing AI Advisory",
  ];

  const useCases = [
    {
      industry: "Healthcare",
      applications: [
        "Medical Diagnosis",
        "Drug Discovery",
        "Patient Monitoring",
        "Treatment Optimization",
      ],
    },
    {
      industry: "Finance",
      applications: [
        "Fraud Detection",
        "Risk Assessment",
        "Algorithmic Trading",
        "Customer Service",
      ],
    },
    {
      industry: "Retail",
      applications: [
        "Recommendation Systems",
        "Inventory Optimization",
        "Price Optimization",
        "Customer Analytics",
      ],
    },
    {
      industry: "Manufacturing",
      applications: [
        "Predictive Maintenance",
        "Quality Control",
        "Supply Chain Optimization",
        "Process Automation",
      ],
    },
  ];

  const technologies = [
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
      name: "OpenAI",
      category: "LLM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Hugging Face",
      category: "Models",
      logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    },
    {
      name: "AWS AI",
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Google AI",
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
    {
      name: "Azure AI",
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      name: "Langchain",
      category: "Framework",
      logo: "https://python.langchain.com/img/brand/wordmark.png",
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
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <span className="text-purple-600 font-semibold">
                  AI Consulting
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Strategy &{" "}
                <span className="text-purple-600">Consulting</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business with strategic AI consulting. We help
                organizations identify AI opportunities, develop implementation
                strategies, and navigate the AI transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Get AI Strategy
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <p className="text-gray-600">
                  Comprehensive AI strategy and consulting package
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Consulting"
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
              Strategic AI Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate your AI transformation with expert guidance and strategic
              planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Use Cases by Industry
            </h2>
            <p className="text-xl text-gray-600">
              Discover how AI can transform different industries and business
              functions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {useCase.industry}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {useCase.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{app}</span>
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
              Our AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI consulting from strategy to implementation
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
              AI Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600">
              Leveraging the latest AI technologies and platforms for your
              solutions
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
                <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's develop a strategic AI roadmap that aligns with your business
            goals and drives innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get AI Strategy
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

export default AIConsulting;
