import React from "react";
import { Nav, MenuItem, ButtonNav } from "./GNB.styles";
import {
  Home,
  Search,
  Smile,
  Bookmark,
  Check,
  Calendar,
} from "../../../assets/svg";
import { CustomButton } from "../../button/CustomButton";
import { Text } from "../../texts/Text";
import { ROUTE } from "../../../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";

interface GNBProps {
  type?: "user" | "stylist"; // GNB 타입 (회원/미용사)
  onLargeButtonClick?: () => void; // 큰 버튼 클릭 이벤트
}

export function GNB({ type, onLargeButtonClick }: GNBProps) {
  // 회원(GNB) 메뉴 구성
  const userMenuItems = [
    { icon: <Home />, label: "홈", path: ROUTE.home },
    { icon: <Search />, label: "요청하기", path: ROUTE.shop },
    { icon: <Bookmark />, label: "요청 현황", path: "/requests" },
    { icon: <Smile />, label: "마이페이지", path: "/mypage" },
  ];

  // 미용사(GNB) 메뉴 구성
  const stylistMenuItems = [
    { icon: <Home />, label: "홈", path: ROUTE.home },
    { icon: <Calendar />, label: "스케줄", path: "/schedule" },
    { icon: <Check />, label: "견적 현황", path: "/propose" },
    { icon: <Smile />, label: "마이페이지", path: ROUTE.mypage },
  ];

  // 현재 메뉴 항목 결정
  const menuItems = type === "user" ? userMenuItems : stylistMenuItems;

  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  return (
    <>
      {/* GNB 메뉴 */}
      {type && (
        <Nav>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              isActive={location.pathname === item.path} // 현재 경로와 비교하여 isActive 설정
              onClick={() => navigate(item.path)}
            >
              {item.icon}
              <Text typo="body200">{item.label}</Text>
            </MenuItem>
          ))}
        </Nav>
      )}

      {/* 큰 버튼 */}
      {!type && (
        <ButtonNav>
          <CustomButton
            fullwidth
            variant="primary"
            onClick={onLargeButtonClick}
          >
            <Text typo="body200" color="white">
              다음
            </Text>
          </CustomButton>
        </ButtonNav>
      )}
    </>
  );
}

export default GNB;
