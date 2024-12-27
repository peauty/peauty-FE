import { createRoot } from "react-dom/client";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./style/global-style";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./style/ScrollToTop";
createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <GlobalStyle />
    <ScrollToTop />
    <RouterProvider router={router} />
  </RecoilRoot>,
);
