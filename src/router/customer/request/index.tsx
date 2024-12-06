import ChoosePetForGrooming from "../../../pages/customer/request/choose-pet";
import CustomizeGrooming from "../../../pages/customer/request/customize-grooming";
import CustomerRequestNotice from "../../../pages/customer/request/notice";
import Request from "../../../pages/request";
import Shop from "../../../pages/shop";

export const requestPaths = [
  {
    path: "",
    element: <Request />,
  },
  {
    path: ":workspaceId",
    element: <Shop />,
  },
  {
    path: "notice",
    element: <CustomerRequestNotice />,
  },
  {
    path: "choose-pet-for-grooming",
    element: <ChoosePetForGrooming />,
  },
  {
    path: "customize-grooming",
    element: <CustomizeGrooming />,
  },
];
