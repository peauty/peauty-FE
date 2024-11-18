import { ReactNode } from 'react';
import { Logo } from '../../../assets/svg';
import styled from 'styled-components';

interface Props {
  prefix?: ReactNode;
  suffix?: ReactNode;
}

// Styled Component 정의
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;
  z-index: 2;
  width: 100%;
  height: 70px;
  max-width: 480px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 18px;
  gap: 16px;
`;

export function AppBar({ prefix, suffix }: Props) {
  return (
    <StyledHeader>
      {prefix ? prefix : <Logo width="94px" height="24px" />}
      {suffix && suffix}
    </StyledHeader>
  );
}
