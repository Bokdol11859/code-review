import CategoryList from '@/Component/CategoryList/CategoryList';
import PostItem from '@/Component/Post/PostItem';
import PostList from '@/Component/Post/PostList';

import { getAllCategories, getInitPosts } from '../../../../../lib/api';

export default function Home() {
  const allCategory = getAllCategories();
  const initPosts = getInitPosts([
    'title',
    'data',
    'slug',
    'category',
    'excerpt',
    'date',
    'image',
  ]);

  return (
    <>
      <CategoryList category={allCategory}></CategoryList>
      <main
        style={{
          minWidth: '60%',
        }}
      >
        {initPosts.map((post) => (
          <PostItem post={post} key={post.title} />
        ))}

        <PostList />
      </main>
    </>
  );
}
