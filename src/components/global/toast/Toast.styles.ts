import styled from "styled-components";
import { colors } from "../../../style/color";
export const ToastWrapper = styled.div`
  background-color: ${colors.grayOpacity300};
  padding: 13px 9px;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  border-radius: 5px;
`;

export const CheckIcon = styled.div`
  margin-right: 9px;
  display: flex;
  align-items: center; 
  justify-content: center;
`;
