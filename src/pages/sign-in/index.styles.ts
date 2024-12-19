import { styled } from "styled-components";
import theme from "../../style/theme";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: calc(100vh - ${theme.size.appBarHeight});
`;

export const ButtonWrapper = styled.div`
  background: white;
  display: flex; /* 플렉스 컨테이너로 설정 */
  flex-direction: column; /* 버튼들이 세로로 나열되도록 설정 */
  gap: 10px; /* 버튼들 간의 간격 설정 */
`;
