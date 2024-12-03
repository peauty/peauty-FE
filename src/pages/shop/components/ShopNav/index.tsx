import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../style/color";

const NavWrapper = styled.nav`
  display: flex;
  padding: 10px 20px 20px;
  align-items: center;
  max-width: 230px; /* Nav의 크기를 제한 */
`;

const NavItem = styled.div<{ active: boolean }>`
  flex: 1; /* 모든 메뉴 아이템이 공평하게 공간을 나눔 */
  text-align: center; /* 텍스트를 가운데 정렬 */
  position: relative;
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "600" : "500")};
  color: ${({ active }) => (active ? "#000000" : "#A0A0A0")};
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: auto;
    width: ${({ active }) =>
      active ? "80%" : "0"}; /* 활성화된 아이템의 밑줄 */
    height: 5px;
    background-color: ${colors.blue200}; /* 밑줄 색 */
    transition: width 0.3s ease;
  }
`;

export default function ShopNav() {
  const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화된 메뉴 인덱스

  const menuItems = ["홈", "리뷰", "뱃지"];

  return (
    <NavWrapper>
      {menuItems.map((item, index) => (
        <NavItem
          key={index}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        >
          {item}
        </NavItem>
      ))}
    </NavWrapper>
  );
}
