import PetEdit from "../../../pages/customer/pet/edit";
import PetInfoPage from "../../../pages/customer/pet/info";

export const petsPaths = [
  {
    path: "",
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
];
