import CustomerMyPage from "../../pages/customer/mypage";
import CustomerMyPageEdit from "../../pages/customer/mypage-edit";
import CustomerSignUp from "../../pages/customer/sign-up";
import CustomerSignUpComplete from "../../pages/customer/sign-up-complete";
import CustomerHome from "../../pages/main";
import { petPaths } from "./pet";

export const customerPaths = [
  {
    path: "home",
    element: <CustomerHome/>,
  },
  {
    path: "mypage",
    element: <CustomerMyPage/>
  },
  {
    path: "mypage-edit",
    element: <CustomerMyPageEdit/>
  },
  {
    path: "signup",
    element: <CustomerSignUp />,
  },
  {
    path: "signup-complete",
    element: <CustomerSignUpComplete/>
  },
  {
    path: "pet",
    children: petPaths,
  },
];
