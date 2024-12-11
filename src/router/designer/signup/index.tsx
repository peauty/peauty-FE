import { AuthLayout } from "../../../components/layout/AuthLayout";
import { Layout } from "../../../components/layout/Layout";
import DesignerSignUp from "../../../pages/designer/signup";
import DesignerSignUpDetail from "../../../pages/designer/signup-detail";
import DesignerSignUpDetailComplete from "../../../pages/designer/signup-detail-complete";

export const signupPaths = [
  {
    path: "",
    children: [
      {
        path: "signup",
        element: <DesignerSignUp />,
      },
      {
        path: "signup-complete",
        element: <DesignerSignUpDetailComplete />,
      },
    ],
    element: <Layout />,
  },
  {
    path: "",
    children: [
      {
        path: "signup-detail",
        element: <DesignerSignUpDetail />,
      },
      {
        path: "signup-detail-complete",
        element: <DesignerSignUpDetailComplete />,
      },
    ],
    element: <AuthLayout userType="designer" />,
  },
];
