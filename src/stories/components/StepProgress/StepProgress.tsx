import React from 'react';
import styled, { keyframes, css } from 'styled-components';

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

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const StepContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  height: 80px; // 고정된 높이 설정
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 12px;
    left: calc(50% + 16px);
    right: calc(-50% + 16px);
    height: 2px;
    background-color: ${props => props.color};
    z-index: 1;
  }
`;

const Circle = styled.div<{
  active: boolean;
  current: boolean;
  activeColor: string;
  inactiveColor: string;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.activeColor : props.inactiveColor};
  color: ${props => props.active ? '#ffffff' : '#94a3b8'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease-in-out;
  
  ${props => props.current && pulseAnimation}
`;

const StepText = styled.span<{ active: boolean; textColor: string }>`
  font-size: 14px;
  color: ${props => props.active ? props.textColor : '#94a3b8'};
  text-align: center;
  transition: color 0.3s ease-in-out;
  width: 100%;
  padding: 0 4px;
  word-wrap: break-word;
  max-height: 48px; // 텍스트 최대 높이 제한
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 최대 2줄까지만 표시
  -webkit-box-orient: vertical;
`;

export const StepProgress: React.FC<StepProgressProps> = ({
  total,
  current,
  steps,
  activeColor = '#2563EB',
  inactiveColor = '#E2E8F0',
  textColor = '#1F2937'
}) => {
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
          <StepText 
            active={index < normalizedCurrent}
            textColor={textColor}
          >
            {steps[index]}
          </StepText>
        </StepContainer>
      ))}
    </Container>
  );
};