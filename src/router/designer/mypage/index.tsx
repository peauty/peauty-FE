import { AuthLayout } from "../../../components/layout/AuthLayout";
import DesignerMyPage from "../../../pages/designer/mypage";
import DesignerMyBadgesPage from "../../../pages/designer/mypage/badges";
import DesignerMyPageDetail from "../../../pages/designer/mypage/detail";
import DesignerMyPageEdit from "../../../pages/designer/mypage/edit";

export const designerMypagePaths = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <DesignerMyPage />,
      },
      {
        path: "badges",
        element: <DesignerMyBadgesPage />,
      },
      {
        path: "detail",
        element: <DesignerMyPageDetail />,
      },
      {
        path: "edit",
        element: <DesignerMyPageEdit />,
      },
    ],
    element: <AuthLayout userType="designer" />,
  },
];
