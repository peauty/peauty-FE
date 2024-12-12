import styled from "styled-components";
import { colors } from "../../../../style/color";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-top: 2px solid ${colors.gray400};
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  position: relative;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${colors.gray200};
  border-radius: 2px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:checked {
    background-color: ${colors.blue200};
    border-color: ${colors.blue200};
    position: relative;
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 3.5px;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
  }

  &:hover {
    border-color: ${colors.blue300};
  }

  &:checked:hover {
    background-color: ${colors.blue100}; /* 체크된 상태에서 배경색 */
    border-color: ${colors.blue100}; /* 체크된 상태에서 테두리 색 */
  }
`;

export const Thumbnail = styled.img`
  background-color: ${colors.gray400};
  width: 90px;
  height: 90px;
  border-radius: 5px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
