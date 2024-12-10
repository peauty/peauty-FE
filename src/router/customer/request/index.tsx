import ChoosePetForGrooming from "../../../pages/customer/request/choose-pet";
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
  
];

