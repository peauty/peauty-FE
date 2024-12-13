import { Layout } from "../../components/layout/Layout";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { designerMypagePaths } from "./mypage";
import { signupPaths } from "./signup";
import { homePaths } from "./home";
import { quotePaths } from "./quote";
import { noPadding } from "../../style/layoutStyle";
import { statusPaths } from "./status";

export const designerPaths = [
  {
    path: "",
    children: signupPaths,
  },
  {
    path: "",
    children: quotePaths,
    element: <Layout style={noPadding} />,
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
    path: "",
    children: [
      {
        path: "status",
        children: statusPaths,
      },
    ],
    element: <AuthLayout userType="designer" style={noPadding} />,
  },
];
