import styled from "styled-components";
import { colors } from "../../../../style/color";
export const ButtonWrapper = styled.button<{
  type: string;
  round: boolean;
  fullwidth?: boolean; // fullwidth 속성 추가
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullwidth, round }) =>
    fullwidth
      ? "100%"
      : round
        ? "50px"
        : "240px"}; // fullwidth이면 부모의 크기에 맞춤
  height: ${({ round }) => (round ? "50px" : "50px")};
  border-radius: ${({ round }) => (round ? "50%" : "8px")};
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: ${({ type }) =>
    type === "google"
      ? `1px solid ${colors.gray200}`
      : "none"}; // 구글 버튼에 얇은 검정 테두리 추가
  margin: 5px 0;
  background-color: ${({ type }) =>
    type === "kakao" ? "#FEE500" : type === "google" ? "white" : "#03C75A"};

  color: ${({ type }) =>
    type === "kakao" ? "#3C1E1E" : type === "google" ? "black" : "#fff"};

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
