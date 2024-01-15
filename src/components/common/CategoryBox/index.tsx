import * as S from "./styled";

const CategoryBox = ({
  color,
  name,
  fontSize,
}: {
  color: string;
  name: string;
  fontSize: string;
}) => {
  return (
    <S.Wrapper
      color={color === "default" ? "gray" : color}
      style={{ fontSize: fontSize }}
    >
      {name}
    </S.Wrapper>
  );
};

export default CategoryBox;
