import React, { ReactNode, useEffect, useState } from "react";
import { Nav, MenuItem, ContentWrapper } from "./GNB.styles";
import { Home, Schedule, Request, Status, Mypage } from "../../../assets/svg";
import { CustomButton } from "../../button/CustomButton";
import { Text } from "../../texts/Text";
import { ROUTE } from "../../../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";

interface item {
  icon: ReactNode;
  label: string;
  path: string;
}

export interface GNBProps {
  type?: "customer" | "designer"; // GNB 타입 (회원/미용사)
  onLargeButtonClick?: () => void; // 큰 버튼 클릭 이벤트
  children?: React.ReactNode;
  buttonText?: string;
  disabled?: boolean;
}

export function GNB({
  type,
  onLargeButtonClick,
  buttonText,
  disabled,
}: GNBProps) {
  const userMenuItems: item[] = [
    { icon: <Home />, label: "홈", path: ROUTE.customer.home },
    { icon: <Request />, label: "요청하기", path: ROUTE.customer.request.home },
    { icon: <Status />, label: "요청 현황", path: "/requests" },
    { icon: <Mypage />, label: "마이페이지", path: ROUTE.customer.mypage.home },
  ];

  const stylistMenuItems = [
    { icon: <Home />, label: "홈", path: ROUTE.designer.home },
    { icon: <Schedule />, label: "스케줄", path: ROUTE.designer.schedule },
    { icon: <Status />, label: "견적 현황", path: "/propose" },
    { icon: <Mypage />, label: "마이페이지", path: "/" },
  ];

  const menuItems = type === "customer" ? userMenuItems : stylistMenuItems;

  const navigate = useNavigate();
  const location = useLocation();

  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <Nav>
      {type && (
        <ContentWrapper>
          {menuItems.map((item) => (
            <MenuItem
              key={item.path}
              isActive={activePath === item.path} // 경로와 상태 동기화
              onClick={() => {
                setActivePath(item.path); // 즉시 활성화 상태 업데이트
                navigate(item.path);
              }}
            >
              {item.icon}
              <Text typo="body300">{item.label}</Text>
            </MenuItem>
          ))}
        </ContentWrapper>
      )}
      {!type && (
        <ContentWrapper>
          <CustomButton
            fullwidth
            variant="primary"
            onClick={onLargeButtonClick}
            disabled={disabled}
          >
            <Text typo="body100" color="white">
              {buttonText}
            </Text>
          </CustomButton>
        </ContentWrapper>
      )}
    </Nav>
  );
}

export default GNB;
