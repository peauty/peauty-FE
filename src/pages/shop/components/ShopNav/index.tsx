import { useState } from "react";
import { NavWrapper, NavItem } from "./index.styles";

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
