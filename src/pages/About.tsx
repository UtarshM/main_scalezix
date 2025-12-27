import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import utm from "../assets/UTM.jpeg";
import harsh from "../assets/harsh_kuhikar.jpg";
import om from "../assets/om_jani.jpeg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-First Approach",
      description:
        "We leverage cutting-edge AI technologies to solve complex business problems and create competitive advantages.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description:
        "Your success is our priority. We work closely with you to understand your needs and deliver AI solutions that exceed expectations.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Research",
      description:
        "We stay at the forefront of AI research, continuously exploring new models, techniques, and best practices.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Enterprise Quality",
      description:
        "Every AI model undergoes rigorous testing, validation, and optimization to ensure production-ready quality.",
    },
  ];

  const team = [
    {
      name: "Utkarsh Makwana",
      role: "Founder & CEO",
      image: utm,
      linkedin: "https://www.linkedin.com/in/utkarsh-makwana-29a0841a9/",
    },
    {
      name: "Om Jani",
      role: "AI Developer",
      image: om,
      bio: "AI Developer with a passion for building intelligent systems and innovative solutions.",
      linkedin: "https://www.linkedin.com/in/om-jani-287o2005/",
    },
    {
      name: "Harsh Kuhikar",
      role: "Frontend Developer",
      image: harsh,
      bio: "Expert Shopify developer specializing in e-commerce solutions and custom store development.",
      linkedin: "https://linkedin.com/in/harsh-kuhikar",
    },
  ];

  const achievements = [
    "100+ AI Projects Delivered",
    "98% Client Satisfaction Rate",
    "50+ AI Models Deployed",
    "24/7 AI Infrastructure Support",
    "Multi-Cloud AI Expertise",
    "Global Client Base",
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Scalezix</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a specialized AI solutions company dedicated to
                helping businesses harness the power of artificial intelligence.
                With deep expertise in machine learning, LLMs, and AI infrastructure, 
                we deliver solutions that drive measurable business impact.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of AI engineers, ML specialists, and data scientists 
                work collaboratively to bring your AI vision to life.
                We believe in building long-term partnerships with our clients,
                providing ongoing support and optimization as your AI capabilities grow.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI Team at Scalezix"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">AI Models Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <div className="text-blue-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of AI engineers and ML specialists is dedicated to delivering
              cutting-edge AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <div className="mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                      LinkedIn
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud of what we've accomplished and the trust our clients
              place in us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4"
              >
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                <span className="text-lg font-semibold text-gray-900">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            To democratize AI and empower businesses of all sizes with 
            intelligent solutions that drive growth, enhance efficiency, and unlock new possibilities. 
            We're committed to being your trusted partner in AI transformation.
          </p>
          <Link
            to="/services"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
