import styled from "styled-components";
import { colors } from "../../style/color";

export const ItemWrapper = styled.div`
  padding: 15px;
  border-radius: 13px 20px;
  display: flex;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  justify-content: center;
`;
export const ItemImg = styled.div`
  width: 75px;
  border-radius: 10px;
  border: 1px solid ${colors.gray300};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
