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
    elemnent: <AuthLayout userType="customer" />,
  },
  {
    path: "shops",
    children: [
      {
        path: ":workspaceId",
        element: <Shop />,
      },
    ],
    elemnent: <AuthLayout userType="customer" style={noPadding} />,
  },
  {
    path: "request-look",
    element: <RequestLook />,
  },
];
