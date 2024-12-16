import styled from "styled-components";
import theme from "../../../../../style/theme";

export const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(
    100vh - ${theme.size.appBarHeight} - 40px - ${theme.size.gnbHeight}
  );
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
