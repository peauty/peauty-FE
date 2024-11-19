import { ReactNode } from 'react';
import { Logo } from '../../../assets/svg';
import styled from 'styled-components';

interface Props {
  prefix?: ReactNode; // 왼쪽 영역 (예: 뒤로가기 버튼)
  title?: string; // 중앙 제목
  titleSize?: string; // 제목 크기 (예: '16px', '1.5rem')
  suffix?: ReactNode; // 오른쪽 영역
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;
  z-index: 2;
  width: 100%;
  height: 70px;
  max-width: 430px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1<{ size: string }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.size};
  font-weight: bold;
  color: black;
  white-space: nowrap;
`;

export function AppBar({ prefix, title, titleSize = '18px', suffix }: Props) {
  return (
    <StyledHeader>
      {prefix ? prefix : <Logo width="94px" height="24px" />}
      {title && <Title size={titleSize}>{title}</Title>}
      {suffix && suffix}
    </StyledHeader>
  );
}
