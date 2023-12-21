import { Metadata } from 'next';

import ReactMarkdown from 'react-markdown';

import Image from 'next/image';
import rehypeRaw from 'rehype-raw';

import CodeBlock from '@/Component/Blog/CodeBlock';
import PostExterct from '@/Component/Blog/Exterct';
import BlogLayOut from '@/Component/Blog/LayOut';
import Comments from '@/Component/Giscus/Gitcus';
import TOC from '@/Component/TOC';

import { getPostBySlug } from '../../../../../../lib/api';
import makeToc from '../../../../../../lib/makeToc';

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug, [
    'title',
    'content',
    'excerpt',
    'date',
    'author',
    'image',
  ]);

  const dynamicMetaTag: Metadata = {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [
        {
          url: `${post.image}`,
          width: 800,
          height: 600,
          alt: '블로그 대표 이미지',
        },
      ],
      type: 'website',
      siteName: `${post.title}`,
      locale: 'ko-KR',
    },
    keywords: post.title,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    verification: {
      google: 'g3Daim29whdK1ZzL1CE6pvkYyvSgM5-6C898-TVjiz0',
    },
  };
  return dynamicMetaTag;
}

export default function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = getPostBySlug(decodeURIComponent(params.slug), [
    'title',
    'content',
    'excerpt',
    'date',
    'author',
    'image',
  ]);

  return (
    <>
      <BlogLayOut>
        <h1>{post.title}</h1>
        <PostExterct exterct={post.excerpt} />
        <p
          style={{
            fontWeight: '700',
            fontSize: '16px',
          }}
        >
          {post.date}
        </p>

        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <img
                src={props.src}
                alt={props?.alt || '마크다운 이미지'}
                style={{
                  maxWidth: '100%',
                  objectFit: 'cover',
                  height: 'auto',
                }}
                sizes="(max-width: 560px) 360px, (max-width: 1023px) 700px, (max-width: 1260px) 1024px, (min-width: 1261px) 1260px"
              />
            ),
            code: ({ children }) => <CodeBlock>{children as string}</CodeBlock>,
            h2: ({ children }) => {
              return <h2 id={children as string}>{children}</h2>;
            },
            h3: ({ children }) => {
              return <h3 id={children as string}>{children}</h3>;
            },
          }}
        >
          {post.content}
        </ReactMarkdown>

        <Comments />
      </BlogLayOut>
      <TOC toc={makeToc({ children: post.content }) || []}></TOC>
    </>
  );
}
