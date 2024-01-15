import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 30%;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 0.8rem;
  color: #eeeaf3;
  border: 2px solid ${(props) => props.color};
  margin: 1%;
`;
