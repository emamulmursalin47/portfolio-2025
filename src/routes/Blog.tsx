import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Building Scalable Systems with PHP',
      excerpt: 'Learn how to architect and implement scalable systems using PHP and modern development practices.',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
      slug: 'building-scalable-systems-php',
    },
    {
      title: 'YOLOv4 Implementation Guide',
      excerpt: 'A comprehensive guide to implementing YOLOv4 for real-time object detection in your projects.',
      date: '2024-03-10',
      readTime: '12 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
      slug: 'yolov4-implementation-guide',
    },
    {
      title: 'Optimizing Content for SEO',
      excerpt: 'Best practices and strategies for optimizing your technical content for search engines.',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'SEO',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800',
      slug: 'optimizing-content-seo',
    },
  ];

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Web Development', count: 5 },
    { name: 'AI/ML', count: 4 },
    { name: 'SEO', count: 3 },
  ];

  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
            <div className="space-y-8">
              {posts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300"
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
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </a>
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
                className="bg-black/30 backdrop-blur-md rounded-xl p-6 mb-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.a
                      key={index}
                      href={`/blog/category/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between py-2 text-gray-300 hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <span className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        {category.name}
                      </span>
                      <span className="text-purple-400">{category.count}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/30 backdrop-blur-md rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                <p className="text-gray-300 mb-4">
                  Subscribe to get the latest articles and updates.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
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