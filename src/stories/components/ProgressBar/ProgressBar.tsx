// ProgressBar.tsx
import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  /**
   * 진행률 (0-100)
   */
  progress: number;
  /**
   * 프로그레스 바의 너비
   */
  width?: string;
  /**
   * 프로그레스 바의 높이
   */
  height?: string;
  /**
   * 배경 색상
   */
  backgroundColor?: string;
  /**
   * 진행률 표시 색상
   */
  progressColor?: string;
  /**
   * 텍스트 색상
   */
  textColor?: string;
  /**
   * 텍스트 크기
   */
  fontSize?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProgressLabel = styled.span<{ textColor: string; fontSize: string }>`
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
  font-weight: 500;
`;

const ProgressBarContainer = styled.div<{ width: string; height: string; backgroundColor: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border-radius: 100px;
  overflow: hidden;
`;

const Progress = styled.div<{ progress: number; progressColor: string }>`
  width: ${props => `${props.progress}%`};
  height: 100%;
  background-color: ${props => props.progressColor};
  transition: width 0.3s ease-in-out;
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width = '300px',
  height = '8px',
  backgroundColor = '#F1F3F5',
  progressColor = '#2563EB',
  textColor = '#111827',
  fontSize = '14px'
}) => {
  // 진행률을 0-100 사이의 값으로 제한
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  return (
    <Container>
      <ProgressLabel 
        textColor={textColor}
        fontSize={fontSize}
      >
        {normalizedProgress}% 진행
      </ProgressLabel>
      <ProgressBarContainer
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      >
        <Progress
          progress={normalizedProgress}
          progressColor={progressColor}
        />
      </ProgressBarContainer>
    </Container>
  );
};