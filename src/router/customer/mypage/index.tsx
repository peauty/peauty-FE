import CustomerMyPage from "../../../pages/customer/mypage";
import CustomerMyPageDetail from "../../../pages/customer/mypage/detail";
import CustomerMyPageEdit from "../../../pages/customer/mypage/edit";
import ReviewHistory from "../../../pages/customer/review/history";
import WriteReview from "../../../pages/customer/review/write-review";
import { AuthLayout } from "../../../components/layout/AuthLayout";
import { noPadding } from "../../../style/layoutStyle";
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
    path: "",
    children: [
      {
        path: "reviews-write",
        element: <WriteReview />,
      },
      {
        path: "reviews-history",
        element: <ReviewHistory />,
      },
    ],
    element: <AuthLayout userType="customer" style={noPadding} />,
  },
];
