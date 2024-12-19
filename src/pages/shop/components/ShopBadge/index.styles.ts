import styled from "styled-components";
import { colors } from "../../../../style/color";
import { Text } from "../../../../components";
import theme from "../../../../style/theme";
export const BadgeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  scroll-margin-top: 140px;
  height: calc(100vh - 125px - ${theme.size.gnbHeight});
`;
export const BadgeGrid = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4개의 열로 구성 */
  grid-gap: 20px; /* 배지 간의 간격 */
  //justify-items: center; /* 배지 중앙 정렬 */
  align-items: start; /* 배지 텍스트가 상단 정렬되도록 */
`;

export const BadgeItem = styled.div`
  display: flex;
  flex-direction: column; /* 활성화된 배지의 배경색 변경 */
  cursor: pointer;
  justify-content: center;
`;

export const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  border-radius: 15px;
  background-color: ${colors.blue300};
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 0 15px ${colors.blue100};
  }
`;
export const BadgeText = styled(Text)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${colors.gray100};
`;
