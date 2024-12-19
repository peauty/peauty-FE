import styled from "styled-components";
import { colors } from "../../../../style/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px 0;
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

export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 5px;
`;

export const ImageItem = styled.div`
  width: 85px;
  height: 80px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const AddWrapper = styled.div`
  width: 80px;
  margin-top: 10px;
`;

export const ImageUnit = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
