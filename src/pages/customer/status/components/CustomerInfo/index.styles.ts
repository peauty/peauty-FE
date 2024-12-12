import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 20px;
  cursor: pointer;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Thumbnail = styled.img`
  background-color: ${colors.gray400};
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  gap: 3px; // 내부 요소들 사이의 간격
  width: 100%;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 15px;
  color: ${colors.gray100};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
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
  height: ${(props) => props.height || "37px"};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;
