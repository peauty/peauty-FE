import { styled } from "styled-components";
import theme from "../../style/theme";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(98vh - ${theme.size.appBarHeight});
`;

export const ContentWrapper = styled.div`
  flex: 1; // 남은 공간 모두 사용
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
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
