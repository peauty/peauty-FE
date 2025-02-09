import styled from "styled-components";
import { colors } from "../../style/color";
import theme from "../../style/theme";
export const ToastWrapper = styled.div`
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.grayOpacity300};
  padding: 10px 15px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  z-index: 10000;
`;

export const CheckIcon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
