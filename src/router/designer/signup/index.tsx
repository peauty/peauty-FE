import DesignerSignUp from "../../../pages/designer/signup";
import DesignerSignUpDetail from "../../../pages/designer/signup-detail";
import DesignerSignUpDetailComplete from "../../../pages/designer/signup-detail-complete";

export const signupPaths = [
  {
    path: "signup",
    element: <DesignerSignUp />,
  },
  {
    path: "signup-complete",
    element: <DesignerSignUpDetailComplete />,
  },
  {
    path: "signup-detail",
    element: <DesignerSignUpDetail />,
  },
  {
    path: "signup-detail-complete",
    element: <DesignerSignUpDetailComplete />,
  },
];
