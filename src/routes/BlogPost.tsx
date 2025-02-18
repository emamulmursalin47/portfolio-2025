
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

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

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32" id="blog-post">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl overflow-hidden">
          <div className="relative h-[400px]">
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
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>
            </div>

            <div
              className="prose prose-lg  max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </motion.div>
    </div>
  );
};

export default BlogPost;