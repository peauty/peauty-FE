
import styled from "styled-components";
import { colors } from "../../style/color";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 231px;
`;

export const DateWrapper = styled.div`
  font-size: 15px;
  color: ${colors.gray100};
  padding: 0 30px;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 15px; 
  padding: 0 30px;
`;

export const DiseaseWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 0 30px;
`;

export const StyledButton = styled.button<{ bgColor: string; color: string; width: string; height: string }>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 16px;
  gap: 10px;
`;

export const StatusText = styled.span`
  gap: 200px; // 이름과의 간격
  font-size: 16px;
  color: ${colors.blue100}; // 상태 텍스트 색상
`;

export const InfoWrapper = styled.div`
  padding: 1px;
  display: flex;
  flex-direction: column;
  gap: 3px; 
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  justify-content: space-between; /* 이름과 상태를 양쪽 정렬 */
  width: 100%;
`;