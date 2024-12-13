import PetEdit from "../../../pages/customer/pet/edit";
import PetInfoPage from "../../../pages/customer/pet/info";
import PetSignUp from "../../../pages/customer/pet/signup";

export const petsPaths = [
  {
    path: "signup",
    element: <PetSignUp />,
  },
  {
    path: ":puppyId",
    children: [
      {
        path: "",
        element: <PetInfoPage />,
      },
      {
        path: "edit",
        element: <PetEdit />,
      },
    ],
  },
  {
    path: "regist",
    element: <PetSignUp />,
  },
];
