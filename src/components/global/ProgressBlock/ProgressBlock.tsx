// ProgressBlock.tsx
import React from 'react';
import styled from 'styled-components';

interface ProgressBlockProps {
  /**
   * 전체 블록 수
   */
  total: number;
  /**
   * 현재 진행된 블록 수
   */
  current: number;
  /**
   * 블록 사이의 간격 (px)
   */
  gap?: number;
  /**
   * 블록의 너비
   */
  blockWidth?: string;
  /**
   * 블록의 높이
   */
  blockHeight?: string;
  /**
   * 진행된 블록의 색상
   */
  activeColor?: string;
  /**
   * 진행되지 않은 블록의 색상
   */
  inactiveColor?: string;
}

const Container = styled.div<{ gap: number }>`
  display: flex;
  gap: ${props => `${props.gap}px`};
`;

const Block = styled.div<{
  width: string;
  height: string;
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.isActive ? props.activeColor : props.inactiveColor};
  border-radius: 100px;
  transition: background-color 0.3s ease-in-out;
`;

export const ProgressBlock: React.FC<ProgressBlockProps> = ({
  total,
  current,
  gap = 4,
  blockWidth = '64px',
  blockHeight = '8px',
  activeColor = '#2563EB',
  inactiveColor = '#F1F3F5',
}) => {
  // 현재 진행값을 0과 total 사이로 제한
  const normalizedCurrent = Math.min(total, Math.max(0, current));

  return (
    <Container gap={gap}>
      {[...Array(total)].map((_, index) => (
        <Block
          key={index}
          width={blockWidth}
          height={blockHeight}
          isActive={index < normalizedCurrent}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        />
      ))}
    </Container>
  );
};