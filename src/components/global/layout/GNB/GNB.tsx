import React, { useState } from "react";
import { Nav, MenuItem } from "./GNB.styles";
import { Home, Search, Smile, Bookmark } from "../../../../assets/svg";
import { Text } from "../../texts/Text";
export default function GNB() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <Home />, label: "홈" },
    { icon: <Search />, label: "내 주변" },
    { icon: <Bookmark />, label: "요청 현황" },
    { icon: <Smile />, label: "마이페이지" },
  ];

  return (
    <Nav>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        >
          {item.icon}
          <Text typo="body200">{item.label}</Text>
        </MenuItem>
      ))}
    </Nav>
  );
}
