'use client';

import type AboutProps from '@/@types/AboutProps';

import styled from 'styled-components';

import Content from '@/Component/About/Content';
import ProfileImageWrapper from '@/Component/About/ProfileImgWrapper';
import Title from '@/Component/About/Title';

const AboutContent: AboutProps = {
  title: '안녕하세요! 항상 팀에 기여하고 싶은 개발자 김효중입니다',
  imgurl: '/images/Profile.jpg',
  content: [
    '새로운 기술이 왜 등장했고, 어떤 문제를 해결하는 지 공부하는 것에 즐거움을 느낍니다',
    '몰입할 수 있는 환경에서 개발하는 것을 즐깁니다',
    '기록하면서 공부할 때 가장 성취감을 느낍니다.항상 제가 배운 내용을 기록하고자 합니다.',
    '항상 소속된 팀에서 작은 것들이라도 기여하는 사람이 되고 싶습니다',
  ],
};

const StyledContentLayOut = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 25px;
  flex-wrap: wrap;
`;

export default function About() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '80%',
      }}
    >
      <Title title={AboutContent.title} />
      <StyledContentLayOut>
        <ProfileImageWrapper imgurl={AboutContent.imgurl} />
        <Content content={AboutContent.content} />
      </StyledContentLayOut>
    </main>
  );
}
