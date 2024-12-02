import styled from "styled-components";

export const BadgeWrapper = styled.div<{
  backgroundColor: string;
  borderRadius: string;
  padding: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  gap: 5px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 화면을 초과하면 아래로 이동 */
  gap: 5px;
  margin-top: 5px;
`;