import styled from "styled-components";
import { colors } from "../../style/color";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-top: 2px solid ${colors.background};
  padding: 25px 25px 20px;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  white-space: break-spaces;
`;

export const Thumbnail = styled.img`
  background-color: ${colors.gray400};
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: 1.3;
  gap: 3px; // 내부 요소들 사이의 간격
  width: 100%;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝에 배치 */
  width: 100%; /* 전체 너비를 채우도록 설정 */
  white-space: break-spaces;
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const RatingAndReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StoreReservationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DateWrapper = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 400;
  justify-content: flex-end;
  color: ${colors.gray100};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

export const StyledButton = styled.button<{
  bgColor: string;
  color: string;
  width: string;
  height?: string;
}>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* 태그들이 줄 바꿈 가능 */
  gap: 5px;
  max-height: calc(30px * 3 + 10px); /* 태그 높이 3줄 제한 (30px은 태그 높이) */
  overflow-y: auto;
`;
