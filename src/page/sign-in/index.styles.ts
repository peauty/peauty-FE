import { styled } from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

const HighlightedText = styled.span`
  color: #007bff;
`;

export const ButtonWrapper = styled.div`
  padding: 24px;
  background: white;
`;
