import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(40px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 8px;
  margin: 0 auto;
  width: fit-content;
`;

export const ButtonStyle = styled.button<{ selected: boolean }>`
  font-size: 12px;
  padding: 8px 16px;
  border: 1px solid ${({ selected }) => (selected ? "#007bff" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#e6f0ff" : "#fff")};
  color: ${({ selected }) => (selected ? "#007bff" : "#000")};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#cce4ff" : "#f5f5f5")};
  }
`;