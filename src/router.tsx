import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./page/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "signup",
          element: <SignUp />,
        },
    ],
  },
]);
