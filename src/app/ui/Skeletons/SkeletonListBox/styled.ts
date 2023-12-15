import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 200px;
  height: 380px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 25px 0;
  border-radius: 7px;
`;

export const SkeletonImgWrapper = styled.div`
  width: 200px;
  height: 296px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: gray;
  background-color: #222224;
`;

export const Decs = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  padding: 0 4%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #121212;
`;

export const Title = styled.div`
  width: 100px;
  height: 30px;
  background-color: #222224;
  border-radius: 10px;
`;

export const Categorys = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  background-color: #222224;
  border-radius: 10px;
  gap: 3%;
`;
