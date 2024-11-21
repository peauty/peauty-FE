import { styled } from "styled-components";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    height: 100vh; // 전체 높이 사용
`;

export const ContentWrapper = styled.div`
    flex: 1; // 남은 공간 모두 사용
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px; // 좌우 패딩
`;

export const ButtonWrapper = styled.div`
    padding: 24px;
    background: white;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 16px;  
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

export const HighlightedText = styled.span`
  color: #007bff; /* 강조 색상 */
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin: 20px 0;
`;