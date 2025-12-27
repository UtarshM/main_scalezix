// Contact.tsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormDataType = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isOpeningEmail, setIsOpeningEmail] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const validateForm = (data: FormDataType) => {
    if (!data.name.trim()) return "Please enter your full name.";
    if (!data.email.trim()) return "Please enter your email address.";
    // basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email))
      return "Please enter a valid email address.";
    if (!data.message.trim()) return "Please enter project details or message.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsOpeningEmail(true);

    emailjs
      .send(
        "service_in1c11j", // from EmailJS dashboard
        "template_bm1vk5q", // template you created
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
        "C9NXHL4AYbCQEf6dY" // from EmailJS dashboard
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            budget: "",
            message: "",
          });
          setIsOpeningEmail(false);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send email. Try again later.");
          setIsOpeningEmail(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email Us",
      details: "contact@scalezix.com",
      description: "Send us an email anytime!",
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Call Us",
      details: "+91 82000 10241",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Visit Us",
      details: "i-Hub, Ahmedabad, Gujarat, India",
      description: "Come say hello at our office",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Weekend support available",
    },
  ];

  const services = [
    "AI Consulting & Strategy",
    "Custom AI Development",
    "LLM Fine-tuning",
    "Computer Vision",
    "Natural Language Processing",
    "AI Infrastructure & MLOps",
    "Cloud AI Deployment",
    "Other",
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not sure yet",
  ];

  const whyChooseUs = [
    "Free consultation and project estimation",
    "Experienced team with 5+ years expertise",
    "24/7 support and maintenance",
    "Competitive pricing and fast delivery",
    "100% satisfaction guarantee",
    "Agile development methodology",
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Scalezix",
            description:
              "Get in touch with Scalezix for web development, AI solutions, and digital marketing services",
            provider: {
              "@type": "Organization",
              name: "Scalezix",
              telephone: "+91-8200010241",
              email: "contact@scalezix.com",
            },
          })}
        </script>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            Ready to transform your business with AI-powered solutions?
            Contact our expert AI team for a free consultation and discover how we
            can help you leverage artificial intelligence to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918200010241"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Call Now
            </a>
            <a
              href="mailto:contact@scalezix.com"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <div className="text-blue-600">{info.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  {info.details}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {error && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="+91 8200010241"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isOpeningEmail}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                    isOpeningEmail ? "opacity-70 cursor-wait" : ""
                  }`}
                >
                  {isOpeningEmail ? "Opening Email..." : "Send Message"}
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Why Choose Scalezix?
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What You Get When Working With Us
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {whyChooseUs.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We understand that time is crucial for AI projects. That's
                  why we guarantee:
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">
                      Response within 2 hours during business hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">
                      Free consultation call within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">
                      Detailed AI project proposal within 48 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Visit Our Office
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We'd love to meet you in person. Schedule a visit to our office.
            </p>
          </div>

          <div className="bg-gray-300 rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.901125956709!2d72.54143281089299!3d23.03194427908035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8521db921fad%3A0x8f192b2f852e333c!2siHub%20Gujarat!5e1!3m2!1sen!2sin!4v1760349036017!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="text-gray-600 text-center text-sm sm:text-base mt-3">
            i-Hub
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
