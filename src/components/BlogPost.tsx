'use client';

import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, Clock } from 'lucide-react';

interface BlogPostProps {
  onClose: () => void;
  postId: string;
}

const blogPosts = {
  'tides-beverage-co': {
    title: 'TidesBeverage.com: Building A Complete E-commerce Solution',
    excerpt: 'How I helped a local beverage company establish their online presence with a custom Shopify storefront and seamless customer experience.',
    date: 'September 10, 2025',
    readTime: '5 min read',
    slug: 'tides-beverage-co-ecommerce-solution',
    metaDescription: 'Case study: How I built a complete e-commerce solution for Tides Beverage Co. using Shopify and mobile-first development. See the results and technical approach.',
    keywords: ['e-commerce development', 'Shopify customization', 'small business web design', 'Tides Beverage Co', 'online store development'],
    content: `
      <p>When the owner of Tides Beverage Co. approached me about building their online presence, they had a clear vision: a professional, easy-to-navigate website that would showcase their craft beverages and allow customers to purchase directly online.</p>
      
      <h3>The Challenge</h3>
      <p>As a small, local business, Tides Beverage Co. needed a solution that was both cost-effective and scalable. They required:</p>
      <ul>
        <li>A clean, modern design that reflected their brand identity</li>
        <li>E-commerce functionality for direct sales</li>
        <li>Mobile-responsive design for customers on-the-go</li>
        <li>Easy content management for the owner</li>
        <li>Integration with their existing business processes</li>
      </ul>
      
      <h3>The Solution</h3>
      <p>I chose Shopify as the foundation for this project, which provided the perfect balance of functionality and ease of use. Here's what I delivered:</p>
      
      <h4>Custom Design & Branding</h4>
      <p>I created a custom theme that perfectly captured the coastal, craft beverage aesthetic. The design features:</p>
      <ul>
        <li>Ocean-inspired color palette with blues and teals</li>
        <li>Clean, modern typography that's easy to read</li>
        <li>High-quality product photography showcase</li>
        <li>Intuitive navigation that guides customers to products</li>
      </ul>
      
      <h4>E-commerce Optimization</h4>
      <p>The store is fully optimized for conversions with:</p>
      <ul>
        <li>Streamlined checkout process</li>
        <li>Multiple payment options (credit card, PayPal, Apple Pay)</li>
        <li>Inventory management system</li>
        <li>Order tracking and customer notifications</li>
        <li>SEO optimization for better search visibility</li>
      </ul>
      
      <h4>Mobile-First Approach</h4>
      <p>Recognizing that most customers browse on mobile devices, I ensured the site is fully responsive with:</p>
      <ul>
        <li>Touch-friendly navigation and buttons</li>
        <li>Optimized product images for mobile viewing</li>
        <li>Fast loading times on all devices</li>
        <li>Easy-to-use mobile checkout</li>
      </ul>
      
      <h3>Results & Impact</h3>
      <p>Since launching, Tides Beverage Co. has seen:</p>
      <ul>
        <li>Increased online sales and customer reach</li>
        <li>Professional brand presence that builds trust</li>
        <li>Easy content management for the owner</li>
        <li>Positive customer feedback on the shopping experience</li>
      </ul>
      
      <p>This project demonstrates how the right technology choices and attention to user experience can help small businesses compete effectively in the digital marketplace.</p>
    `,
    tags: ['E-commerce', 'Shopify', 'Web Development', 'Small Business', 'Custom Design'],
    externalLink: 'https://tidesbeverage.com'
  }
};

export default function BlogPost({ onClose, postId }: BlogPostProps) {
  const post = blogPosts[postId as keyof typeof blogPosts];
  
  if (!post) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.325 }}
        className="relative"
      >
        <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2">
          Post Not Found
        </h2>
        <p>The requested blog post could not be found.</p>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.325 }}
      className="relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute -top-2 -right-2 w-12 h-12 cursor-pointer text-indent-16 overflow-hidden whitespace-nowrap z-10"
        aria-label="Close"
      >
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-transparent hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center">
          <X className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">{post.excerpt}</p>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div 
        className="prose prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* External Link */}
      {post.externalLink && (
        <div className="mt-8 p-6 glass-container rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">See It Live</h3>
              <p className="text-gray-300 text-sm">See the project in action</p>
            </div>
            <a
              href={post.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              View Site
            </a>
          </div>
        </div>
      )}
    </motion.article>
  );
}