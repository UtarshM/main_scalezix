import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  ShoppingCart,
  Cloud,
  Brain,
  Cpu,
  Search,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Settings,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedButton from "../components/AnimatedButton";

const Services = () => {
  const serviceCategories = [
    {
      title: "AI Development & Consulting",
      description:
        "Custom AI solutions from strategy to implementation",
      gradient: "from-blue-500 to-cyan-500",
      services: [
        {
          icon: <Brain className="w-8 h-8" />,
          title: "AI Consulting & Strategy",
          description:
            "Strategic AI consulting to identify opportunities and create implementation roadmaps",
          features: [
            "AI Readiness Assessment",
            "Use Case Identification",
            "ROI Analysis",
            "Implementation Roadmap",
            "Technology Selection",
            "Risk Assessment",
          ],
          technologies: [
            "TensorFlow",
            "PyTorch",
            "OpenAI",
            "Anthropic",
            "Hugging Face",
            "LangChain",
          ],
          link: "/services/ai-consulting",
        },
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "Custom AI Development",
          description:
            "Build custom AI models, chatbots, and intelligent automation solutions",
          features: [
            "Custom Model Development",
            "AI Chatbots & Assistants",
            "Computer Vision",
            "Natural Language Processing",
            "Predictive Analytics",
            "Recommendation Systems",
          ],
          technologies: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "OpenCV",
            "spaCy",
          ],
          link: "/services/ai-development",
        },
      ],
    },
    {
      title: "LLM & Model Optimization",
      description:
        "Fine-tune and optimize large language models for your specific needs",
      gradient: "from-purple-500 to-pink-500",
      services: [
        {
          icon: <Zap className="w-8 h-8" />,
          title: "LLM Fine-tuning",
          description:
            "Fine-tune GPT, Claude, Llama and other LLMs for domain-specific tasks",
          features: [
            "Model Fine-tuning",
            "Prompt Engineering",
            "Domain Adaptation",
            "Performance Optimization",
            "Quality Assurance",
            "A/B Testing",
          ],
          technologies: [
            "GPT-4",
            "Claude",
            "Llama",
            "Mistral",
            "Hugging Face",
            "LoRA/QLoRA",
          ],
          link: "/services/ai-development",
        },
        {
          icon: <Settings className="w-8 h-8" />,
          title: "Model Optimization",
          description: "Optimize AI models for speed, accuracy, and cost-efficiency",
          features: [
            "Model Compression",
            "Quantization",
            "Pruning",
            "Knowledge Distillation",
            "Inference Optimization",
            "Cost Reduction",
          ],
          technologies: [
            "ONNX",
            "TensorRT",
            "OpenVINO",
            "TFLite",
            "PyTorch Mobile",
            "Triton",
          ],
          link: "/services/ai-development",
        },
      ],
    },
    {
      title: "AI Infrastructure & Deployment",
      description:
        "Enterprise-grade AI deployment and infrastructure management",
      gradient: "from-green-500 to-teal-500",
      services: [
        {
          icon: <Cloud className="w-8 h-8" />,
          title: "Cloud AI Deployment",
          description: "Deploy AI models on AWS, GCP, or Azure with auto-scaling",
          features: [
            "Multi-cloud Deployment",
            "Auto-scaling",
            "Load Balancing",
            "Security Implementation",
            "Cost Optimization",
            "Disaster Recovery",
          ],
          technologies: [
            "AWS SageMaker",
            "GCP Vertex AI",
            "Azure ML",
            "Docker",
            "Kubernetes",
            "Terraform",
          ],
          link: "/services/cloud-services",
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "MLOps & Monitoring",
          description:
            "Complete MLOps pipeline with monitoring, versioning, and automation",
          features: [
            "CI/CD Pipelines",
            "Model Versioning",
            "Performance Monitoring",
            "Automated Retraining",
            "A/B Testing",
            "Drift Detection",
          ],
          technologies: [
            "MLflow",
            "Kubeflow",
            "Airflow",
            "Prometheus",
            "Grafana",
            "Weights & Biases",
          ],
          link: "/services/ai-infrastructure",
        },
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "AI Discovery & Assessment",
      description:
        "We analyze your business needs and identify AI opportunities with ROI potential",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Model Development & Training",
      description:
        "Our AI engineers develop and train custom models tailored to your requirements",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description:
        "We rigorously test and optimize models for accuracy, speed, and cost-efficiency",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Deployment & Monitoring",
      description:
        "We deploy to production and provide ongoing monitoring, support, and optimization",
      icon: <Settings className="w-6 h-6" />,
    },
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Development & Deployment Solutions",
            provider: {
              "@type": "Organization",
              name: "Scalezix",
            },
            description:
              "Comprehensive AI solutions including custom model development, LLM fine-tuning, cloud deployment, and AI infrastructure management",
            serviceType: [
              "AI Consulting",
              "Custom AI Development",
              "LLM Fine-tuning",
              "Cloud AI Deployment",
              "AI Infrastructure",
              "MLOps",
            ],
            areaServed: "Worldwide",
          })}
        </script>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full animate-float opacity-20"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full animate-float-delayed opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full animate-float-slow opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI{" "}
              <span className="gradient-text-blue animate-gradient-shift">
                Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              We specialize in custom AI model development, LLM fine-tuning, cloud deployment, 
              and enterprise AI infrastructure that drives measurable results and business growth.
            </p>
            <AnimatedButton
              to="/contact"
              variant="primary"
              size="lg"
              showArrow
              className="animate-bounce-gentle"
            >
              Get Free Consultation
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${
            categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <div
                className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 animate-shimmer`}
              >
                {category.title}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {category.title} Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <AnimatedSection
                  key={serviceIndex}
                  animation="fadeInUp"
                  delay={serviceIndex * 200}
                >
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 relative">
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <div
                          className={`bg-gradient-to-r ${category.gradient} p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <div className="text-white">{service.icon}</div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">
                              Key Features:
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {service.features.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">
                              Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* <div className="flex items-center justify-between mb-6">
                            <div
                              className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                            >
                              {service.price}
                            </div>
                          </div> */}

                          <div className="flex gap-4">
                            <AnimatedButton
                              to={service.link}
                              variant="primary"
                              size="md"
                              className="flex-1"
                              showArrow
                            >
                              Learn More
                            </AnimatedButton>
                            <AnimatedButton
                              to="/contact"
                              variant="outline"
                              size="md"
                            >
                              Get Quote
                            </AnimatedButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI Development Process</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We follow a proven AI development methodology to ensure your project delivers 
              measurable results and exceeds expectations
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 150}
              >
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <div className="text-blue-300">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-shift relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your AI project requirements and create a custom
              solution that drives measurable results and competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                showArrow
              >
                Start Your AI Project
              </AnimatedButton>
              <AnimatedButton
                to="/portfolio"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
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

export default Services;
