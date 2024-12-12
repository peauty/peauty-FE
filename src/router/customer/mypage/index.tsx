import CustomerMyPage from "../../../pages/customer/mypage";
import CustomerMyPageDetail from "../../../pages/customer/mypage/detail";
import CustomerMyPageEdit from "../../../pages/customer/mypage/edit";
import ReviewHistory from "../../../pages/customer/review/history";
import WriteReview from "../../../pages/customer/review/write-review";

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
      {
        path: "reviews-new",
        element: <WriteReview />,
      },

      {
        path: "reviews-history",
        element: <ReviewHistory />,
      },
]