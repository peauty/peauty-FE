import { AuthLayout } from "../../../components/layout/AuthLayout";
import Request from "../../../pages/customer/request";
import RequestLook from "../../../pages/customer/request/request-look";
import Shop from "../../../pages/shop";
import { noPadding } from "../../../style/layoutStyle";
import TotalImages from "../../../pages/shop/components/ShopReview/TotalImage";
export const requestPaths = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <Request />,
      },
    ],
    elemnent: <AuthLayout userType="customer" />,
  },
  {
    path: "shops",
    children: [
      {
        path: ":userId",
        element: <Shop />,
      },
      {
        path: ":userId/gallery",
        element: <TotalImages />,
      },
    ],
    elemnent: <AuthLayout userType="customer" style={noPadding} />,
  },
  {
    path: "request-look",
    element: <RequestLook />,
  },
];
