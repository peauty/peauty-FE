import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
  position: relative; /* Tab의 border가 겹칠 수 있도록 부모 요소 설정 */
`;

export const Tab = styled.div<{ isActive: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  color: ${({ isActive }) => (isActive ? "#000" : "#aaa")};
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid #000" : "none"}; /* 더 두껍게 */
  position: relative;
  top: 2px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
