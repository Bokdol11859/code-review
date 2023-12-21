import { getAllPosts } from '../../../../lib/api';

export async function GET(req: Request) {
  const allPosts = getAllPosts([
    'title',
    'data',
    'slug',
    'category',
    'excerpt',
    'date',
    'image',
  ]);
  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
