import styled from "styled-components";
import { colors } from "../../../../style/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImgUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const FirstQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SecondQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HintWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ReviewableServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ServiceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
`;

export const TagWrapper = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid
    ${(props) => (props.selected ? colors.blue100 : colors.gray200)};
  background-color: ${(props) =>
    props.selected ? colors.blue300 : "transparent"};
  border-radius: 10px;
  padding: 8px 15px;
  cursor: pointer;

  div + div {
    color: ${(props) => (props.selected ? colors.blue100 : colors.gray200)};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const BackgroundImg = styled.img`
  width: 73px;
  height: 73px;
  border-radius: 10px;
`;

export const TotalPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 10px;
  margin: 20px 0;
  background-color: ${colors.gray400};
`;
