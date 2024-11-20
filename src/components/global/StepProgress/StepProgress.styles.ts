// StepProgress.styles.ts
import styled, { keyframes, css } from "styled-components";

const pulseKeyframes = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframes} 2s infinite;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

export const StepContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  height: 80px;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 12px;
    left: calc(50% + 16px);
    right: calc(-50% + 16px);
    height: 2px;
    background-color: ${(props) => props.color};
    z-index: 1;
  }
`;

export const Circle = styled.div<{
  active: boolean;
  current: boolean;
  activeColor: string;
  inactiveColor: string;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? props.activeColor : props.inactiveColor};
  color: ${(props) => (props.active ? "#ffffff" : "#94a3b8")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease-in-out;

  ${(props) => props.current && pulseAnimation}
`;

export const StepText = styled.span<{ active: boolean; textColor: string }>`
  font-size: 14px;
  color: ${(props) => (props.active ? props.textColor : "#94a3b8")};
  text-align: center;
  transition: color 0.3s ease-in-out;
  width: 100%;
  padding: 0 4px;
  word-wrap: break-word;
  max-height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;