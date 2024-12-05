import CustomerMyPage from "../../../pages/customer/mypage";
import CustomerMyPageEdit from "../../../pages/customer/mypage/edit";

export const myPagePaths = [
    {
        path: "",
        element: <CustomerMyPage/>
      },
      {
        path: "edit",
        element: <CustomerMyPageEdit/>
      },
]