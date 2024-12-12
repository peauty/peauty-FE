import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 80vh;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${colors.gray400};
  border-radius: 10px;
  padding: 37px;
  gap: 50px;
  margin-top: 30px;
`;

export const NoticeContentBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const NoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
