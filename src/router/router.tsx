import { createBrowserRouter } from "react-router-dom";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";
import { Layout } from "../components/layout/Layout";
export const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "",
        element: <Layout />,
        children: rootPaths,
      },
      {
        path: "/customer",
        children: customerPaths,
      },
      {
        path: "/designer",
        children: designerPaths,
      },
    ],
    errorElement: <Layout />,
  },
]);
