import DesignerMyPage from "../../pages/designer/mypage";
import DesignerMyPageDetail from "../../pages/designer/mypage/detail";
import DesignerMyPageEdit from "../../pages/designer/mypage/edit";
import DesignerSignUp from "../../pages/designer/signup";
import DesignerSignUpComplete from "../../pages/designer/signup-complete";
import DesignerSignUpDetail from "../../pages/designer/signup-detail";
import DesignerSignUpDetailComplete from "../../pages/designer/signup-detail-complete";


export const designerPaths = [
  {
    path: "mypage",
    element: <DesignerMyPage />,
  },
  {
    path: "signup",
    element: <DesignerSignUp />,
  },
  {
    path: "signup-complete",
    element: <DesignerSignUpComplete />,
  },
  {
    path: "signup-detail",
    element: <DesignerSignUpDetail />,
  },
  {
    path: "signup-detail-complete",
    element: <DesignerSignUpDetailComplete />,
  },
  {
    path: "mypage/detail",
    element: <DesignerMyPageDetail />,
  },
  {
    path: "mypage/edit",
    element: <DesignerMyPageEdit />,
  },
  
];
