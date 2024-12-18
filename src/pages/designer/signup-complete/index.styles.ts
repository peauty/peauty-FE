import { keyframes, styled } from "styled-components";
import theme from "../../../style/theme";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${theme.size.appBarHeight});
  width: 100%;
`;

export const ContentWrapper = styled.div`
  flex: 1; // 남은 공간 모두 사용
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100px;
`;

const bang = keyframes`
  to {
    box-shadow: ${Array(50)
      .fill(0)
      .map(() => {
        const x = Math.floor(Math.random() * 500) - 250;
        const y = Math.floor(Math.random() * 500) - 416;
        const hue = Math.floor(Math.random() * 360);
        return `${x}px ${y}px hsl(${hue}, 100%, 50%)`;
      })
      .join(",")};
  }
`;

const gravity = keyframes`
  to {
    transform: translateY(200px);
    opacity: 0;
  }
`;

const position = keyframes`
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {  
    margin-top: 20%;
    margin-left: 70%
  }
  60%, 79.9% {  
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {  
    margin-top: 30%;
    margin-left: 80%;
  }
`;

export const PyroWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
`;

export const Particle = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: ${Array(50)
    .fill(0)
    .map(() => "0 0 white")
    .join(",")};
  animation:
    ${bang} 1s ease-out infinite backwards,
    ${gravity} 1s ease-in infinite backwards,
    ${position} 5s linear infinite backwards;

  &.delay {
    animation:
      ${bang} 1.25s ease-out infinite backwards,
      ${gravity} 1.25s ease-in infinite backwards,
      ${position} 6.25s linear infinite backwards;
    animation-delay: 1.25s, 1.25s, 1.25s;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: auto;
`;
