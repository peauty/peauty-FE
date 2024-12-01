import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Intro from "./pages/intro";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

import NotFound from "./pages/not-found";
import Edit from "./pages/my-page/pet/edit";
import Main from "./pages/main";
import SignUpComplete from "./pages/sign-up-complete";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "signin",
          element: <SignIn/>
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signup-complete",
          element: <SignUpComplete/>
        },
        {
          path: "intro",
          element: <Intro/>
        },
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
