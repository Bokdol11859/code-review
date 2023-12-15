import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 200px;
  height: 390px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  margin: 15px 0;
  border-radius: 7px;

  :hover {
    box-shadow: rgba(105, 105, 115, 0.56) 0px 22px 70px 4px;
  }

  .listBoxImag {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 350px;
  background-color: white;
`;

export const Decs = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;
  padding: 0 4%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgba(255, 255, 255, 0.055);
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Categorys = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
