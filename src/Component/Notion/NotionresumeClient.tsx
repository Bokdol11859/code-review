'use client';

import 'react-notion-x/src/styles.css';

import 'prismjs/themes/prism-tomorrow.css';
import type { ReturnTypeofNotionRecord } from '@/app/(root)/(routes)/notion/resume/page';

import { NotionRenderer } from 'react-notion-x';

import { Collection } from 'react-notion-x/build/third-party/collection';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { useRecoilState } from 'recoil';

import { themeState } from '@/app/globalAtom';

type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never;

export default function ResumeClient({
  recordMap,
}: {
  recordMap: PromiseType<ReturnTypeofNotionRecord>;
}) {
  const [modeState] = useRecoilState(themeState);
  return (
    <div>
      <NotionRenderer
        darkMode={modeState === 'dark' ? true : false}
        disableHeader
        components={{
          Collection,
          Modal,
        }}
        recordMap={recordMap}
        fullPage={true}
      />
    </div>
  );
}
