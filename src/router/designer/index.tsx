import DesignerMyPage from "../../pages/designer/mypage";
import DesignerMyPageDetail from "../../pages/designer/mypage/detail";
import DesignerMyPageEdit from "../../pages/designer/mypage/edit";
import DesignerSignUp from "../../pages/designer/signup";
import DesignerSignUpComplete from "../../pages/designer/signup-complete";
import DesignerSignUpDetail from "../../pages/designer/signup-detail";
import DesignerSignUpDetailComplete from "../../pages/designer/signup-detail-complete";
import DesignerMyBadgesPage from "../../pages/designer/mypage/badges";
import DesignerHome from "../../pages/designer/home";

export const designerPaths = [
  {
    path: "home",
    element: <DesignerHome />,
  },
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
    path: "mypage/badges",
    element: <DesignerMyBadgesPage />,
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
