import { styled } from "styled-components";
import { colors } from "../../../../style/color";
import theme from "../../../../style/theme";

export const PageWrapper = styled.div`
  padding-top: 60px;
  height: calc(100vh - ${theme.size.gnbHeight});
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  margin-top: 100px;
  background-color: ${colors.blue300};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 20px 30px;
  line-height: 1.4;
`;
