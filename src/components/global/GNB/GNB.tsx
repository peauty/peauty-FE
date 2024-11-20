import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../style/theme";
import { Smile, Home, Bookmark, Calendar, Search } from "../../../assets/svg";

interface MenuItemProps {
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

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  z-index: ${theme.zIndex.gnb};
  width: 100%;
  max-width: ${theme.size.maxWidth};
  padding: 12px 0;
  height: ${theme.size.gnbHeight};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: ${theme.colors.white};
  box-shadow: 0px -4px 6px 0px ${theme.colors.grayOpacity100};
`;

const MenuItem = styled.div<MenuItemProps>`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  svg {
    path {
      fill: ${(props) =>
        props.isActive ? theme.colors.blue200 : theme.colors.black100};
    }
    rect {
      stroke: ${(props) =>
        props.isActive ? theme.colors.blue200 : theme.colors.black100};
    }
  }

  div {
    font-size: 10px;
    color: ${(props) =>
      props.isActive ? theme.colors.blue200 : theme.colors.black100};
  }
`;

export function GNB() {
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
