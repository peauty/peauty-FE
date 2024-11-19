import { ReactNode } from 'react';
import { Arrow } from '../../../assets/svg'; 
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import theme from '../../../style/theme'; 
 export interface SubMenuProps {
  text: string; // 공지사항 텍스트
  to: string; // 이동할 페이지 URL 
}

const StyledSubMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: ${theme.colors.black100};
  justify-content: space-between;  
`;

const Text = styled.span`
  white-space: nowrap; 
  font-size: 16px;
  color: ${theme.colors.black100};
`;

export function SubMenu({ text, to }: SubMenuProps) {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate(to); // to에 지정된 URL로 이동
  };

  return (
    <StyledSubMenu onClick={handleClick}>
      <Text>{text}</Text>
      <Arrow width="15px" height="27px" />
    </StyledSubMenu>
  );
}
