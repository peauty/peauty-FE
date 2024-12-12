import styled from "styled-components";
import { colors } from "../../../../../style/color";
interface UtilImageProps {
  color?: string; // color prop을 받아옵니다
}
export const UtilWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const UtilImage = styled.div<UtilImageProps>`
  display: flex;
  height: 100px;
  flex: 1;
  border-radius: 10px;
  background-color: ${(props) => props.color || `${colors.gray400}`};
  cursor: pointer;
  padding: 20px;
  svg {
    margin-bottom: 20px;
  }
`;

export const TextWrapper = styled.div`
  line-height: 1.3;
  white-space: pre-line;
  display: flex;
  align-items: flex-end;
  flex: 1;
`;
