import styled from "styled-components";
import { colors } from "../../../../../style/color";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 25px;
  border-bottom: 2px solid ${colors.background};
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  background-color: ${colors.gray400};
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
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
