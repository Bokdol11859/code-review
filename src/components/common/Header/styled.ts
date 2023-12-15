import styled from "@emotion/styled";

export const HeaderWapper = styled.div`
  height: 540px;
  width: 100%;
  transition: all 0.3s ease-in;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
  z-index: 10;
`;

export const LeftWapper = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  p {
    font-size: 2.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #9288f8;
    cursor: pointer;
    z-index: 1;
  }
  img {
    cursor: pointer;
  }
`;

export const ProfileBox = styled.div`
  width: 50px;
  height: 100%;
  svg {
    width: 50px;
    height: 100%;
    cursor: pointer;
  }
`;

export const DarkModeBtn = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #efefef;
  }
`;

export const InputWapper = styled.div`
  position: relative;
  width: 400px;
  height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid #9288f8;
  border-radius: 10px;
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  input {
    color: white;
    border: none;
    width: 87%;
    height: 100%;
    outline: none;
    font-size: 1rem;
    background-color: transparent;
  }

  label {
    position: absolute;
    top: 6px;
    left: 350px;
    width: 25px;
    cursor: pointer;
    color: #9288f8;
  }
`;
export const CenterWrapper = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
`;

export const FilterBtn = styled.div`
  width: 150px;
  height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9288f8;
  border-radius: 10px;
  color: #9288f8;
  padding: 0 15px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  svg {
    transition: all ease 0.4s;
    width: 20px;
  }
`;

export const FilterBox = styled.div`
  position: absolute;
  top: 50px;
  right: 00px;
  width: 150px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px solid #9288f8;
  border-radius: 10px;
  z-index: 5;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const TagBtns = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  input {
    display: none;
  }

  input[type="radio"] + label {
    width: 88px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: #9288f8;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.1s ease-in-out;
    border-bottom: 0px solid #9288f8;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
  }

  input[type="radio"]:checked + label {
    border-bottom: 6.5px solid #9288f8;
  }

  input[type="radio"] + label:hover {
    border-bottom: 6.5px solid #9288f8;
  }
`;

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
`;

export const HeaderImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    cursor: pointer;
  }
`;

export const HeaderTopWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
