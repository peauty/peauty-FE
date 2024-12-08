import CustomerMyPage from "../../../pages/customer/mypage";
import CustomerMyPageDetail from "../../../pages/customer/mypage/detail";
import CustomerMyPageEdit from "../../../pages/customer/mypage/edit";

export const myPagePaths = [
    {
        path: "",
        element: <CustomerMyPage/>
      },
      {
        path: "detail",
        element: <CustomerMyPageDetail/>
      },
      {
        path: "edit",
        element: <CustomerMyPageEdit/>
      },
]