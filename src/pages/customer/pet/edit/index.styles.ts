import styled from "styled-components";
import theme from "../../../../style/theme";

export const Style = {
  EditPageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: calc(${theme.size.gnbHeight} + 30px);
    gap: 20px;
  `,
  SelectWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Wrapper: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 2%;
  `,
  HalfWrapper: styled.div`
    display: flex;
    align-items: flex-end;
    width: 48%;
    gap: 5px;
  `,
  ConfirmButtonWrapper: styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
  `,
};
