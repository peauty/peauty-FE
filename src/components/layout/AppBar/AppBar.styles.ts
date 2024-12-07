import styled from "styled-components";
import { AppBarBack } from "../../../assets/svg";
import theme from "../../../style/theme";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: ${theme.zIndex.appBar};
  width: 100%; /* 전체 너비를 차지 */
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* 최대 너비와 중앙 정렬 */
  max-width: ${theme.size.maxWidth};
  min-width: ${theme.size.minWidth};
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  color: black;
  white-space: nowrap;
  text-align: center;
`;

export const StyledAppBarBack = styled(AppBarBack)`
  height: 20px;
  cursor: pointer;
`;
