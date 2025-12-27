import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";
import IndustryPartners from "../components/IndustryPartners";
import AnimatedSection from "../components/AnimatedSection";
import FloatingElements from "../components/FloatingElements";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedCounter from "../components/AnimatedCounter";
import { MdComputer } from "react-icons/md";
import { CiCloud, CiShoppingCart } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

const Home = () => {
  const features = [
    "Expert AI/ML Engineers",
    "Custom Model Development",
    "Enterprise AI Deployment",
    "24/7 AI Infrastructure Support",
  ];

  const stats = [
    { number: 100, label: "AI Projects Delivered", suffix: "+" },
    { number: 98, label: "Client Satisfaction", suffix: "%" },
    { number: 50, label: "AI Models Deployed", suffix: "+" },
    { number: 24, label: "AI Support Available", suffix: "/7" },
  ];

  const testimonials = [
    {
      name: "Kalpesh Makwana",
      company: "clicxia.com",
      text: "Scalezix's AI solutions transformed our customer service operations. Their custom chatbot reduced response times by 70% and improved customer satisfaction significantly.",
      rating: 5,
    },
    {
      name: "Suresh Singh",
      company: "venturevibeglobalhoppers.com",
      text: "The AI-powered recommendation system they built increased our conversion rates by 45%. Their expertise in machine learning is truly impressive.",
      rating: 5,
    },
    {
      name: "Mayur Makwana",
      company: "espoirpro.shop",
      text: "Their AI infrastructure deployment on AWS was seamless. The automated scaling and monitoring they set up has been running flawlessly for months.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-16 sm:pt-20 relative overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Scalezix",
            url: "https://scalezix.com",
            description:
              "AI consulting, development, and deployment services. Custom AI models, LLM fine-tuning, and enterprise AI infrastructure with 98% client satisfaction.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://scalezix.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Transform Your Business with
                  <span className="gradient-text-blue block animate-gradient-shift">
                    {" "}
                    AI-Powered Solutions
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Unlock the power of artificial intelligence with our cutting-edge AI services. 
                  From custom model development to enterprise AI deployment, we help businesses 
                  leverage AI to drive innovation, efficiency, and growth.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {features.map((feature, index) => (
                    <AnimatedSection
                      key={index}
                      animation="fadeInLeft"
                      delay={index * 100}
                      className={`stagger-${index + 1}`}
                    >
                      <div className="flex items-center gap-3 group">
                        <CheckCircle className="w-5 h-5 text-green-500 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-gray-700 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton
                    to="/contact"
                    variant="primary"
                    size="lg"
                    showArrow
                    className="animate-bounce-gentle"
                  >
                    Start Your Project
                  </AnimatedButton>

                  <AnimatedButton to="/portfolio" variant="outline" size="lg">
                    View Portfolio
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-20 animate-pulse-slow"></div> */}
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI Solutions and Machine Learning"
                  className="rounded-2xl shadow-2xl relative z-10 hover-lift w-full"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover-scale">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">
                        <AnimatedCounter end={500} suffix="+" />
                      </div>
                      <div className="text-gray-600 text-sm sm:text-base">
                        Happy Clients
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={index}
                  animation="scaleIn"
                  delay={index * 100}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 hover-lift">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-blue mb-2">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                AI Services & Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">AI Development</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Custom AI Model Development</li>
                    <li>• LLM Fine-tuning & Optimization</li>
                    <li>• Computer Vision Solutions</li>
                    <li>• Natural Language Processing</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">
                    AI Infrastructure & Deployment
                  </h3>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Cloud AI Deployment (AWS/GCP/Azure)</li>
                    <li>• MLOps & Model Monitoring</li>
                    <li>• API Development & Integration</li>
                    <li>• Scalable AI Infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI solutions from strategy and development to deployment and optimization
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "AI Consulting",
                description:
                  "Strategic AI consulting to identify opportunities and create implementation roadmaps",
                icon: "🧠",
                link: "/services/ai-consulting",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Custom AI Development",
                description:
                  "Build custom AI models, chatbots, and intelligent automation solutions",
                icon: "🤖",
                link: "/services/ai-development",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "LLM Fine-tuning",
                description:
                  "Fine-tune large language models for your specific domain and use cases",
                icon: "🎯",
                link: "/services/ai-development",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "AI Infrastructure",
                description:
                  "Scalable AI infrastructure with monitoring, optimization, and 24/7 support",
                icon: "⚙️",
                link: "/services/ai-infrastructure",
                gradient: "from-green-500 to-teal-500",
              },
              {
                title: "Cloud AI Deployment",
                description:
                  "Deploy AI models on AWS, GCP, or Azure with enterprise-grade reliability",
                icon: "☁️",
                link: "/services/cloud-services",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "MLOps & Automation",
                description:
                  "Streamline ML workflows with automated pipelines and continuous deployment",
                icon: "🔄",
                link: "/services/ai-infrastructure",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                  <div
                    className={
                      "w-20 h-16 sm:w-20 sm:h-16 text-5xl group-hover:scale-110 transition-transform duration-300"
                    }
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8 sm:mt-12" delay={600}>
            <AnimatedButton to="/services" variant="primary" size="lg">
              View All Services
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry Partners */}
      <IndustryPartners />

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 150}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-sm sm:text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                      <a
                        target="_blank"
                        href={`https://${testimonial.company}`}
                        className="text-gray-500 text-xs sm:text-sm"
                      >
                        {testimonial.company}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-shift relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Let's discuss how AI can transform your business operations, enhance decision-making, 
              and unlock new opportunities for growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started Today
              </AnimatedButton>
              <AnimatedButton
                to="/portfolio"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Our Work
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
