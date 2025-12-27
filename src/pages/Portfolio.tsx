import { useState } from "react";
import {
  ExternalLink,
  Users,
  Award,
  Zap,
  Globe,
  ShoppingCart,
  Leaf,
  Settings,
  GraduationCap,
  User,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedButton from "../components/AnimatedButton";
import anantparyatanyaatra from "../assets/anantparyatanyaatra.png";
import espoir from "../assets/espoirpro.png";
import sadhnaa from "../assets/sadhnaa.png";
import sonalagritech from "../assets/sonalagritech_image.png";
import kdvalves from "../assets/kdvalves.png";
import academy_scalezix from "../assets/academy_scalezix.png";
import harsh_Kuhikar from "../assets/harsh_Kuhikar.png";
import venturevibeglobalhoppers from "../assets/venturevibeglobalhoppers.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "AI Solutions",
    "LLM Applications",
    "Computer Vision",
    "Chatbots & NLP",
  ];

  const projects = [
    {
      title: "Anant Paryatan Yaatra",
      category: "Business Websites",
      description:
        "Premium travel and tourism website offering comprehensive travel packages, destination guides, and booking services with stunning visual design.",
      image: anantparyatanyaatra,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Google Maps API",
      ],
      liveUrl: "https://anantparyatanyaatra.com",
      featured: true,
      icon: <Globe className="w-6 h-6" />,
      stats: { visitors: "50K+", conversion: "12%", performance: "98%" },
      year: "2023",
    },
    {
      title: "Venture Vibe Global Hoppers",
      category: "Business Websites",
      description:
        "Dynamic travel community platform connecting global travelers with unique experiences, local guides, and adventure opportunities worldwide.",
      image: venturevibeglobalhoppers,
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "WebRTC"],
      liveUrl: "https://venturevibeglobalhoppers.com",
      featured: true,
      icon: <Users className="w-6 h-6" />,
      stats: { visitors: "35K+", conversion: "15%", performance: "96%" },
      year: "2023",
    },
    {
      title: "Sonal Agritech",
      category: "Business Websites",
      description:
        "Modern agricultural technology company website showcasing innovative farming solutions, equipment, and sustainable agriculture practices.",
      image: sonalagritech,
      technologies: [
        "React",
        "Express.js",
        "MySQL",
        "AWS S3",
        "Payment Gateway",
      ],
      liveUrl: "https://sonalagritech.co.in",
      featured: false,
      icon: <Leaf className="w-6 h-6" />,
      stats: { visitors: "25K+", conversion: "18%", performance: "94%" },
      year: "2025",
    },
    {
      title: "KD Valves",
      category: "Business Websites",
      description:
        "Industrial valve manufacturing company website with product catalogs, technical specifications, and B2B e-commerce functionality.",
      image: kdvalves,
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
      liveUrl: "https://kdvalves.com",
      featured: false,
      icon: <Settings className="w-6 h-6" />,
      stats: { visitors: "15K+", conversion: "22%", performance: "92%" },
      year: "2022",
    },
    {
      title: "Sadhnaa",
      category: "E-commerce",
      description:
        "Non-profit organization website promoting social welfare, education initiatives, and community development programs with donation integration.",
      image: sadhnaa,
      technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Email API"],
      liveUrl: "https://sadhnaa.in",
      featured: false,
      icon: <ShoppingCart className="w-6 h-6" />,
      stats: { visitors: "20K+", conversion: "25%", performance: "95%" },
      year: "2024",
    },
    {
      title: "Espoir Professional",
      category: "E-commerce",
      description:
        "Premium e-commerce platform for professional products with advanced filtering, secure payments, and inventory management system.",
      image: espoir,
      technologies: ["Shopify", "React", "Node.js", "Stripe", "AWS"],
      liveUrl: "https://espoirpro.shop",
      featured: true,
      icon: <ShoppingCart className="w-6 h-6" />,
      stats: { visitors: "40K+", conversion: "8%", performance: "97%" },
      year: "2024",
    },
    {
      title: "Scalezix Platform",
      category: "SaaS Platforms",
      description:
        "Our own company website showcasing technology solutions, services, and client success stories with modern design and animations.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Netlify"],
      liveUrl: "https://scalezix.com",
      featured: true,
      icon: <Zap className="w-6 h-6" />,
      stats: { visitors: "100K+", conversion: "20%", performance: "99%" },
      year: "2025",
    },
    {
      title: "Scalezix Academy",
      category: "SaaS Platforms",
      description:
        "Educational platform offering technology courses, tutorials, and certification programs with interactive learning management system.",
      image: academy_scalezix,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Video API"],
      liveUrl: "https://academy.scalezix.com",
      featured: false,
      icon: <GraduationCap className="w-6 h-6" />,
      stats: { visitors: "30K+", conversion: "35%", performance: "96%" },
      year: "2024",
    },
    {
      title: "Harsh Kuhikar Portfolio",
      category: "Personal Portfolio",
      description:
        "Personal portfolio website showcasing development skills, projects, and professional experience with modern design and smooth animations.",
      image: harsh_Kuhikar,
      technologies: [
        "React",
        "Three.js",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
      ],
      liveUrl: "https://harsh-kuhikar.vercel.app",
      featured: false,
      icon: <User className="w-6 h-6" />,
      stats: { visitors: "10K+", conversion: "45%", performance: "98%" },
      year: "2024",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  const stats = [
    { number: 100, label: "AI Projects Delivered", suffix: "+" },
    { number: 98, label: "Client Satisfaction", suffix: "%" },
    { number: 50, label: "AI Models Deployed", suffix: "+" },
    { number: 3, label: "Years AI Experience", suffix: "+" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text-blue">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our latest AI projects showcasing innovative machine learning models, 
              intelligent automation solutions, and cutting-edge AI implementations that drive 
              measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <AnimatedButton
                to="/contact"
                variant="primary"
                size="lg"
                showArrow
              >
                Start Your Project
              </AnimatedButton>
              <AnimatedButton to="/services" variant="outline" size="lg">
                Our Services
              </AnimatedButton>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text-blue mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured AI Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting our most successful AI implementations and intelligent solutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 150}
              >
                <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {project.year}
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black w-max flex backdrop-blur-sm p-3 rounded-full hover:bg-black transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <div className="text-blue-600">{project.icon}</div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {project.stats.visitors}
                        </div>
                        <div className="text-xs text-gray-500">Visitors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {project.stats.conversion}
                        </div>
                        <div className="text-xs text-gray-500">Conversion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {project.stats.performance}
                        </div>
                        <div className="text-xs text-gray-500">Performance</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        View Live <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All AI Projects
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Browse through our complete portfolio of AI solutions and intelligent applications
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative">
                    {/* Scrolling image wrapper */}
                    <div className="scroll-container">
                      <div className="scroll-track">
                        {/* first copy */}
                        <img src={project.image} alt={project.title} />
                        {/* duplicate copy for seamless loop */}
                        <img
                          src={project.image}
                          alt={`${project.title} duplicate`}
                        />
                      </div>
                    </div>

                    {/* gradient overlay, year badge and link button remain the same */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {project.year}
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black w-max flex backdrop-blur-sm p-3 rounded-full hover:bg-black transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-100 p-1.5 rounded-lg">
                          <div className="text-blue-600 scale-75">
                            {project.icon}
                          </div>
                        </div>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      {project.featured && (
                        <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 text-center py-2 rounded-lg hover:bg-blue-50"
                      >
                        View Live
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's create intelligent AI applications together. Contact us to discuss
              your AI project requirements and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started
              </AnimatedButton>
              <AnimatedButton
                to="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Our Services
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
