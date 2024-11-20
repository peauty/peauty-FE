// StepProgress.tsx
import React from "react";
import {
  Container,
  StepContainer,
  Circle,
  StepText,
} from "./StepProgress.styles";

interface StepProgressProps {
  /**
   * 전체 단계 수
   */
  total: number;
  /**
   * 현재 진행 단계
   */
  current: number;
  /**
   * 각 단계별 텍스트
   */
  steps: string[];
  /**
   * 활성화된 색상
   */
  activeColor?: string;
  /**
   * 비활성화된 색상
   */
  inactiveColor?: string;
  /**
   * 텍스트 색상
   */
  textColor?: string;
}

export default function StepProgress({
  total,
  current,
  steps,
  activeColor = "#2563EB",
  inactiveColor = "#E2E8F0",
  textColor = "#1F2937",
}: StepProgressProps) {
  const normalizedCurrent = Math.min(Math.max(1, current), total);

  return (
    <Container>
      {[...Array(total)].map((_, index) => (
        <StepContainer
          key={index}
          color={index < normalizedCurrent ? activeColor : inactiveColor}
        >
          <Circle
            active={index < normalizedCurrent}
            current={index === normalizedCurrent - 1}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          >
            {index + 1}
          </Circle>
          <StepText active={index < normalizedCurrent} textColor={textColor}>
            {steps[index]}
          </StepText>
        </StepContainer>
      ))}
    </Container>
  );
}