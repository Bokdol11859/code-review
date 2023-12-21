'use client';

import useObserver from '@/hooks/useObserver';
import usePostQuery from '@/hooks/usePostQuery';

import PostItem from './PostItem';

export default function PostServiceLayer() {
  const { data, fetchNextPage, hasNextPage } = usePostQuery();
  const { target } = useObserver({
    threshold: 0.1,
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      {data?.pages?.map((page) =>
        page.posts.map((post) => <PostItem post={post} key={post.title} />)
      )}
      <div ref={target}></div>
    </>
  );
}
