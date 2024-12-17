import { AuthLayout } from "../../../components/layout/AuthLayout";
import Request from "../../../pages/customer/request";
import RequestLook from "../../../pages/customer/request/request-look";
import Shop from "../../../pages/shop";
import { noPadding } from "../../../style/layoutStyle";

export const requestPaths = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <Request />,
      },
    ],
    element: <AuthLayout userType="customer" />,
  },
  {
    path: "",
    children: [
      {
        path: "request-look",
        element: <RequestLook />,
      },
    ],
    elemnent: <AuthLayout userType="customer" style={noPadding} />,
  },
  {
    path: "shops",
    children: [
      {
        path: ":userId",
        element: <Shop />,
      },
    ],
    elemnent: <AuthLayout userType="customer" style={noPadding} />,
  },
];
