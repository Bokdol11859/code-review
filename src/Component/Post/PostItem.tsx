'use client';

import Image from 'next/image';
import Link from 'next/link';

import Title from '@/Component/About/Title';
import PostLayout from '@/Component/Common/PostLayout';


export default function PostItem({
  post,
}: {
  post: { [key: string]: string };
}) {
  return (
    <PostLayout key={post.title}>
      <Link href={`/blog/${post.slug}`}>
        <Title title={post.title} />
        <p
          style={{
            fontSize: '1rem',
          }}
        >
          {post.date}
        </p>
        {post.content}
      </Link>
      <Image
        src={post.image}
        width={150}
        height={150}
        alt="블로그 대표 이미지"
        style={{
          objectFit: 'cover',
        }}
        priority
      />
    </PostLayout>
  );
}
