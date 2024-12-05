import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import NotFound from "../pages/not-found";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";
import Shop from "../pages/shop";
import theme from "../style/theme";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: rootPaths,
    errorElement: <NotFound />,
  },
  {
    path: "/customer",
    element: <Layout />,
    children: customerPaths,
    errorElement: <NotFound />,
  },
  {
    path: "/designer",
    element: <Layout />,
    children: designerPaths,
    errorElement: <NotFound />,
  },
  {
    path: "/shop",
    element: <Layout style={{ padding: `${theme.size.appBarHeight} 0 ${theme.size.gnbHeight}`  }} />,
    children: [
      {
        path: "", // 기본 경로
        element: <Shop />, // Shop 컴포넌트가 Outlet으로 렌더링됨
      },
    ],
    errorElement: <NotFound />,
  },
]);
