"use client";
import * as S from "@/components/common/Styles/home";
import SkeletonListBox from "../../Skeletons/SkeletonListBox";

export default function HomeLoadingUi() {
  const MockData: readonly number[] = Array.from(Array(10));

  return (
    <S.Wrapper>
      <S.ListWrapper>
        {MockData.map((_, idx) => (
          <SkeletonListBox key={idx} />
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
}
