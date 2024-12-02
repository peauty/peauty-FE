import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/intro";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import MyPage from "./pages/my-page";

import NotFound from "./pages/not-found";
import Edit from "./pages/my-page/pet/edit";
import Main from "./pages/main";
import SignUpComplete from "./pages/sign-up-complete";
import { Layout } from "./components/layout/Layout";
import { GNBLayout } from "./components/layout/GNBLayout";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "intro",
          element: <Intro/>
        },
        {
          path: "signin",
          element: <SignIn/>
        },
        {
          path: "mypage",
          element: <MyPage/>
        },
      ],
      errorElement: <NotFound />,
    },
    {
      path: "/customer",
      element: <Layout />,
      children: [
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signup/complete",
          element: <SignUpComplete/>
        },
        {
          path: "pet",
          element: <GNBLayout type="user"/>,
          children: [
            {
              path: "edit",
              element: <Edit/>
            }
          ]
        }
      ],
      errorElement: <NotFound />,
    },
  ]  
);
