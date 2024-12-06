import PetEdit from "../../../pages/customer/pet/edit";
import PetInfoPage from "../../../pages/customer/pet/info";
import PetSignUp from "../../../pages/customer/pet/signup";


export const petPaths = [
    {
      path: "edit",
      element: <PetEdit/>
    },
    {
      path: "info",
      element: <PetInfoPage/>
    },
    {
      path:"signup",
      element:<PetSignUp/>
    },
    
]
