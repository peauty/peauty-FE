import styled from "styled-components";
import { colors } from "../../../../../style/color";
import theme from "../../../../../style/theme";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
  padding: 30px 0px 100px;
  white-space: pre-line;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SelectedHair = styled.div`
  width: 120px;
  height: 140px;
  border: 1px solid ${colors.blue100};
  border-radius: 10px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TwoItemsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ImageUnit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
`;
