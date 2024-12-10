import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { ROUTE } from "../../../constants/routes";
import { CustomJwtPayload } from "../../../types/\btypes";
import { Main } from "./Layout.styles";
import { Wrapper } from "../Wrpper";

interface LayoutProps {
  style?: CSSProperties;
}

export default function Layout({ style }: LayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      try {
        const decoded = jwtDecode<CustomJwtPayload>(accessToken);
        const role = decoded.user.role;

        if (role === "ROLE_CUSTOMER") {
          navigate(ROUTE.customer.home);
        } else if (role === "ROLE_DESIGNER") {
          navigate(ROUTE.designer.home);
        } else {
          navigate(ROUTE.signIn);
        }
      } catch (error) {
        console.error("Invalid token", error);
        navigate(ROUTE.signIn);
      }
    }
  }, [navigate]);

  return (
    <Wrapper>
      <Main style={style}>
        <Outlet />
      </Main>
    </Wrapper>
  );
}
