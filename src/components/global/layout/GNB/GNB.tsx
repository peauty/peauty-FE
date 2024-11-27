import React from "react";
import { Nav, MenuItem } from "./GNB.styles";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 정보를 가져옵니다.

  // 회원(GNB) 메뉴 구성
  const userMenuItems = [
    { icon: <Home />, label: "홈", path: "/" },
    { icon: <Search />, label: "내 주변", path: "/around" },
    { icon: <Bookmark />, label: "요청 현황", path: "/requests" },
    { icon: <Smile />, label: "마이페이지", path: "/mypage" },
  ];

  // 미용사(GNB) 메뉴 구성
  const stylistMenuItems = [
    { icon: <Home />, label: "홈", path: "/" },
    { icon: <Calendar />, label: "스케줄", path: "/schedule" },
    { icon: <Check />, label: "견적 현황", path: "/propose" },
    { icon: <Smile />, label: "마이페이지", path: "/mypage" },
  ];

  // 현재 메뉴 항목 결정
  const menuItems = type === "user" ? userMenuItems : stylistMenuItems;

  return (
    <Nav>
      {menuItems.map((item) => (
        <MenuItem
          key={item.path}
          isActive={location.pathname === item.path} // 현재 경로와 비교하여 활성화 상태 설정
          onClick={() => navigate(item.path)} // 경로 이동
        >
          {item.icon}
          <Text typo="body200">{item.label}</Text>
        </MenuItem>
      ))}
    </Nav>
  );
};

export default GNB;
