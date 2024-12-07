import styled from "styled-components";
import { colors } from "../../../../../../style/color";

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100px; 
  border-radius: 10px;
  background-color: ${colors.blue300};
`;

export const BadgeImage = styled.img`
  width: 100%;
  height: 50px;
`;

export const BadgeTitle = styled.span`
  display: block; 
  font-size: 12px;
  color: gray;
  text-align: center;
  margin-top: 8px; 
`;
