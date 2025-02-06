import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow-y: scroll; */
  height: calc(100vh - ${theme.size.gnbHeight});
  padding: 0 10px 100px;
  gap: 20px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${colors.gray400};
  width: 100%;
  border-radius: 10px;
  padding: 40px 30px;
  gap: 40px;
`;

export const NoticeContentBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const NoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  white-space: pre-line;
  line-height: 1.3;
`;
