// ProgressBar.tsx
import { Container, ProgressLabel, ProgressBarContainer, Progress } from './ProgressBar.styles';

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

export default function ProgressBar({
  progress,
  width = '300px',
  height = '8px',
  backgroundColor = '#F1F3F5',
  progressColor = '#2563EB',
  textColor = '#111827',
  fontSize = '14px'
}: ProgressBarProps) {
  const normalizedProgress = Math.min(100, Math.max(0, progress));

  return (
    <Container>
      <ProgressLabel textColor={textColor} fontSize={fontSize}>
        {normalizedProgress}% 진행
      </ProgressLabel>
      <ProgressBarContainer
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      >
        <Progress progress={normalizedProgress} progressColor={progressColor} />
      </ProgressBarContainer>
    </Container>
  );
}