import styled from "styled-components";
import { colors } from "../../style/color";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0px 25px 20px;
  border-bottom: 2px solid ${colors.background};
  border-top: 2px solid ${colors.background};
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
  font-size: 12px;
  font-weight: 500;
  padding: 20px 0px 10px;
  /* border-top: 2px solid ${colors.background}; */
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
  gap: 5px;
`;
