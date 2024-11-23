import { useNavigate } from "react-router-dom";
import {
  Smile,
  Home,
  Bookmark,
  Calendar,
  Search,
} from "../../../../assets/svg";
import { Nav, MenuItem } from "./GNB.styles";
export interface MenuItemProps {
  isActive: boolean;
}

const MENUS = [
  {
    name: "스케줄",
    path: "/schedule",
    icon: <Calendar width="20px" height="20px" />,
  },
  {
    name: "검색",
    path: "/search",
    icon: <Search width="20px" height="20px" />,
  },
  {
    name: "홈",
    path: "/home",
    icon: <Home width="20px" height="20px" />,
  },
  {
    name: "요청 현황",
    path: "/requests",
    icon: <Bookmark width="20px" height="20px" />,
  },
  {
    name: "마이페이지",
    path: "/mypage",
    icon: <Smile width="20px" height="20px" />,
  },
];

export default function GNB() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  return (
    <Nav>
      {MENUS.map((menu) => (
        <MenuItem
          key={menu.name}
          isActive={pathname === menu.path}
          onClick={() => navigate(menu.path)}
        >
          {menu.icon}
          <div>{menu.name}</div>
        </MenuItem>
      ))}
    </Nav>
  );
}
