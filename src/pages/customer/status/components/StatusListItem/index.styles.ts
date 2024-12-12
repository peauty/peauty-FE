import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 25px;
  cursor: pointer;
`;



export const Thumbnail = styled.img`
  background-color: ${colors.gray400};
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  gap:3px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 3px;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
