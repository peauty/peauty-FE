import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Intro from "./pages/intro";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

export const router = createBrowserRouter([
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
          path: "intro",
          element: <Intro/>
        },
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
