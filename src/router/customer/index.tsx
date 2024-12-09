import CustomerSignUp from "../../pages/customer/sign-up";
import CustomerSignUpComplete from "../../pages/customer/sign-up-complete";
import CustomerHome from "../../pages/main";
import { petPaths } from "./pet";
import { requestPaths } from "./request";
import { myPagePaths } from "./mypage";
import theme from "../../style/theme";
import { UserLayout } from "../../components/layout/UserLayout";
import { AuthLayout } from "../../components/layout/AuthLayout";
import Shop from "../../pages/shop";

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
    element: <AuthLayout />,
  },
  {
    path: "",
    children: [
      {
        path: "mypage",
        children: myPagePaths,
      },
      {
        path: "pet",
        children: petPaths,
      },
      {
        path: "request",
        children: requestPaths,
      },
    ],
    element: <UserLayout userType="customer" />,
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
    element: (
      <UserLayout
        userType="customer"
        style={{
          padding: `${theme.size.appBarHeight} 0 ${theme.size.gnbHeight}`,
        }}
      />
    ),
  },
];
