import styled from "styled-components";
import theme from "../../../../style/theme";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: calc(${theme.size.gnbHeight} + 30px);
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px; // Text와 Divider 간 간격
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LeftAlignedText = styled.div`
  align-self: flex-end;
  cursor: pointer;
`;

export const EndWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
