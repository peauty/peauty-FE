import styled from "styled-components";
import { colors } from "../../../../style/color";
import { Text } from "../../../../components";
export const BadgeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const BadgeGrid = styled.div`
  padding: 15px 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성 */
  grid-gap: 20px; /* 배지 간의 간격 */
`;

export const BadgeItem = styled.div`
  display: flex;
  flex-direction: column; /* 활성화된 배지의 배경색 변경 */
  cursor: pointer;
  justify-content: center;
`;

export const BadgeIcon = styled.div`
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 15px;
  background-color: ${colors.blue300};
  &:hover {
    box-shadow: 0 0 10px ${colors.blue100};
    /* 활성화되지 않은 배지를 호버했을 때 색상 변경 */
  }
`;
export const BadgeText = styled(Text)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${colors.gray100};
`;
