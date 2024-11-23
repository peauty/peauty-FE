// ProgressBlock.styles.ts
import styled from 'styled-components';

export const Container = styled.div<{ gap: number }>`
  display: flex;
  gap: ${props => `${props.gap}px`};
  justify-content: center; // 가운데 정렬 추가
  width: 100%; // 전체 너비를 사용하도록 설정
`;

export const Block = styled.div<{
  width: string;
  height: string;
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => (props.isActive ? props.activeColor : props.inactiveColor)};
  border-radius: 100px;
  transition: background-color 0.3s ease-in-out;
`;