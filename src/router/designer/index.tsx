import DesignerMyPage from "../../pages/desinger/mypage";
import DesignerSignUp from "../../pages/desinger/signup";
import DesignerSignUpComplete from "../../pages/desinger/signup-complete";
import DesignerSignUpDetail from "../../pages/desinger/signup-detail";
import DesignerSignUpDetailComplete from "../../pages/desinger/signup-detail-complete";

export const desingerPaths = [
    {
      path: "mypage",
      element: <DesignerMyPage/>
    },
    {
      path: "signup",
      element: <DesignerSignUp />,
    },
    {
      path: "signup-complete",
      element: <DesignerSignUpComplete/>
    },
    {
      path: "signup-detail",
      element: <DesignerSignUpDetail/>
    },
    {
      path: "signup-detail-complete",
      element: <DesignerSignUpDetailComplete/>
    }
  ]