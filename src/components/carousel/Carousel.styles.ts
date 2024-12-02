import styled from "styled-components";
import { colors } from "../../style/color";
import theme from "../../style/theme";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 10px;
`;

export const CarouselImage = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease;
`;

export const Image = styled.img`
  flex: 0 0 100%; // 각 이미지가 부모의 100% 너비를 차지
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 16px 0;
`;

export const DotStyle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${colors.gray200};
  cursor: pointer;
`;

export const SelectedDot = styled.div`
  width: 24px;
  height: 8px;
  border-radius: 4px;
  background-color: ${colors.gray100};
  cursor: pointer;
`;
