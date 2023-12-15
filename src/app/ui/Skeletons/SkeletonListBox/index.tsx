import * as S from "./styled";

const SkeletonListBox = () => (
  <S.Wrapper>
    <S.SkeletonImgWrapper />
    <S.Decs>
      <S.Title />
      <S.Categorys />
    </S.Decs>
  </S.Wrapper>
);

export default SkeletonListBox;
