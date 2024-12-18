import ReviewHistory from "../../../../pages/customer/review/history";
import WriteReview from "../../../../pages/customer/review/write-review";

export const reviewPaths = [
  {
    path: "write",
    element: <WriteReview />,
  },
  {
    path: "",
    element: <ReviewHistory />,
  },
];
