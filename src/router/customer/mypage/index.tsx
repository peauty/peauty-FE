import CustomerMyPage from "../../../pages/customer/mypage";
import CustomerMyPageDetail from "../../../pages/customer/mypage/detail";
import CustomerMyPageEdit from "../../../pages/customer/mypage/edit";
import { AuthLayout } from "../../../components/layout/AuthLayout";
import { noPadding } from "../../../style/layoutStyle";
import { reviewPaths } from "./review";
export const myPagePaths = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <CustomerMyPage />,
      },
      {
        path: "detail",
        element: <CustomerMyPageDetail />,
      },
      {
        path: "edit",
        element: <CustomerMyPageEdit />,
      },
    ],
    element: <AuthLayout userType="customer" />,
  },
  {
    path: "reviews",
    children: reviewPaths,
    element: <AuthLayout userType="customer" style={noPadding} />,
  },
];
