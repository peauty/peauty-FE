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
`;

export const SecondQuestionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  gap: 5px;
  padding: 10px 0;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid ${colors.gray200};
  border-radius: 10px;
  padding: 7px;
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
