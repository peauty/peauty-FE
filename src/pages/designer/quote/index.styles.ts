import styled from "styled-components";
import { colors } from "../../../style/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  padding: 10px 25px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  padding: 20px 25px;
  flex-direction: column;
  gap: 17px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PhotoAttachment = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const PhotoAttachmentContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: ${colors.gray400};
  font-size: 40px;
  color: ${colors.gray100};
  text-align: center;
  align-content: center;
  cursor: pointer;
`;

export const DividerStyle = styled.div`
  margin: 0;
  padding: 0;
`;

export const RequestDetail = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  gap: 10px;
`;

export const RequestSection = styled.div`
  display: flex;
  flex-direction: column;
`;
