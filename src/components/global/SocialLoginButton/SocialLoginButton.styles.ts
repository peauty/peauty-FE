import styled from "styled-components";

export const ButtonWrapper = styled.button<{
  type: string;
  round: boolean;
  fullWidth?: boolean; // fullWidth 속성 추가
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth, round }) =>
    fullWidth ? "100%" : round ? "50px" : "240px"}; // fullWidth이면 부모의 크기에 맞춤
  height: ${({ round }) => (round ? "50px" : "50px")};
  border-radius: ${({ round }) => (round ? "50%" : "8px")};
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: ${({ type }) => (type === "google" ? "1px solid gray" : "none")}; // 구글 버튼에 얇은 검정 테두리 추가
  margin: 8px 0;
  background-color: ${({ type }) =>
    type === "kakao" ? "#FEE500" : type === "google" ? "white" : "#03C75A"};

  color: ${({ type }) => (type === "kakao" ? "#3C1E1E" : type === "google" ? "black" :"#fff")};

  svg {
    margin-right: ${({ round }) => (round ? "0" : "8px")};
    font-size: ${({ round }) => (round ? "24px" : "20px")};
  }

  ${({ round }) =>
    !round &&
    `
      svg {
        margin-right: 8px;
      }
    `}
`;