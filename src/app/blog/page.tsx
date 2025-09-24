import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog-data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Dylan Abbett - Software Developer',
  description: 'Case studies, technical insights, and project deep-dives from Dylan Abbett, a software developer specializing in React, Next.js, TypeScript, and e-commerce solutions.',
  keywords: [
    'web development blog',
    'React case studies',
    'Next.js tutorials',
    'e-commerce development',
    'software development insights',
    'Dylan Abbett blog',
    'web development projects',
    'technical case studies'
  ],
  openGraph: {
    title: 'Blog | Dylan Abbett - Software Developer',
    description: 'Case studies, technical insights, and project deep-dives from Dylan Abbett, a software developer specializing in React, Next.js, TypeScript, and e-commerce solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Dylan Abbett - Software Developer',
    description: 'Case studies, technical insights, and project deep-dives from Dylan Abbett, a software developer specializing in React, Next.js, TypeScript, and e-commerce solutions.',
  },
  alternates: {
    canonical: 'https://dylanabbett.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dylan Abbett Blog',
    description: 'Case studies, technical insights, and project deep-dives from Dylan Abbett, a software developer specializing in React, Next.js, TypeScript, and e-commerce solutions.',
    url: 'https://dylanabbett.com/blog',
    author: {
      '@type': 'Person',
      name: 'Dylan Abbett',
      url: 'https://dylanabbett.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dylan Abbett',
      url: 'https://dylanabbett.com',
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      url: `https://dylanabbett.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="relative z-30">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Case studies, technical insights, and project deep-dives from my work as a software developer.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-20">
          <div className="max-w-6xl mx-auto px-4 pb-16">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid gap-8 md:gap-12">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white/5 rounded-lg border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight blog-title">
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="hover:text-blue-400 transition-colors duration-200 link-lift-subtle"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 link-lift-subtle"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
