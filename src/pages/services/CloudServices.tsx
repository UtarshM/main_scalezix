import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, CheckCircle, Server, Shield, Zap, Database } from 'lucide-react';

const CloudServices = () => {
  const features = [
    {
      icon: <Server className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Infrastructure Setup",
      description: "Complete AWS infrastructure design and implementation"
    },
    {
      icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance standards"
    },
    {
      icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Auto-scaling",
      description: "Automatic scaling based on demand and traffic"
    },
    {
      icon: <Database className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Data Management",
      description: "Secure data storage, backup, and disaster recovery"
    }
  ];

  const services = [
    "AWS Cloud Migration",
    "Infrastructure as Code (IaC)",
    "DevOps Implementation",
    "Container Orchestration",
    "Serverless Architecture",
    "Database Migration & Optimization",
    "CI/CD Pipeline Setup",
    "Monitoring & Logging",
    "Security Implementation",
    "Cost Optimization",
    "Disaster Recovery Planning",
    "24/7 Cloud Support"
  ];

  const awsServices = [
    { 
      name: "EC2", 
      description: "Elastic Compute Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg"
    },
    { 
      name: "S3", 
      description: "Simple Storage Service",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg"
    },
    { 
      name: "RDS", 
      description: "Relational Database Service",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/AWS_Simple_Icons_Database_Amazon_RDS.svg"
    },
    { 
      name: "Lambda", 
      description: "Serverless Computing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Lambda.svg"
    },
    { 
      name: "CloudFormation", 
      description: "Infrastructure as Code",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/AWS_Simple_Icons_Management_Tools_AWS_CloudFormation.svg"
    },
    { 
      name: "EKS", 
      description: "Kubernetes Service",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/AWS_Simple_Icons_Compute_Amazon_EKS.svg"
    },
    { 
      name: "CloudWatch", 
      description: "Monitoring & Logging",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/AWS_Simple_Icons_Management_Tools_Amazon_CloudWatch.svg"
    },
    { 
      name: "IAM", 
      description: "Identity & Access Management",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/AWS_Simple_Icons_Security_Identity_%26_Compliance_AWS_IAM.svg"
    }
  ];

  const benefits = [
    "Reduced Infrastructure Costs",
    "Improved Scalability",
    "Enhanced Security",
    "Better Performance",
    "Increased Reliability",
    "Faster Time to Market"
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-xl">
                  <Cloud className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold text-sm sm:text-base">Cloud Services</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                AWS Cloud <span className="text-blue-600">Solutions</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Migrate to the cloud with confidence. We provide comprehensive AWS cloud services 
                including migration, infrastructure setup, and ongoing management for scalable applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <Link 
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Start Migration
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link 
                  to="/portfolio"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 text-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cloud Services"
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
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully migrate and manage your applications in the cloud
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <div className="text-blue-600">
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

      {/* AWS Partnership Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                AWS Certified Partners
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                As AWS certified partners, we have the expertise and credentials to handle 
                complex cloud migrations and implementations with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2">AWS Partner Network</h3>
                <p className="text-orange-100 text-sm sm:text-base">
                  Certified AWS solutions architect and cloud practitioner on our team
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AWS Partnership"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Complete cloud solutions from migration to ongoing management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              AWS Services We Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Leveraging the full power of Amazon Web Services for your applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {awsServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="h-12 sm:h-16 flex items-center justify-center mb-3 sm:mb-4">
                  <img 
                    src={service.logo} 
                    alt={service.name}
                    className="max-h-8 sm:max-h-12 max-w-16 sm:max-w-20 object-contain"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{service.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Let's discuss your cloud migration strategy and build a scalable, secure infrastructure on AWS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Migration
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

export default CloudServices;