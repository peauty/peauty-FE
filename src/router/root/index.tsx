import Main from "../../pages/main";
import Intro from "../../pages/intro";
import SignIn from "../../pages/sign-in";
import Shop from "../../pages/shop";

export const rootPaths = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "intro",
    element: <Intro />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];
