import CustomerSignUp from "../../pages/customer/sign-up";
import CustomerSignUpComplete from "../../pages/customer/sign-up-complete";
import CustomerHome from "../../pages/main/customer";
import { petsPaths } from "./pet";
import { requestPaths } from "./request";
import { myPagePaths } from "./mypage";
import { Layout } from "../../components/layout/Layout";
import { AuthLayout } from "../../components/layout/AuthLayout";
import Shop from "../../pages/shop";
import { noPadding } from "../../style/layoutStyle";

export const customerPaths = [
  {
    path: "",
    children: [
      {
        path: "signup",
        element: <CustomerSignUp />,
      },
      {
        path: "signup-complete",
        element: <CustomerSignUpComplete />,
      },
    ],
    element: <Layout />,
  },
  {
    path: "",
    children: [
      {
        path: "mypage",
        children: myPagePaths,
      },
      {
        path: "pets",
        children: petsPaths,
      },
    ],
    element: <AuthLayout userType="customer" />,
  },
  {
    path: "",
    children: [
      {
        path: "request",
        children: requestPaths,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "home",
        element: <CustomerHome />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
    element: <AuthLayout userType="customer" style={noPadding} />,
  },
];
