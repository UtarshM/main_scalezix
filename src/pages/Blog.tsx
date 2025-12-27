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
    "AI & Machine Learning",
    "LLM & GPT",
    "Computer Vision",
    "MLOps & Deployment",
    "AI Infrastructure",
    "AI Trends",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2025",
      excerpt:
        "Explore how artificial intelligence is revolutionizing business operations, from automated decision-making to intelligent customer experiences.",
      content:
        "Artificial Intelligence is transforming the business landscape at an unprecedented pace. As we move through 2025, companies are witnessing remarkable innovations that are reshaping how we operate, make decisions, and serve customers...",
      author: "Utkarsh Makwana",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      views: "2.5K",
      tags: ["AI", "Business Intelligence", "Machine Learning", "Automation"],
      featured: true,
    },
    {
      id: 2,
      title: "Fine-tuning Large Language Models: A Complete Guide",
      excerpt:
        "Learn the best practices for fine-tuning LLMs like GPT-4, Claude, and Llama for domain-specific applications.",
      content:
        "Large Language Models have revolutionized AI applications, but fine-tuning them for specific use cases is crucial for optimal performance. This guide covers everything you need to know about LLM fine-tuning...",
      author: "Om Jani",
      date: "2024-01-12",
      category: "LLM & GPT",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min read",
      views: "3.2K",
      tags: ["LLM", "GPT", "Fine-tuning", "NLP"],
      featured: true,
    },
    {
      id: 3,
      title: "Cloud AI Deployment: Moving Your Models to Production",
      excerpt:
        "A comprehensive guide to deploying AI models on AWS, GCP, and Azure with auto-scaling and monitoring.",
      content:
        "Deploying AI models to production requires careful planning and robust infrastructure. This guide covers best practices for cloud AI deployment across major platforms...",
      author: "Om Jani",
      date: "2024-01-10",
      category: "MLOps & Deployment",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "10 min read",
      views: "3.2K",
      tags: ["AWS", "Cloud Deployment", "MLOps", "AI Infrastructure"],
      featured: true,
    },
    {
      id: 4,
      title: "Computer Vision Applications: From Theory to Production",
      excerpt:
        "Discover how computer vision is transforming industries with real-world applications and implementation strategies.",
      content:
        "Computer vision technology continues to evolve rapidly, enabling new applications across industries. From medical imaging to autonomous vehicles, CV is reshaping how machines perceive the world...",
      author: "Utkarsh Makwana",
      date: "2024-01-08",
      category: "Computer Vision",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "9 min read",
      views: "2.8K",
      tags: ["Computer Vision", "Deep Learning", "Image Recognition", "AI"],
      featured: false,
    },
    {
      id: 5,
      title: "Building AI Infrastructure: MLOps Best Practices",
      excerpt:
        "Learn how to build robust AI infrastructure with automated pipelines, monitoring, and continuous deployment.",
      content:
        "Building scalable AI infrastructure is crucial for production ML systems. This guide covers MLOps best practices including CI/CD pipelines, model monitoring, and automated retraining...",
      author: "Om Jani",
      date: "2024-01-05",
      category: "AI Infrastructure",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "11 min read",
      views: "4.1K",
      tags: ["MLOps", "AI Infrastructure", "DevOps", "Automation"],
      featured: false,
    },
    {
      id: 6,
      title: "Prompt Engineering: Mastering AI Communication",
      excerpt:
        "Explore advanced prompt engineering techniques to get better results from large language models.",
      content:
        "Prompt engineering has become a critical skill in the AI era. Learn how to craft effective prompts that unlock the full potential of LLMs for your specific use cases...",
      author: "Utkarsh Makwana",
      date: "2024-01-03",
      category: "LLM & GPT",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read",
      views: "3.5K",
      tags: ["Prompt Engineering", "LLM", "GPT", "AI"],
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
      title: "AI Model Optimization: Speed, Accuracy, and Cost",
      excerpt:
        "Master the latest techniques for optimizing AI models to improve performance while reducing costs.",
      content:
        "AI model optimization has become crucial as models grow larger and more complex. Learn techniques for quantization, pruning, and distillation to optimize your models...",
      author: "Om Jani",
      date: "2023-12-28",
      category: "AI & Machine Learning",
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min read",
      views: "3.5K",
      tags: ["Model Optimization", "AI Performance", "Cost Reduction", "Efficiency"],
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
          name: "Scalezix Blog - AI & Machine Learning Insights",
          description:
            "Latest insights on AI, machine learning, LLMs, computer vision, and MLOps from Scalezix AI experts",
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
              Scalezix AI <span className="gradient-text-blue">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Stay updated with the latest insights on AI, machine learning, LLMs, 
              model deployment, and AI infrastructure from our expert team.
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
                        <button
                          onClick={() => alert('Full blog post coming soon! Stay tuned for detailed articles.')}
                          className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 inline-flex items-center gap-2 group"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
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
                          <button
                            onClick={() => alert('Full blog post coming soon! Stay tuned for detailed articles.')}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                          >
                            Read More →
                          </button>
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
                        <button
                          key={post.id}
                          onClick={() => alert('Full blog post coming soon! Stay tuned for detailed articles.')}
                          className="block group w-full text-left"
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
                        </button>
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
                    <h3 className="text-xl font-bold mb-4">Stay Updated on AI</h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      Get the latest AI insights, tutorials, and case studies delivered to your
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
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you leverage AI to achieve your business goals 
              with our expert AI development and consulting services
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
