import { styled } from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // 전체 높이 사용
`;

export const ContentWrapper = styled.div`
  flex: 1; // 남은 공간 모두 사용
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  /* padding: 24px; */
  background: white;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin: 20px 0;
`;
