'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';

interface WorkProps {
  onClose: () => void;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string;
  additionalInfo?: string;
}

const projects: Project[] = [
  {
    id: 'mangrove',
    title: 'Mangrove',
    description: 'Designed and built as a mobile-first web app, Mangrove offers users a guided emotional journey, from navigating grief to experiencing joy, from burnout to finding inspiration. It goes beyond a typical AI reskinned chatbot, incorporating leading questions, a nature-inspired UI, ambient adaptive visuals, and a personalized AI voice for an optional conversational experience.',
    image: '/images/MangroveHomepage.png',
    link: 'https://mangrove-tau.vercel.app/',
    technologies: 'Built with Next.js, React, and TypeScript, Mangrove features Tailwind CSS and Framer Motion for smooth animations, Groq and LLaMA 4 for quick and empathetic AI responses, and voice capabilities through AWS Polly and Whisper.',
    additionalInfo: 'The concept behind Mangrove stemmed from a fundamental question: What if a mental health app proactively engaged to mentor users daily, rather than solely during crises? This approach aims to confidentially monitor user metrics and meets users where they are in their emotional journey. (Seriously, we\'ll never sell your personal information.... Looking at you 23andMe .....) Keep tabs on yourself, see your personal growth over time and have a companion to catch you before you fall. I take pride in Mangrove\'s ongoing development and draw inspiration from those who have shared their emotional experiences with me. I welcome feedback, ideas, and discussions with individuals interested in AI, wellness tech, or the creation of emotionally intelligent software. Explore Mangrove Today.'
  },
  {
    id: 'quizzard',
    title: 'The Quizzard',
    description: 'AI empowered Quiz App. Upload a PDF and my app will generate a quiz to test your knowledge based on the information contained in the document you provide.',
    image: '/images/TheQuizzard.png',
    link: 'https://thequizzard.vercel.app',
    technologies: 'React, AI Integration, PDF Processing'
  },
  {
    id: 'taskdrag',
    title: 'TaskDrag',
    description: 'Responsive Task Manager With Drag and Drop user interaction',
    image: '/images/taskdrag.png',
    link: 'https://taskdrag.netlify.app/',
    technologies: 'React, Drag & Drop, Task Management'
  },
  {
    id: 'mern-ai',
    title: 'MERN AI Chatbot',
    description: 'Full-stack AI chatbot application (under construction, deprecated April 8 due to free database account discontinuation)',
    image: '/images/MERN-ai.png',
    link: 'https://github.com/Dabbett/AI-CHATBOT-virtual-friend/tree/cdfded6990831f2e6877d42e21536706e14817bc',
    technologies: 'MERN Stack, AI Integration'
  },
  {
    id: 'fishnotebook',
    title: 'Fish Notebook',
    description: 'Full-Stack CRUD application using MongoDB, JS, HTML and CSS',
    image: '/images/FishNotebook.png',
    link: '#',
    technologies: 'MongoDB, JavaScript, HTML, CSS'
  },
  {
    id: 'sourdough',
    title: 'Old Soul Sourdough',
    description: 'E-commerce storefront for artisanal bread business',
    image: '/images/SourDoughPage.jpg',
    link: 'https://OldSoulSourdough.netlify.app',
    technologies: 'E-commerce, Frontend Development'
  },
  {
    id: 'heidi',
    title: 'Heidi Esparrago Therapy',
    description: 'Commissioned Responsive Therapist Website with contact form API integration',
    image: '/images/heidi2.png',
    link: 'https://heidiesparrago.com',
    technologies: 'Responsive Design, API Integration, Contact Forms'
  }
];

export default function Work({ onClose }: WorkProps) {
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
        className="absolute top-0 right-0 w-16 h-16 cursor-pointer text-indent-16 overflow-hidden whitespace-nowrap"
        aria-label="Close"
      >
        <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-transparent hover:bg-white/7.5 active:bg-white/17.5 transition-colors duration-200 flex items-center justify-center">
          <X className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Content */}
      <h2 className="text-2xl font-semibold leading-tight tracking-widest mb-8 border-b border-white w-max pb-2">
        Work
      </h2>

      {/* React Projects Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">React Projects</h3>
        
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="image main mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full rounded group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
            <p className="mb-4">{project.description}</p>
            <p className="mb-4 text-sm text-gray-300">{project.technologies}</p>
            {project.additionalInfo && (
              <p className="mb-4 text-sm">{project.additionalInfo}</p>
            )}
          </div>
        ))}
      </div>

      {/* Responsive Fullstack Websites Section */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Responsive Fullstack Websites</h3>
        {projects.slice(4, 5).map((project) => (
          <div key={project.id} className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="image main mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full rounded group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
            <p className="mb-4">{project.description}</p>
            <p className="mb-4 text-sm text-gray-300">{project.technologies}</p>
          </div>
        ))}
      </div>

      {/* ECommerce Storefronts Section */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">ECommerce Storefronts</h3>
        {projects.slice(5, 6).map((project) => (
          <div key={project.id} className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="image main mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full rounded group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
            <p className="mb-4">{project.description}</p>
            <p className="mb-4 text-sm text-gray-300">{project.technologies}</p>
          </div>
        ))}
      </div>

      {/* Responsive Frontend Websites Section */}
      <div className="mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Responsive Frontend Websites</h3>
        {projects.slice(6, 7).map((project) => (
          <div key={project.id} className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="image main mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full rounded group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold">{project.title}</h4>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
            <p className="mb-4">{project.description}</p>
            <p className="mb-4 text-sm text-gray-300">{project.technologies}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
