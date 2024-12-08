import ChoosePetForGrooming from "../../../pages/customer/request/choose-pet";
import CustomizeGrooming from "../../../pages/customer/request/customize-grooming";
import CustomerRequestNotice from "../../../pages/customer/request/notice";

export const requestPaths = [
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
