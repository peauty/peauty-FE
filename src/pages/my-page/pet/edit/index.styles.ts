import styled from "styled-components";

export const Style = {
  EditPageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
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
