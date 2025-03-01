import { styled } from "styled-components";
import theme from "../../../style/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${theme.size.appBarHeight} - ${theme.size.gnbHeight});
  justify-content: center;
`;

export const StoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const PaymentDayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 27px;
  margin-bottom: 15px;
`;

export const PaymenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  bottom: 30px;
`;

export const ContentWrapper = styled.div`
  padding: 20px 5px 15px;
  white-space: pre-line;
`;

export const CenteredSvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
