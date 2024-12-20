import { Layout } from "../../components/layout/Layout";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { designerMypagePaths } from "./mypage";
import { signupPaths } from "./signup";
import { homePaths } from "./home";
import { quotePaths } from "./quote";
import { noPadding } from "../../style/layoutStyle";
import { schedulePaths, statusPaths } from "./status";
import Schedule from "../../pages/designer/schedule";

export const designerPaths = [
  {
    path: "",
    children: signupPaths,
  },
  {
    path: "quote",
    children: quotePaths,
    element: <AuthLayout userType={"designer"} style={noPadding} />,
  },
  {
    path: "schedule",
    children: schedulePaths,
    element: <AuthLayout userType={"designer"} style={noPadding} />,
  },
  {
    path: "home",
    children: homePaths,
    element: <AuthLayout userType={"designer"} style={noPadding} />,
  },
  {
    path: "mypage",
    children: designerMypagePaths,
  },
  {
    path: "status",
    children: statusPaths,
    element: <AuthLayout userType="designer" style={noPadding} />,
  },
];
