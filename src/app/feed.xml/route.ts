import { getAllBlogPosts } from '@/lib/blog-data';

export async function GET() {
  const posts = getAllBlogPosts();
  const baseUrl = 'https://dylanabbett.com';

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dylan Abbett - Software Developer Blog</title>
    <description>Case studies, technical insights, and project deep-dives from Dylan Abbett, a software developer specializing in React, Next.js, TypeScript, and e-commerce solutions.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>dylan@dylanabbett.com (Dylan Abbett)</managingEditor>
    <webMaster>dylan@dylanabbett.com (Dylan Abbett)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Dylan Abbett. All rights reserved.</copyright>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Software Development</category>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>dylan@dylanabbett.com (Dylan Abbett)</author>
      <category>Web Development</category>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('')}
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
