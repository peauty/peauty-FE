import styled, { css } from "styled-components";
import { colors } from "../../style/color";
import theme from "../../style/theme";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
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
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 16px 0;
`;

export const DotStyle = styled.div<{ size: number; height: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 50%;
  background-color: ${colors.gray200};
  cursor: pointer;
`;

export const SelectedDot = styled.div<{ size: number; height: number }>`
  width: ${({ size }) => `${size * 3}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ height }) => `${height / 2}px`};
  background-color: ${colors.gray100};
  cursor: pointer;
`;

export const ArrowButton = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%; /* 부모 요소의 세로 중앙에 위치 */
  transform: translateY(-100%);
  ${({ position }) =>
    position === "left"
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}
  color: ${colors.gray100};
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  user-select: none;

  &:hover {
    color: ${colors.gray200};
  }
`;
