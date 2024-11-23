import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Intro from "./page/intro";
import SignIn from "./page/sign-in";
import SignUp from "./page/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "sign-in",
          element: <SignIn/>
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "intro",
          element: <Intro/>
        }
    ],
  },
],  {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
