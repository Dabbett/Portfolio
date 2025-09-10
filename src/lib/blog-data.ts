export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  keywords: string[];
  metaDescription: string;
  externalLink?: string;
  featuredImage?: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 'tides-beverage-co',
    slug: 'tides-beverage-co-ecommerce-solution',
    title: 'Complete E-commerce Solution: Custom Shopify Development',
    excerpt: 'How I built a custom Shopify storefront with mobile optimization, conversion-focused design, and seamless customer experience for a local business.',
    content: `
      <p>When a local beverage company approached me about building their online presence, they had a clear vision: a professional, easy-to-navigate website that would showcase their products and allow customers to purchase directly online.</p>
      
      <h2>The Challenge</h2>
      <p>As a small, local business, they needed a solution that was both cost-effective and scalable. They required:</p>
      <ul>
        <li>A clean, modern design that reflected their brand identity</li>
        <li>E-commerce functionality for direct sales</li>
        <li>Mobile-responsive design for customers on-the-go</li>
        <li>Easy content management for the owner</li>
        <li>Integration with their existing business processes</li>
      </ul>
      
      <h2>The Solution</h2>
      <p>I chose Shopify as the foundation for this project, which provided the perfect balance of functionality and ease of use. Here's what I delivered:</p>
      
      <h3>Custom Design & Branding</h3>
      <p>I created a custom theme that perfectly captured the coastal, craft beverage aesthetic. The design features:</p>
      <ul>
        <li>Ocean-inspired color palette with blues and teals</li>
        <li>Clean, modern typography that's easy to read</li>
        <li>High-quality product photography showcase</li>
        <li>Intuitive navigation that guides customers to products</li>
      </ul>
      
      <h3>E-commerce Optimization</h3>
      <p>The store is fully optimized for conversions with:</p>
      <ul>
        <li>Streamlined checkout process</li>
        <li>Multiple payment options (credit card, PayPal, Apple Pay)</li>
        <li>Inventory management system</li>
        <li>Order tracking and customer notifications</li>
        <li>SEO optimization for better search visibility</li>
      </ul>
      
      <h3>Mobile-First Approach</h3>
      <p>Recognizing that most customers browse on mobile devices, I ensured the site is fully responsive with:</p>
      <ul>
        <li>Touch-friendly navigation and buttons</li>
        <li>Optimized product images for mobile viewing</li>
        <li>Fast loading times on all devices</li>
        <li>Easy-to-use mobile checkout</li>
      </ul>
      
      <h2>Results & Impact</h2>
      <p>Since launching, the business has seen:</p>
      <ul>
        <li>Increased online sales and customer reach</li>
        <li>Professional brand presence that builds trust</li>
        <li>Easy content management for the owner</li>
        <li>Positive customer feedback on the shopping experience</li>
      </ul>
      
      <p>This project demonstrates how the right technology choices and attention to user experience can help small businesses compete effectively in the digital marketplace.</p>
    `,
    date: '2025-9-10',
    readTime: '5 min read',
    tags: ['E-commerce', 'Shopify', 'Web Development', 'Small Business', 'Custom Design'],
    keywords: ['e-commerce development', 'Shopify customization', 'small business web design', 'online store development', 'mobile-first design', 'conversion optimization', 'custom e-commerce solutions', 'web development case study'],
    metaDescription: 'E-commerce development case study: How I built a complete Shopify solution with custom design, mobile optimization, and conversion-focused features for a local business.',
    externalLink: 'https://tidesbeverage.com',
    author: {
      name: 'Dylan Abbett',
      bio: 'Dylan is a Software developer specializing in React, Next.js, TypeScript, and e-commerce solutions. Helping small businesses establish their online presence. Visit <a href="https://dylanabbett.com" className="text-blue-400 hover:text-blue-300 font-bold underline">DylanAbbett.com</a> to learn more.',
    }
  },
  {
    id: 'heidi-esparrago-therapy',
    slug: 'heidiesparrago-therapy-website',
    title: 'Professional Therapy Website: Responsive Design & Contact Integration',
    excerpt: 'How I created a responsive, professional therapy website with seamless contact form integration, mobile-first design, and client-focused features.',
    content: `
      <p>Building trust in mental health services starts with the right digital presence. When a therapist reached out for help establishing her online practice, the goal was clear: create a welcoming space where clients could easily connect and feel supported from their first visit.</p>
      
      <h2>The Challenge</h2>
      <p>Starting a private practice means building a new client base. Creating a therapy website requires a delicate balance of professionalism, accessibility, and trust-building to attract and retain clients. The therapist needed:</p>
      <ul>
        <li>A warm, welcoming design that feels approachable</li>
        <li>Mobile-responsive layout for clients browsing on any device</li>
        <li>Easy-to-use contact form for potential clients</li>
        <li>Professional presentation of her credentials and services</li>
        <li>Fast loading times and reliable performance</li>
        <li>SEO optimization to help clients find her services</li>
      </ul>
      
      <h2>The Solution</h2>
      <p>I built a custom website using modern web technologies that perfectly captured Heidi's professional yet approachable brand. Here's what I delivered:</p>
      
      <h3>Professional Design & Branding</h3>
      <p>The website features a clean, calming design that reflects the therapeutic environment:</p>
      <ul>
        <li>Soft, professional color palette that conveys trust and calm</li>
        <li>Clear typography that's easy to read for all ages</li>
        <li>Thoughtful use of whitespace for a clean, uncluttered feel</li>
        <li>Professional photography that showcases Heidi's approachable nature</li>
      </ul>
      
      <h3>Mobile-First Responsive Design</h3>
      <p>Recognizing that many clients research therapy services on mobile devices, I ensured the site works perfectly on all screen sizes:</p>
      <ul>
        <li>Touch-friendly navigation and buttons</li>
        <li>Optimized images that load quickly on mobile networks</li>
        <li>Easy-to-use contact form on all devices</li>
        <li>Fast loading times across all platforms</li>
      </ul>
      
      <h3>Contact Form Integration</h3>
      <p>The contact form is the heart of the website, allowing potential clients to reach out easily:</p>
      <ul>
        <li>Simple, intuitive form fields</li>
        <li>API integration for reliable message delivery</li>
        <li>Professional email notifications to Heidi</li>
        <li>Form validation to ensure complete information</li>
        <li>Privacy-focused design to protect client information</li>
      </ul>
      
      <h3>SEO & Performance Optimization</h3>
      <p>To help potential clients find Heidi's services, I optimized the site for search engines:</p>
      <ul>
        <li>Fast loading times for better user experience</li>
        <li>Optimized images and code for performance</li>
        <li>SEO-friendly URLs and meta tags</li>
        <li>Local SEO optimization for therapy services</li>
      </ul>
      
      <h2>Results & Impact</h2>
      <p>Since launching, the website has helped the therapist build her private practice:</p>
      <ul>
        <li>Establish a professional online presence that attracts new clients</li>
        <li>Receive consistent inquiries from potential clients through the contact form</li>
        <li>Build trust with clients before they even meet, increasing conversion rates</li>
        <li>Showcase her credentials and approach to therapy to stand out from competitors</li>
        <li>Provide a reliable platform for client communication and scheduling</li>
        <li>Fill her client roster more effectively than traditional marketing methods</li>
      </ul>
      
      <p>This project demonstrates how thoughtful web design can support mental health professionals in connecting with clients and building their practice.</p>
    `,
    date: '2024-12-20',
    readTime: '4 min read',
    tags: ['Web Development', 'Therapy Website', 'Responsive Design', 'Contact Forms', 'Professional Services'],
    keywords: ['therapy website', 'mental health website', 'therapist website design', 'responsive web design', 'contact form integration', 'professional services website', 'healthcare web development', 'client website case study'],
    metaDescription: 'Professional services website case study: How I built a responsive therapy website with contact form integration, mobile-first design, and client-focused features.',
    externalLink: 'https://heidiesparrago.com',
    author: {
      name: 'Dylan Abbett',
      bio: 'Dylan is a Software developer specializing in React, Next.js, TypeScript, and e-commerce solutions. Helping small businesses establish their online presence. Visit <a href="https://dylanabbett.com" className="text-blue-400 font-bold hover:text-blue-300 underline">DylanAbbett.com</a> to learn more.',
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
