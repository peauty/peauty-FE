import Schedule from "../../../pages/designer/schedule";
import Status from "../../../pages/designer/status";
import QuoteDetail from "../../../pages/designer/quote/quoute-detail";
export const statusPaths = [
  {
    path: "",
    element: <Status />,
  },
  {
    path: "quote/:puppyId",
    element: <QuoteDetail />,
  },
];

export const schedulePaths = [
  {
    path: "",
    element: <Schedule />,
  },
];
