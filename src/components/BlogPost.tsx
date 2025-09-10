'use client';

import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, Clock } from 'lucide-react';

interface BlogPostProps {
  onClose: () => void;
  postId: string;
}

const blogPosts = {
  'tides-beverage-co': {
    title: 'Building TidesBeverageCo.com: A Complete E-commerce Solution',
    excerpt: 'How I helped a local beverage company establish their online presence with a custom Shopify storefront and seamless customer experience.',
    date: 'December 15, 2024',
    readTime: '5 min read',
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
      <p>I chose Shopify as the foundation for this project, but with a custom approach that went beyond the standard template. Here's what I built:</p>
      
      <h4>Custom Design & Branding</h4>
      <p>Working closely with the owner, I developed a custom theme that captured the essence of their brand. The design emphasizes clean lines, ocean-inspired colors, and professional photography that showcases their products beautifully.</p>
      
      <h4>E-commerce Optimization</h4>
      <p>The storefront includes:</p>
      <ul>
        <li>Streamlined product catalog with high-quality images</li>
        <li>Intuitive navigation and search functionality</li>
        <li>Secure checkout process with multiple payment options</li>
        <li>Inventory management integration</li>
        <li>Customer account system</li>
      </ul>
      
      <h4>Mobile-First Approach</h4>
      <p>Recognizing that many customers would be browsing on mobile devices, I ensured the entire site was optimized for mobile users, with fast loading times and intuitive touch navigation.</p>
      
      <h3>Technical Implementation</h3>
      <p>While Shopify provided the e-commerce backbone, I customized several key areas:</p>
      <ul>
        <li><strong>Custom Liquid Templates:</strong> Created unique page layouts and product displays</li>
        <li><strong>CSS/JavaScript Customization:</strong> Enhanced the user experience with smooth animations and interactions</li>
        <li><strong>App Integrations:</strong> Connected essential tools for inventory, analytics, and customer service</li>
        <li><strong>SEO Optimization:</strong> Implemented proper meta tags, structured data, and site speed optimization</li>
      </ul>
      
      <h3>Results & Impact</h3>
      <p>Since launch, TidesBeverageCo.com has seen:</p>
      <ul>
        <li>Significant increase in online sales</li>
        <li>Improved customer engagement and retention</li>
        <li>Streamlined order management for the business owner</li>
        <li>Professional online presence that builds trust with customers</li>
      </ul>
      
      <h3>Key Takeaways</h3>
      <p>This project reinforced the importance of understanding a client's specific needs and business goals. By choosing the right platform (Shopify) and customizing it appropriately, we created a solution that was both powerful and manageable for a small business owner.</p>
      
      <p>The success of this project demonstrates how thoughtful web development can directly impact a business's bottom line and operational efficiency.</p>
    `,
    tags: ['E-commerce', 'Shopify', 'Web Development', 'Small Business', 'Custom Design'],
    externalLink: 'https://tidesbeverageco.com'
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
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-12 h-12 cursor-pointer text-indent-16 overflow-hidden whitespace-nowrap z-10"
          aria-label="Close"
        >
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-transparent hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center">
            <X className="w-5 h-5 text-white" />
          </div>
        </button>
        <div className="text-center text-gray-400">
          <p>Blog post not found.</p>
        </div>
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
        <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-4 border-b border-white w-max pb-2">
          Blog
        </h2>
        
        {/* Post Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>
        
        <div className="mb-8 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
          <p className="text-gray-300 italic mb-4">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div 
          className="text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* External Link */}
        {post.externalLink && (
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Visit the Live Site</h4>
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
      </div>
    </motion.article>
  );
}