import { AuthLayout } from "../../../components/layout/AuthLayout";
import ChoosePetForGrooming from "../../../pages/customer/request/choose-pet";
import CustomizeGrooming from "../../../pages/customer/request/customize-grooming";
import CustomerRequestNotice from "../../../pages/customer/request/notice";
import Request from "../../../pages/request";
import Shop from "../../../pages/shop";
import { noPadding } from "../../../style/layoutStyle";
import RequestLook from "../../../pages/customer/request/request-look"

export const requestPaths = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <Request />,
      },

      {
        path: "notice",
        element: <CustomerRequestNotice />,
      },
      {
        path: "choose-pet-for-grooming",
        element: <ChoosePetForGrooming />,
      },
    ],
    elemnent: <AuthLayout userType="customer" />,
  },
  {
    path: "",
    children: [
      {
        path: ":userId",
        element: <Shop />,
      },
    ],
    elemnent: <AuthLayout userType="customer" style={noPadding} />,
  },
  {
    path: "form",
    element: <CustomizeGrooming />,
  },
  {
    path: "request-look",
    element: <RequestLook />,
    
  },
];
