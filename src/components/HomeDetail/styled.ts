import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  color: #e7e7e7;
  overflow-y: hidden;
`;

export const LeftWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 100vh;
  z-index: 2;
`;

export const DetailImagOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -2;

  .detailImg {
    objectfit: cover;
    filter: brightness(15%) blur(7px);
  }
`;

export const RightWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 7%;
  padding: 0 10% 10% 5%;
  overflow-y: scroll;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;

export const TopLeft = styled.div`
  width: 100px;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 40px;
  }
`;

export const MiddleWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const MiddleTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleBottom = styled.div`
  width: 300px;
  position: fixed;
  right: -170px;
  top: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  span {
    padding-top: 20px;
    font-size: 1.2rem;
  }
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

export const LinkWrapper = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0;

  svg {
    cursor: pointer;
    width: 28px;
  }
  .spotiIcon {
    :hover {
      path {
        transition: all 0.5s ease;
        fill: #1ed760;
      }
    }
  }
  .wpIcon {
    :hover {
      g rect {
        transition: all 0.5s ease;
        fill: #ff0558;
      }
    }
  }
`;

export const CategoryBtns = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Grade = styled.div`
  height: 50px;
  display: flex;
  gap: 5px;
  align-items: center;

  svg {
    width: 25px;
    color: #9288f8;
  }

  span {
    font-size: 25px;
  }

  .myScore {
    font-size: 45px;
  }
`;

export const YouTubeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const DecsWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 50px;
`;

export const DecsLong = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    font-size: 1.1rem;
  }

  pre {
    margin-top: 5%;
    margin-bottom: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-align: center;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
    height: 100%;
  }
`;
