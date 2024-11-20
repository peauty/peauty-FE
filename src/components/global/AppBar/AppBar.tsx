import { ReactNode } from 'react';
import { Logo } from '../../../assets/svg';
import { StyledHeader, Title } from './AppBar.styles';

interface Props {
  prefix?: ReactNode; // 왼쪽 영역 (예: 뒤로가기 버튼)
  title?: string; // 중앙 제목
  titleSize?: string; // 제목 크기 (예: '16px', '1.5rem')
  suffix?: ReactNode; // 오른쪽 영역
}

export default function AppBar({ prefix, title, titleSize = '18px', suffix }: Props) {
  return (
    <StyledHeader>
      {prefix ? prefix : <Logo width="94px" height="24px" />}
      {title && <Title size={titleSize}>{title}</Title>}
      {suffix && suffix}
    </StyledHeader>
  );
}