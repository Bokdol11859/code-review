import { CategorySelectProps } from "@/types/common";
import * as S from "./styled";

const CategorySelect = ({ name, onClick, isClick }: CategorySelectProps) => {
  return (
    <S.Wrapper
      style={{
        color: isClick ? "white" : "#9288f8",
        backgroundColor: isClick ? "#9088E4" : "rgba(255, 255, 255, 0.04)",
      }}
      onClick={onClick}
    >
      {name}
    </S.Wrapper>
  );
};

export default CategorySelect;
