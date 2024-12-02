import styled from "styled-components";
import { colors } from "../../style/color";
import { typography } from "../../style/typography";


export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 10px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  
`;
export const HalfWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  gap: 8px;
`;
export const ProgressBlock = styled.div<{ isActive: boolean }>`
 width: 100%;
// width: 120px;
  height: 8px;
  margin: 0 3px;
  background-color: ${(props) =>
    props.isActive ? colors.blue100 : colors.gray200};
  border-radius: 4px;
`;

export const BasicInfoText = styled.div<{ subtitle2?: boolean; marginTop?: string }>`
  ${(props) => (props.subtitle2 ? typography.subtitle300 : typography.subtitle100)};
  margin-top: ${(props) => props.marginTop || "14px"};
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 38px); 
  grid-template-columns: repeat(3, 137px); 
  gap: 10px;
  margin: 20px auto;
  width: fit-content;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  width: 132px;
  height: 132px;
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CameraIcon = styled.div`
  position: absolute;
  left: 90px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;


export const ButtonWrapper = styled.div`
//gap: 10px;
 width: 100%;
  display: flex;
  justify-content: center;
`;

