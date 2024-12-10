import ChoosePetForGrooming from "../../../pages/customer/request/choose-pet";
import CustomerRequestNotice from "../../../pages/customer/request/notice";
import Request from "../../../pages/request";
import Shop from "../../../pages/shop";
export const requestPaths = [
  {
    path: "notice",
    element: <CustomerRequestNotice />,
  },
  {
    path: "choose-pet-for-grooming",
    element: <ChoosePetForGrooming />,
  },
];
export const requestPaths2 = [
  {
    path: "/",
    element: <Request />,
  },
  {
    path: "/:workspaceId",
    element: <Shop />,
  },
];
