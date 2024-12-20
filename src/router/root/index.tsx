import Intro from "../../pages/intro";
import SignIn from "../../pages/sign-in";

export const rootPaths = [
    {
      path: "",
      element: <Intro/>
    },
    {
      path: "signin",
      element: <SignIn/>
    },
  ]
