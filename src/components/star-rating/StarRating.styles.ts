import styled from "styled-components";
import { colors } from "../../style/color";
export const StarsWrapper = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap }) => gap || 0} px;
`;

export const Star = styled.div<{ size?: number }>`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  position: relative;
  clip-path: polygon(
    50% 5%,
    63% 35%,
    98% 40%,
    72% 60%,
    82% 92%,
    50% 75%,
    18% 92%,
    28% 60%,
    2% 40%,
    37% 35%
  );
`;

export const FilledStar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fee500;
`;

export const EmptyStar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.gray300};
`;

export const PartialStar = styled.div<{ fillPercentage: number }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #fee500 ${({ fillPercentage }) => fillPercentage}%,
    ${colors.gray300} ${({ fillPercentage }) => fillPercentage}%
  );
`;
