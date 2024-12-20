import CustomerSignUp from "../../pages/customer/sign-up";
import CustomerSignUpComplete from "../../pages/customer/sign-up-complete";
import CustomerHome from "../../pages/main/customer";
import { petsPaths } from "./pet";
import { requestPaths } from "./request";
import { myPagePaths } from "./mypage";
import { Layout } from "../../components/layout/Layout";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { noPadding } from "../../style/layoutStyle";
import { statusPaths } from "./status";
import QuoteDetail from "../../pages/customer/quote-detail";

export const customerPaths = [
  // Layout 적용 경로
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "signup", element: <CustomerSignUp /> },
      { path: "signup-complete", element: <CustomerSignUpComplete /> },
    ],
  },

  // AuthLayout 적용 경로 (기본)
  {
    path: "",
    element: <AuthLayout userType="customer" />,
    children: [{ path: "pets", children: petsPaths }],
  },

  {
    path: "",
    element: <AuthLayout userType="customer" style={noPadding} />,
    children: [
      { path: "home", element: <CustomerHome /> },
      { path: "quote-detail", element: <QuoteDetail /> },
      { path: "status", children: statusPaths },
    ],
  },

  {
    path: "",
    children: [
      { path: "request", children: requestPaths },
      { path: "mypage", children: myPagePaths },
    ],
  },
];
