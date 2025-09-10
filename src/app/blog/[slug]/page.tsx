import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-data';
import { Calendar, Clock, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Dylan Abbett - Software Developer`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://dylanabbett.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage || 'https://dylanabbett.com/images/ProfilePic.jpg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dylan Abbett',
      url: 'https://dylanabbett.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dylanabbett.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    articleSection: 'Web Development',
    wordCount: post.content.split(' ').length,
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
          <div className="max-w-4xl mx-auto px-4 py-6">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-20">
          <article className="max-w-4xl mx-auto px-4 pb-16">
            {/* Article Header */}
            <header className="mb-8 mt-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight blog-title">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
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
                <div className="flex items-center gap-2">
                  <span>By {post.author.name}</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* External Link */}
            {post.externalLink && (
              <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">See It Live</h3>
                    <p className="text-gray-300 text-sm">Check out the project in action</p>
                  </div>
                  <a
                    href={post.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3">About the Author</h3>
              <p 
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.author.bio }}
              />
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
