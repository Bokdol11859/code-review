'use client';

import dynamic from 'next/dynamic';
const DynamicGiscus = dynamic(() => import('@giscus/react'));

export default function Comments() {
  return (
    <DynamicGiscus
      repo="khj0426/HJ_Devlog"
      repoId="R_kgDOJsCLkw"
      mapping="pathname"
      lang="ko"
      category="General"
      categoryId="DIC_kwDOJsCLk84CXaTn"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark"
    />
  );
}
