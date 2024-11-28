import styled from "styled-components";

export const BadgeWrapper = styled.div<{
  backgroundColor: string;
  borderRadius: string;
  padding: string;
}>`
  display: inline-flex;
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
  font-size: 14px;
`;
