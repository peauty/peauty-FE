import styled from "styled-components";
import { colors } from "../../../style/color";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconWithText = styled.div`
  display: flex;
  gap: 5px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ManageContentItem = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.blue300};
`;

export const GrayBox = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${colors.gray300};
  border-radius: 5px;
`;

export const SectionHeader = styled.div`
  background-color: white;
  border-bottom: 1px solid ${colors.background};
  padding: 15px 25px;
`;
