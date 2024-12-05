import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import NotFound from "../pages/not-found";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";

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
]);
