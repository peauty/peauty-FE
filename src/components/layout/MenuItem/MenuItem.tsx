import { ReactElement } from 'react';
import { Home, Bookmark, Search, Smile, Calendar, Check } from "../../../assets/svg";
import { Text } from "../../texts/Text";
import { StyledMenuItem } from './MenuItem.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../constants/routes';

interface MenuItem {
  icon: ReactElement;
  label: string;
  path: string;
}

export type CustomerMenuKey = "home" | "search" | "bookMark" | "mypage";
export type StylistMenuKey = "home" | "schedule" | "propose" | "mypage";

interface MenuItemProps {
  user: "customer" | "designer";
  ele: CustomerMenuKey | StylistMenuKey;
  isActive?: boolean;
}

export default function MenuItem({ user, ele, isActive }: MenuItemProps) {
    const navigate = useNavigate();
  
    const userMenuItems: Record<CustomerMenuKey, MenuItem> = {
    home: { icon: <Home />, label: "홈", path: ROUTE.customer.home },
    search: { icon: <Search />, label: "내 주변", path: "/around" }, // TODO
    bookMark: { icon: <Bookmark />, label: "요청 현황", path: "/requests" }, // TODO
    mypage: { icon: <Smile />, label: "마이페이지", path: ROUTE.customer.mypage },
  };

  const stylistMenuItems: Record<StylistMenuKey, MenuItem> = {
    home: { icon: <Home />, label: "홈", path: "/" },
    schedule: { icon: <Calendar />, label: "스케줄", path: "/schedule" },
    propose: { icon: <Check />, label: "견적 현황", path: "/propose" },
    mypage: { icon: <Smile />, label: "마이페이지", path: "/mypage" },
  };

  const menuItems = user === "customer" ? userMenuItems : stylistMenuItems;
  const currentMenuItem = menuItems[ele as keyof typeof menuItems];

  const handleClick = () => {
    navigate(currentMenuItem.path);
  };

  return (
    <>
        <StyledMenuItem isActive={isActive} onClick={handleClick}>
            {currentMenuItem.icon}
            <Text typo="body200">{currentMenuItem.label}</Text>
        </StyledMenuItem>
    </>
  );
}