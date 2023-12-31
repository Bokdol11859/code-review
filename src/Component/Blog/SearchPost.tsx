import Image from 'next/image';
import { useRecoilState } from 'recoil';

import { postSearchModalState } from '@/app/globalAtom';

import SearchImage from '../../.././public/images/search.webp';

import PostSearchModal from './PostSearchModal';

export default function SearchPostButton() {
  const [modalState, setPostSearchModal] = useRecoilState(postSearchModalState);

  return (
    <>
      <Image
        alt="블로그 글 검색 이미지"
        width={32}
        placeholder="blur"
        height={32}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        src={SearchImage}
        onClick={() => {
          setPostSearchModal(!modalState);
        }}
      ></Image>
      {modalState && (
        <PostSearchModal onCloseModal={() => setPostSearchModal(!modalState)} />
      )}
    </>
  );
}
