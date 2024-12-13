import styled from "styled-components";

// DogListWrapper 스타일
export const DogListWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 30px;
`;

// DogProfileWrapper 스타일
export const DogProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

// RoundImg 스타일
export const RoundImg = styled.img<{ borderRadius?: string }>`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.borderRadius || "50%"};
`;

// DogName 스타일
export const DogName = styled.p<{ active: boolean }>`
  margin-top: 7px;
  font-size: 14px;
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  text-align: center;
`;
