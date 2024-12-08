import styled, { css } from "styled-components";
import theme from "../../style/theme";
import { colors } from "../../style/color";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${theme.size.maxWidth};
  min-width: ${theme.size.minWidth};
`;

export const CarouselImage = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const Image = styled.img<{ rounded?: boolean }>`
  object-fit: cover;
  border-radius: ${({ rounded }) => (rounded ? "10px" : "0")};
  width: 100%;
`;

export const DotWrapper = styled.div`
  position: absolute;
  bottom: 20px; /* 이미지 하단에서 20px 위 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const DotStyle = styled.div<{ size: number; height: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 50%;
  background-color: ${colors.gray300};
  cursor: pointer;
`;

export const SelectedDot = styled.div<{ size: number; height: number }>`
  width: ${({ size }) => `${size * 3}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ height }) => `${height / 2}px`};
  background-color: ${colors.blue100};
  cursor: pointer;
`;

export const ClickArea = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 0;
  ${({ position }) =>
    position === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  width: 40px; /* 클릭 영역 너비 */
  height: 100%; /* 전체 높이 */
  z-index: 5;
  cursor: pointer;
`;
