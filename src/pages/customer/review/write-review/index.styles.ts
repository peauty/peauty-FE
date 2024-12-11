import styled from "styled-components";
import { colors } from "../../../../style/color";

export const ImgUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
