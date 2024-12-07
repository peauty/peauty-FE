import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import NotFound from "../pages/not-found";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";
import theme from "../style/theme";
import { customerPaths2 } from "./customer";
export const router = createBrowserRouter([
  {
    path: "/customer",
    children: [
      {
        element: <Layout />,
        children: customerPaths,
      },
      {
        element:  <Layout
        style={{
          padding: `${theme.size.appBarHeight} 0 ${theme.size.gnbHeight}`,
        }}
      />,
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
]);
