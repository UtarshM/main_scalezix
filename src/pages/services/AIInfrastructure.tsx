import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, ArrowRight, CheckCircle, Monitor, Zap, Shield, BarChart3 } from 'lucide-react';

const AIInfrastructure = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "AI Model Monitoring",
      description: "Real-time monitoring of model performance and health"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-scaling",
      description: "Automatic scaling based on demand and traffic patterns"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security for AI workloads"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Detailed analytics and performance optimization"
    }
  ];

  const services = [
    "AI Model Monitoring & Alerting",
    "Auto-scaling Infrastructure",
    "Performance Optimization",
    "Cost Management & Optimization",
    "Security & Compliance Management",
    "MLOps Pipeline Setup",
    "Model Version Control",
    "A/B Testing Infrastructure",
    "Data Pipeline Management",
    "Disaster Recovery Planning",
    "24/7 Infrastructure Support",
    "Custom Monitoring Dashboards"
  ];

  const technologies = [
    { 
      name: "Kubernetes", 
      category: "Orchestration",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
    },
    { 
      name: "Docker", 
      category: "Containerization",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
    },
    { 
      name: "Prometheus", 
      category: "Monitoring",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"
    },
    { 
      name: "Grafana", 
      category: "Visualization",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg"
    },
    { 
      name: "MLflow", 
      category: "MLOps",
      logo: "https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png"
    },
    { 
      name: "Kubeflow", 
      category: "ML Platform",
      logo: "https://www.kubeflow.org/docs/images/logo.svg"
    },
    { 
      name: "Terraform", 
      category: "Infrastructure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg"
    },
    { 
      name: "AWS", 
      category: "Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
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
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <span className="text-orange-600 font-semibold">AI Infrastructure</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Infrastructure <span className="text-orange-600">Management</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Robust AI infrastructure management with monitoring and scaling solutions. 
                We ensure your AI models run efficiently, scale automatically, and maintain peak performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  Setup Infrastructure
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AI Infrastructure"
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
              AI Infrastructure Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure management for AI workloads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-orange-600">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Infrastructure Management Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete AI infrastructure solutions from setup to ongoing management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Infrastructure Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Modern tools and platforms for AI infrastructure management
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
                <span className="text-sm text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your AI Infrastructure?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Let's build robust, scalable AI infrastructure that grows with your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Setup Infrastructure
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

export default AIInfrastructure;