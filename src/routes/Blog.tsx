import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    {
      id: 1,
      title: 'Building Scalable Systems with PHP',
      excerpt: 'Learn how to architect and implement scalable systems using PHP and modern development practices.',
      content: `
        <h2>Introduction</h2>
        <p>Building scalable systems is crucial for modern web applications. In this article, we'll explore how to leverage PHP's features to create robust, scalable architectures.</p>
        
        <h2>Key Concepts</h2>
        <ul>
          <li>Microservices Architecture</li>
          <li>Caching Strategies</li>
          <li>Load Balancing</li>
          <li>Database Optimization</li>
        </ul>

        <h2>Implementation</h2>
        <p>When implementing scalable systems, it's important to consider both horizontal and vertical scaling. Here's how we can achieve this with PHP...</p>

        <h2>Best Practices</h2>
        <p>Follow these best practices to ensure your PHP applications can scale effectively...</p>

        <h2>Conclusion</h2>
        <p>By following these principles and implementing the right architecture, you can build highly scalable PHP applications that can handle growing user demands.</p>
      `,
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
      slug: 'building-scalable-systems-php',
    },
    {
      id: 2,
      title: 'YOLOv4 Implementation Guide',
      excerpt: 'A comprehensive guide to implementing YOLOv4 for real-time object detection in your projects.',
      content: `
        <h2>Introduction to YOLOv4</h2>
        <p>YOLOv4 represents a significant advancement in real-time object detection. This guide will walk you through its implementation...</p>

        <h2>Architecture Overview</h2>
        <p>Understanding the architecture is crucial for successful implementation. YOLOv4 consists of several key components...</p>

        <h2>Implementation Steps</h2>
        <ol>
          <li>Setting up the environment</li>
          <li>Preparing your dataset</li>
          <li>Training the model</li>
          <li>Optimization techniques</li>
        </ol>

        <h2>Performance Optimization</h2>
        <p>To achieve optimal performance, consider these optimization strategies...</p>

        <h2>Real-world Applications</h2>
        <p>Here are some practical applications and case studies of YOLOv4 in production environments...</p>
      `,
      date: '2024-03-10',
      readTime: '12 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
      slug: 'yolov4-implementation-guide',
    },
    {
      id: 3,
      title: 'Optimizing Content for SEO',
      excerpt: 'Best practices and strategies for optimizing your technical content for search engines.',
      content: `
        <h2>SEO Fundamentals</h2>
        <p>Understanding the basics of SEO is crucial for any content strategy. Let's explore the key components...</p>

        <h2>Technical SEO</h2>
        <p>Technical SEO involves optimizing your website's infrastructure. Here are the essential elements to consider...</p>

        <h2>Content Optimization</h2>
        <ul>
          <li>Keyword Research</li>
          <li>Content Structure</li>
          <li>Meta Tags</li>
          <li>Internal Linking</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>Track your SEO performance using these metrics and tools...</p>

        <h2>Advanced Techniques</h2>
        <p>Take your SEO strategy to the next level with these advanced optimization techniques...</p>
      `,
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800',
      slug: 'optimizing-content-seo',
    },
  ];

  const categories = [
    { name: 'All', count: posts.length },
    { name: 'Web Development', count: posts.filter(post => post.category === 'Web Development').length },
    { name: 'AI/ML', count: posts.filter(post => post.category === 'AI/ML').length },
    { name: 'SEO', count: posts.filter(post => post.category === 'SEO').length },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-32" id="blog">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-white">Blog</h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative h-48 md:h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white dark:text-white mb-4">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-100 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 mb-6">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-purple-100  hover:text-purple-900 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-80">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center justify-between w-full py-2 px-3 rounded-lg transition-colors ${
                        selectedCategory === category.name
                          ? 'bg-purple-500/20 text-grey-600'
                          : ' dark:text-gray-300 hover:bg-purple-500/10'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <span className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        {category.name}
                      </span>
                      <span className="text-purple-600 dark:text-purple-400">{category.count}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/30 backdrop-blur-md rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Newsletter</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Subscribe to get the latest articles and updates.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white/50 border border-purple-500/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;