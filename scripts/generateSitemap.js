// scripts/generateSitemap.js

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.scalezix.com';
const TODAY = new Date().toISOString().split('T')[0]; // e.g. "2025-11-11"

const pages = [
  {
    url: '/',
    title: 'Scalezix Technologies – Global Digital Agency',
    description: 'Scalezix Technologies: Web Development, AI Integration & Digital Marketing Services',
    image: `${BASE_URL}/assets/scalezix_logo-BWn3im7H.png`,
    changefreq: 'daily',
    priority: '1.0',
    lastmod: TODAY
  },
  {
    url: '/about',
    title: 'About Scalezix – Empowering Businesses Digitally',
    description: 'Learn about Scalezix Technologies: our mission, vision and team',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    changefreq: 'monthly',
    priority: '0.9',
    lastmod: TODAY
  },
  {
    url: '/services',
    title: 'Our Services – Web, AI & Digital Growth Solutions',
    description: 'Scalezix offers Web Development, Shopify Development, AI Integration & Digital Marketing',
    image: `${BASE_URL}/assets/harsh_kuhikar-D2lQWKCs.jpg`,
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: TODAY
  },
  {
    url: '/contact',
    title: 'Contact Scalezix – Let\'s Build Something Amazing',
    description: 'Get in touch with Scalezix Technologies for your next web or AI project',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: TODAY
  },
  {
    url: '/portfolio',
    title: 'Portfolio – Scalezix Client Projects',
    description: 'See our client success stories: custom web apps, e-commerce platforms built by Scalezix',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: TODAY
  },
  {
    url: '/blog',
    title: 'Blog – Web Development Trends, AI Integration & UX Insights',
    description: 'Read Scalezix’s blog for the latest in web development, AI in business and UX design principles',
    changefreq: 'daily',
    priority: '0.9',
    lastmod: TODAY
  }
  // If you have blog posts or portfolio items, you can extend this array.
];

function buildUrlTag(page) {
  let tag = `  <url>\n`;
  tag += `    <loc>${BASE_URL}${page.url}</loc>\n`;
  tag += `    <lastmod>${page.lastmod}</lastmod>\n`;
  tag += `    <changefreq>${page.changefreq}</changefreq>\n`;
  tag += `    <priority>${page.priority}</priority>\n`;

  if (page.image) {
    tag += `    <image:image>\n`;
    tag += `      <image:loc>${page.image}</image:loc>\n`;
    tag += `      <image:caption>${page.title}</image:caption>\n`;
    tag += `      <image:title>${page.title}</image:title>\n`;
    tag += `    </image:image>\n`;
  }

  tag += `  </url>\n`;
  return tag;
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n`;
xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n`;
xml += `        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n\n`;

pages.forEach(page => {
  xml += buildUrlTag(page);
});

xml += `</urlset>\n`;

const filePath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(filePath, xml, { encoding: 'utf8' });
console.log(`✅ sitemap.xml generated & saved to ${filePath} — total URLs: ${pages.length}`);
