import React from "react";
import { Nav, MenuItem, ContentWrapper } from "./GNB.styles"; // 추가된 LargeButton 스타일
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

interface GNBProps {
  type?: "customer" | "designer"; // GNB 타입 (회원/미용사)
  onLargeButtonClick?: () => void; // 큰 버튼 클릭 이벤트
  children?: React.ReactNode;
  buttonText?: string;
  disabled?: boolean;
}

export function GNB({ type, onLargeButtonClick, buttonText, disabled }: GNBProps) {
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
  const menuItems = type === "customer" ? userMenuItems : stylistMenuItems;

  return (
    <>
      <Nav>
        {/* GNB 메뉴 */}
        {type && (
          <ContentWrapper>
            {menuItems.map((item) => (
              <MenuItem key={item.path}>
                {item.icon}
                <Text typo="body200">{item.label}</Text>
              </MenuItem>
            ))}
          </ContentWrapper>
        )}

        {/* 큰 버튼 */}
        {!type && (
          <ContentWrapper>
            <CustomButton
              fullwidth
              variant="primary"
              onClick={onLargeButtonClick}
              disabled={disabled}
            >
              <Text typo="body200" color="white">
                {buttonText}
              </Text>
            </CustomButton>
          </ContentWrapper>
        )}
      </Nav>
    </>
  );
}

export default GNB;
