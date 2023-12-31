'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Title from '@/Component/About/Title';
import PostLayout from '@/Component/Common/PostLayout';

const PostTitleDateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default function PostItem({
  post,
}: {
  post: { [key: string]: string };
}) {
  return (
    <PostLayout key={post.title}>
      <Link href={`/blog/${post.slug}`}>
        <PostTitleDateArea>
          <Title title={post.title} />
          <p>{post.date}</p>
        </PostTitleDateArea>
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
