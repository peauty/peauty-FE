import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/not-found";
import Edit from "./pages/my-page/pet/edit";
import Main from "./pages/main";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/pet/edit",
          element: <Edit />,
        },
        {
          path: "/",
          element: <Main />,
        },
      ],
      errorElement: <NotFound />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);
