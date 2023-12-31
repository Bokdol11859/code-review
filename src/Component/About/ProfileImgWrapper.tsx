'use client';

import Image from 'next/image';
export default function ProfileImageWrapper({ imgurl }: { imgurl: string }) {
  return (
    <div>
      <Image
        placeholder="blur"
        src={imgurl}
        alt="About 페이지 프로필 이미지"
        width={300}
        height={300}
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        priority
      ></Image>
    </div>
  );
}
