import { useInfiniteQuery } from '@tanstack/react-query';

import { get } from '@/utils/axiosClient';

type Post = {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
};

type PageParams = {
  start: number;
  end: number;
};

type PostsResponse = {
  posts: Post[];
  page: number;
};

const getPosts = async ({ pageParams }: { pageParams: number }) => {
  const start = pageParams * 5;
  const end = start + 5;
  return (await get<PostsResponse>(`/api/posts?start=${start}&end=${end}`))
    .data;
};

export default function usePostQuery() {
  return useInfiniteQuery({
    queryKey: ['getPosts'],
    queryFn: ({ pageParam = 1 }) => getPosts({ pageParams: pageParam }),
    getNextPageParam: (lastPage) => {
      const nextPage = Math.floor(lastPage.page);
      return nextPage + 1;
    },
  });
}
