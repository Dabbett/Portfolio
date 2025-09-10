'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, BookOpen } from 'lucide-react';

interface WorkProps {
  onClose: () => void;
  onShowBlogPost?: (postId: string) => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string;
  additionalInfo?: string;
  blogPost?: string;
}

const projects: Project[] = [
  {
    id: 'mangrove',
    title: 'Mangrove',
    description: 'Designed and built as a mobile-first web app, Mangrove offers users a guided emotional journey—from navigating grief to experiencing joy, from burnout to finding inspiration. It goes beyond a typical AI chatbot by asking thoughtful questions, featuring a nature-inspired UI, adaptive visuals, and an optional personalized AI voice.',
    image: '/images/MangroveHomepage.png',
    link: 'https://mangrove-tau.vercel.app/',
    technologies: 'Built with Next.js, React, and TypeScript, Mangrove uses Tailwind CSS and Framer Motion for smooth animations, Groq and LLaMA 4 for fast and empathetic AI responses, and AWS Polly and Whisper for natural voice capabilities.',
    additionalInfo: 'Mangrove was inspired by a simple question: What if an emotional wellness companion could proactively engage with users daily, not just during moments of crisis? It confidentially tracks patterns, adapts its approach seamlessly, and helps you reflect on your growth over time. (Seriously, we\'ll never sell your personal information — looking at you 23andMe.) Mangrove is a project I take pride in and continue to refine, drawing inspiration from those who have shared their experiences with me. I welcome feedback and discussion from anyone interested in AI, wellness tech, or emotionally intelligent software. Explore Mangrove today.\n\n**Disclaimer:** Mangrove is an emotional wellness companion designed for reflection and self-growth. It is not a substitute for professional mental health care, diagnosis, or treatment. If you are in crisis, please seek help from a licensed provider or emergency services.'
  },
  {
    id: 'tides-beverage',
    title: 'TidesBeverageCo',
    description: 'Custom e-commerce solution for a local craft beverage company. Built a complete online storefront with custom Shopify integration, mobile optimization, and seamless customer experience.',
    image: '/images/TidesBeverageCo.png', 
    link: 'https://tidesbeverage.com',
    technologies: 'Shopify, E-commerce, Custom Design, Mobile Optimization',
    blogPost: 'tides-beverage-co'
  },
  {
    id: 'heidi',
    title: 'Heidi Esparrago Therapy',
    description: 'Commissioned Responsive Therapist Website with contact form API integration',
    image: '/images/Heidi3.png',
    link: 'https://heidiesparrago.com',
    technologies: 'Responsive Design, API Integration, Contact Forms'
  },
  {
    id: 'quizzard',
    title: 'The Quizzard',
    description: 'AI empowered Quiz App. Upload a PDF and my app will generate a quiz to test your knowledge based on the information contained in the document you provide.',
    image: '/images/TheQuizzard2.png',
    link: 'https://thequizzard.vercel.app',
    technologies: 'React, AI Integration, PDF Processing'
  },
  // {
  //   id: 'taskdrag',
  //   title: 'TaskDrag',
  //   description: 'Responsive Task Manager With Drag and Drop user interaction. This is an older page, used to showcase growth this last couple of years.',
  //   image: '/images/taskdrag.png',
  //   link: 'https://taskdrag.netlify.app/',
  //   technologies: 'React, Drag & Drop, Task Management'
  // },
  // {
  //   id: 'mern-ai',
  //   title: 'MERN AI Chatbot',
  //   description: 'Full-stack AI chatbot application (under construction, deprecated April 8 due to free database account discontinuation)',
  //   image: '/images/MERN-ai.png',
  //   link: 'https://github.com/Dabbett/AI-CHATBOT-virtual-friend/tree/cdfded6990831f2e6877d42e21536706e14817bc',
  //   technologies: 'MERN Stack, AI Integration'
  // },
  // {
  //   id: 'fishnotebook',
  //   title: 'Fish Notebook',
  //   description: 'Full-Stack CRUD application using MongoDB, JS, HTML and CSS',
  //   image: '/images/FishNotebook.png',
  //   link: '#',
  //   technologies: 'MongoDB, JavaScript, HTML, CSS'
  // },
  // {
  //   id: 'sourdough',
  //   title: 'Old Soul Sourdough',
  //   description: 'E-commerce storefront for artisanal bread business',
  //   image: '/images/SourDoughPage.jpg',
  //   link: 'https://OldSoulSourdough.netlify.app',
  //   technologies: 'E-commerce, Frontend Development'
  // }
];

export default function Work({ onClose, onShowBlogPost }: WorkProps) {
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

      {/* Content */}
      <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2">
        Work
      </h2>
      <p className="sr-only">
        Portfolio showcasing my software development projects including web applications, mobile apps, and e-commerce solutions built with modern technologies.
      </p>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-container"
            style={{ padding: '0.75rem' }}
            role="article"
            aria-labelledby={`project-${project.id}-title`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Project Image */}
              <div className="md:w-1/3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg group"
                  aria-label={`View ${project.title} project`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Project Details */}
              <div className="md:w-2/3">
                <h3 id={`project-${project.id}-title`} className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-400">Technologies:</span>
                  <p className="text-sm text-gray-300 mt-1">{project.technologies}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 text-white rounded-lg transition-colors duration-200 text-sm border border-white hover:bg-white/7.5 active:bg-white/17.5"
                    style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                    aria-label={`View ${project.title} project (opens in new tab)`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Project
                  </a>
                  
                  {project.blogPost && onShowBlogPost && (
                    <button
                      onClick={() => onShowBlogPost(project.blogPost!)}
                      className="inline-flex items-center gap-2 py-2 text-white rounded-lg transition-colors duration-200 text-sm border border-white hover:bg-white/7.5 active:bg-white/17.5"
                      style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
                      aria-label={`Read case study for ${project.title}`}
                    >
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      Read Case Study
                    </button>
                  )}
                </div>

                {/* Additional Info */}
                {project.additionalInfo && (
                  <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                      {project.additionalInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.article>
  );
}