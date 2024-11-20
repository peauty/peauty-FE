// ProgressBar.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProgressLabel = styled.span<{ textColor: string; fontSize: string }>`
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
  font-weight: 500;
`;

export const ProgressBarContainer = styled.div<{ width: string; height: string; backgroundColor: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border-radius: 100px;
  overflow: hidden;
`;

export const Progress = styled.div<{ progress: number; progressColor: string }>`
  width: ${props => `${props.progress}%`};
  height: 100%;
  background-color: ${props => props.progressColor};
  transition: width 0.3s ease-in-out;
`;