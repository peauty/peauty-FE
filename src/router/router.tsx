import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import NotFound from "../pages/not-found";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";
import theme from "../style/theme";
import { customerPaths2 } from "./customer";
import Request from "../pages/request";
import { requestPaths2 } from "./customer/request";
import Shop from "../pages/shop";
import Quote from "../pages/designer/quote";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: rootPaths,
    errorElement: <NotFound />,
  },
  {
    path: "/customer",
    children: [
      {
        element: <Layout />,
        children: customerPaths,
      },
      {
        element: (
          <Layout
            style={{
              padding: `${theme.size.appBarHeight} 0 ${theme.size.gnbHeight}`,
            }}
          />
        ),
        children: customerPaths2,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/designer",
    element: <Layout />,
    children: designerPaths,
    errorElement: <NotFound />,
  },
  {
    path: "/request",
    element: (
      <Layout
        style={{
          padding: `${theme.size.appBarHeight} 0 ${theme.size.gnbHeight}`,
        }}
      />
    ),
    children: [
      {
        path: "", // 기본 경로
        element: <Request />,
      },
      {
        path: ":workId", // 상세 경로 추가
        element: <Shop />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/designer/quote",
    element: (
      <Layout
        style={{
          padding: `${theme.size.appBarHeight} 0 ${theme.size.gnbHeight}`,
        }}
      />
    ),
    children: [
      {
        path: "", // 기본 경로
        element: <Quote />, // Shop 컴포넌트가 Outlet으로 렌더링됨
      },
    ],
    errorElement: <NotFound />,
  },
]);
