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
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 225px; // name과 status 사이 간격
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  // Rating과 review는 기본 간격 유지
  & > :first-child {
    margin-right: 4px; // Rating과 review 사이 작은 간격
  }

  // review와 payment 사이 간격을 200px로 설정
  & > :nth-child(2) {
    margin-right: 230px;
  }
`;
export const StoreReservationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 150px; 
`;
export const DateWrapper = styled.div`
  font-size: 15px;
  color: ${colors.gray100};
  //padding: 0 30px;
 // margin: 5px 0; // 상하 간격을 약간 추가
`;

const DividerWrapper = styled.div`
  padding: 0; /* 내부 간격 제거 */
  margin: 0; /* 외부 간격 제거 */
`;




export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-top: 10px;
`;

export const StyledButton = styled.button<{ bgColor: string; color: string; width: string; height?: string }>`
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
