import React, { useState } from "react";
import { Nav, MenuItem } from "./GNB.styles";
import {
  Home,
  Search,
  Smile,
  Bookmark,
  Check,
  Calendar,
} from "../../../../assets/svg";
import { Text } from "../../texts/Text";

interface GNBProps {
  type: "user" | "stylist"; // GNB 타입 (회원/미용사)
}

const GNB: React.FC<GNBProps> = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 회원(GNB) 메뉴 구성
  const userMenuItems = [
    { icon: <Home />, label: "홈" },
    { icon: <Search />, label: "내 주변" },
    { icon: <Bookmark />, label: "요청 현황" },
    { icon: <Smile />, label: "마이페이지" },
  ];

  // 미용사(GNB) 메뉴 구성
  const stylistMenuItems = [
    { icon: <Home />, label: "홈" },
    { icon: <Calendar />, label: "스케줄" },
    { icon: <Check />, label: "미용 관리" },
    { icon: <Smile />, label: "마이페이지" },
  ];

  // 메뉴 항목 선택
  const menuItems = type === "user" ? userMenuItems : stylistMenuItems;

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
};

export default GNB;
