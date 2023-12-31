import Image from 'next/image';
import Link from 'next/link';

import Title from '@/Component/About/Title';
import PostLayout from '@/Component/Common/PostLayout';

import { getCategoryFilteredPosts } from '../../../../../../lib/api';

export default function Home({
  params,
}: {
  params: {
    categoryId: string;
  };
}) {
  params.categoryId = decodeURIComponent(params.categoryId);

  const posts = getCategoryFilteredPosts(
    ['title', 'data', 'slug', 'category', 'excerpt', 'date', 'image'],
    params.categoryId
  );

  return (
    <>
      <h2>{params.categoryId}</h2>
      <main
        style={{
          minWidth: '60%',
        }}
      >
        {posts.map((post) => (
          <PostLayout key={post.title}>
            <Link href={`/blog/${post.slug}`}>
              <Title title={post.title} />
              <p>{post.category}</p>
              {post.content}
            </Link>

            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: '150px',
                height: '150px',
              }}
            >
              <Image
                priority
                width={150}
                height={150}
                src={post.image}
                alt="블로그 대표 이미지"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </PostLayout>
        ))}
      </main>
    </>
  );
}
