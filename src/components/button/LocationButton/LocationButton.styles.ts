import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LocationButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
`;

export const DisabledWrapper = styled.div`
  pointer-events: none;
`;

export const CustomButtonWrapper = styled.button`
  width: 67px;
  position: absolute;
  top: 35px;
  right: 12px;
`;
