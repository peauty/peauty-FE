import { createBrowserRouter } from "react-router-dom";
import { customerPaths } from "./customer";
import { designerPaths } from "./designer";
import { rootPaths } from "./root";
import { AuthLayout } from "../components/layout/AuthLayout";
export const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "",
        element: <AuthLayout />,
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
    errorElement: <AuthLayout />,
  },
]);
