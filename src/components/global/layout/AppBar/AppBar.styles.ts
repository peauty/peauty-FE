import styled from "styled-components";
import { AppBarBack } from "../../../../assets/svg";

export const StyledHeader = styled.header`
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

export const Title = styled.h1<{ size: string }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.size};
  font-weight: bold;
  color: black;
  white-space: nowrap;
`;

export const StyledAppBarBack = styled(AppBarBack)`
  height: 20px;
  cursor: pointer;
`;
