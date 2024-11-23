// ProgressBlock.tsx
import React from 'react';
import { Container, Block } from './ProgressBlock.styles';
import { colors } from '../../../style/color';

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

export default function ProgressBlock({
  total,
  current,
  gap = 4,
  blockWidth = '64px',
  blockHeight = '7px',
  activeColor = `${colors.blue200}`,
  inactiveColor = `${colors.blue100}`,
}: ProgressBlockProps) {
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
}