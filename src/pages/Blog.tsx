import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Clock,
  Eye,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedButton from "../components/AnimatedButton";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "AI & Machine Learning",
    "Digital Marketing",
    "E-commerce",
    "Cloud Computing",
    "Tech Trends",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences.",
      content:
        "Artificial Intelligence is transforming the web development landscape at an unprecedented pace. As we move through 2024, developers and businesses alike are witnessing remarkable innovations that are reshaping how we build, deploy, and maintain web applications...",
      author: "Utkarsh Makwana",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      views: "2.5K",
      tags: ["AI", "Web Development", "Machine Learning", "Automation"],
      featured: true,
    },
    {
      id: 2,
      title: "Building High-Performance E-commerce Stores with Shopify Plus",
      excerpt:
        "Learn the best practices for creating scalable e-commerce solutions that can handle high traffic and drive conversions.",
      content:
        "E-commerce has evolved dramatically, and businesses need platforms that can scale with their growth. Shopify Plus offers enterprise-level features that enable businesses to create high-performance online stores...",
      author: "Harsh Kuhikar",
      date: "2024-01-12",
      category: "E-commerce",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
      views: "1.8K",
      tags: ["Shopify", "E-commerce", "Performance", "Scaling"],
      featured: false,
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: Moving Your Business to AWS",
      excerpt:
        "A comprehensive guide to planning and executing a successful cloud migration strategy for your business applications.",
      content:
        "Cloud migration is no longer a luxury but a necessity for businesses looking to stay competitive. Amazon Web Services (AWS) provides a robust platform for hosting applications, but migration requires careful planning...",
      author: "Om Jani",
      date: "2024-01-10",
      category: "Cloud Computing",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min read",
      views: "3.2K",
      tags: ["AWS", "Cloud Migration", "DevOps", "Infrastructure"],
      featured: true,
    },
    {
      id: 4,
      title: "Digital Marketing Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the competition with these emerging digital marketing trends and strategies for the new year.",
      content:
        "Digital marketing continues to evolve rapidly, with new technologies and consumer behaviors shaping the landscape. As we navigate 2024, businesses must adapt to emerging trends to maintain their competitive edge...",
      author: "Utkarsh Makwana",
      date: "2024-01-08",
      category: "Digital Marketing",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read",
      views: "2.1K",
      tags: ["Digital Marketing", "SEO", "Social Media", "PPC"],
      featured: false,
    },
    {
      id: 5,
      title: "React vs Next.js: Choosing the Right Framework for Your Project",
      excerpt:
        "Compare React and Next.js to understand which framework best suits your web development needs and project requirements.",
      content:
        "Choosing the right JavaScript framework is crucial for project success. React and Next.js are both powerful tools, but they serve different purposes and have unique advantages...",
      author: "Harsh Kuhikar",
      date: "2024-01-05",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "9 min read",
      views: "4.1K",
      tags: ["React", "Next.js", "JavaScript", "Frontend"],
      featured: false,
    },
    {
      id: 6,
      title: "The Rise of No-Code and Low-Code Development Platforms",
      excerpt:
        "Explore how no-code and low-code platforms are democratizing software development and changing the industry landscape.",
      content:
        "The software development industry is experiencing a paradigm shift with the rise of no-code and low-code platforms. These tools are making application development accessible to non-technical users...",
      author: "Om Jani",
      date: "2024-01-03",
      category: "Tech Trends",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
      views: "1.9K",
      tags: ["No-Code", "Low-Code", "Development", "Automation"],
      featured: false,
    },
    {
      id: 7,
      title: "Implementing AI Chatbots for Better Customer Service",
      excerpt:
        "Learn how to integrate AI-powered chatbots into your business to improve customer support and engagement.",
      content:
        "Customer service is evolving with AI technology. Chatbots powered by natural language processing can provide 24/7 support, handle multiple queries simultaneously, and improve customer satisfaction...",
      author: "Om Jani",
      date: "2024-01-01",
      category: "AI & Machine Learning",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
      views: "2.7K",
      tags: ["AI", "Chatbots", "Customer Service", "NLP"],
      featured: false,
    },
    {
      id: 8,
      title: "SEO Best Practices for Modern Web Applications",
      excerpt:
        "Master the latest SEO techniques to improve your website's search engine rankings and drive organic traffic.",
      content:
        "Search Engine Optimization has evolved significantly with changing algorithms and user behaviors. Modern SEO requires a comprehensive approach that includes technical optimization, content strategy, and user experience...",
      author: "Utkarsh Makwana",
      date: "2023-12-28",
      category: "Digital Marketing",
      image:
        "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      views: "3.5K",
      tags: ["SEO", "Web Development", "Content Marketing", "Analytics"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="pt-20">
      {/* SEO Meta Tags */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Scalezix Blog - Web Development & AI Insights",
          description:
            "Latest insights on web development, AI, digital marketing, and technology trends from Scalezix experts",
          url: "https://scalezix.com/blog",
          publisher: {
            "@type": "Organization",
            name: "Scalezix",
            logo: "https://scalezix.com/logo.png",
          },
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.date,
            image: post.image,
          })),
        })}
      </script>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Scalezix <span className="gradient-text-blue">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay updated with the latest insights on web development, AI,
              digital marketing, and technology trends from our expert team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and insightful content
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <AnimatedSection
                  key={post.id}
                  animation="fadeInUp"
                  delay={index * 150}
                >
                  <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span>{post.views} views</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 inline-flex items-center gap-2 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatedSection className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCategory === "All"
                    ? "All Articles"
                    : `${selectedCategory} Articles`}
                </h2>
                <p className="text-gray-600">
                  {filteredPosts.length} article
                  {filteredPosts.length !== 1 ? "s" : ""} found
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <AnimatedSection
                    key={post.id}
                    animation="fadeInUp"
                    delay={index * 100}
                  >
                    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <AnimatedSection className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No articles found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search terms or category filter.
                  </p>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Recent Posts */}
                <AnimatedSection>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((post, index) => (
                        <Link
                          key={post.id}
                          to={`/blog/${post.id}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {new Date(post.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Categories */}
                <AnimatedSection>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.slice(1).map((category) => {
                        const count = blogPosts.filter(
                          (post) => post.category === category
                        ).length;
                        return (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                              selectedCategory === category
                                ? "bg-blue-100 text-blue-600"
                                : "text-gray-600 hover:bg-gray-100"
                            }`}
                          >
                            <span>{category}</span>
                            <span className="text-sm">({count})</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Newsletter */}
                <AnimatedSection>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      Get the latest articles and insights delivered to your
                      inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                      />
                      <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-shift relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital goals with
              our expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton
                to="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                showArrow
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

export default Blog;
