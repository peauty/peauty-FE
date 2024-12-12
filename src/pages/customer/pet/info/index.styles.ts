import { styled } from "styled-components";
import { typography } from "../../../../style/typography";
import { colors } from "../../../../style/color";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px 5px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const InfoWrapper = styled.div`
  width: 410px;
  height: 100px;
  margin-top: 19px;
  background-color: ${colors.blue300};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  color: white;
  padding-left: 30px;
`;
