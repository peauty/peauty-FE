import { GNBLayout } from "../../components/layout/GNBLayout";
import CustomerMyPage from "../../pages/customer/mypage";
import CustomerSignUp from "../../pages/customer/sign-up";
import CustomerSignUpComplete from "../../pages/customer/sign-up-complete";
import { petPaths } from "./pet";

export const customerPaths = [
  {
    path: "mypage",
    element: <CustomerMyPage />,
  },
  {
    path: "signup",
    element: <CustomerSignUp />,
  },
  {
    path: "signup-complete",
    element: <CustomerSignUpComplete />,
  },
  {
    path: "pet",
    element: <GNBLayout type="customer" />,
    children: petPaths,
  },
];
