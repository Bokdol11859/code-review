'use client';
import dynamic from 'next/dynamic';
const PrismLight = dynamic(
  () => import('react-syntax-highlighter/dist/cjs/prism-light')
);
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({
  children,
}: {
  children: string | string[];
}) {
  return (
    <PrismLight
      language="javascript"
      style={materialDark}
      customStyle={{
        fontFamily: '__Do_Hyeon_7b3cf7',
        maxWidth: '100vw',
        wordBreak: 'break-all',
        fontWeight:'1rem',
        overflowWrap: 'break-word', // 추가: 화면 넘어갈 때 단어 단위로 줄바꿈 처리
      }}
      codeTagProps={{
        style: {
          fontFamily: 'inherit',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
        },
      }}
    >
      {children}
    </PrismLight>
  );
}
