import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import NotFound from "../pages/not-found";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";
import { GNBLayout } from "../components/layout/GNBLayout";
import Shop from "../pages/shop";
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
    element: <GNBLayout type="user" />,
    children: [
      {
        path: "", // 기본 경로
        element: <Shop />, // Shop 컴포넌트가 Outlet으로 렌더링됨
      },
    ],
    errorElement: <NotFound />,
  },
]);
