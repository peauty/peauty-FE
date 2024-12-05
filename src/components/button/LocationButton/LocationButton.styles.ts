import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LocationButtonWrapper = styled.div`
  position: relative;
`;

export const DisabledWrapper = styled.div`
  pointer-events: none;
`;

export const CustomButtonWrapper = styled.button`
  width: 67px;
  position: absolute;
  bottom: 8px;
  right: 12px;
`;
