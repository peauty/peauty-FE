import { styled } from "styled-components";
import { typography } from "../../../style/typography";
import { colors } from "../../../style/color";
import theme from "../../../style/theme";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: calc(${theme.size.gnbHeight} + 30px);
  /* height: calc(100vh +); // 전체 높이 사용 */
`;

export const ContentWrapper = styled.div`
  flex: 1; // 남은 공간 모두 사용
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; // 세로 정렬 (중앙 정렬)
  width: 100%; // 부모의 전체 너비 사용
  padding: 5px 0px;
`;

export const ProfileImageWrapper = styled.div``;

export const ProfileMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1; // 나머지 너비를 차지
  margin-left: 16px;
`;

export const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NoPuppyPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray200};
  height: 150px;
`;
