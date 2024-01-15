import { MetadataRoute } from 'next';

import { getAllPosts } from '../../../lib/api';

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_SUFFIX = 'https://hj-devlog.vercel.app';
  const posts = getAllPosts(['title', 'date']);

  const postsSiteMap = posts.map((post) => {
    return {
      url: `${SITE_SUFFIX}/blog/${post.title}`,
      lastModified: new Date(post.date),
    };
  });

  return [
    {
      url: `${SITE_SUFFIX}`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_SUFFIX}/about`,
      lastModified: new Date(),
    },
    ...postsSiteMap,
  ];
}
