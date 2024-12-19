import ReviewHistory from "../../../../pages/customer/review/history";
import WriteReview from "../../../../pages/customer/review/write-review";

export const reviewPaths = [
  {
    path: "",
    element: <ReviewHistory />,
  },
  {
    path: "write",
    element: <WriteReview isEdit={false} />,
  },
  {
    path: "edit",
    element: <WriteReview isEdit={true} />,
  },
];
