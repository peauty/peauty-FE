import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px calc(${theme.size.gnbHeight} + 30px);
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectedHair = styled.div`
  width: 120px;
  height: 140px;
  border: 1px solid ${colors.blue100};
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TwoItemsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
