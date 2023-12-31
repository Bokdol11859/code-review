import { getAllPosts } from '../../../../../lib/api';

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const allPosts = getAllPosts([
    'title',
    'data',
    'slug',
    'category',
    'excerpt',
    'date',
    'image',
  ]).filter((posts) => posts.slug === params.id);

  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
