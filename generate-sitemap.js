import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://hackrevolution.in' });

// 👇 Add your website pages here
const pages = [
  '/',                // homepage
  '/about',
  '/register',
  '/contact',
  '/projects',
];

pages.forEach((page) => sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 }));
sitemap.end();

// Write sitemap.xml into /public
streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap generated successfully!');
});
