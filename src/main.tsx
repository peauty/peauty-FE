import { createRoot } from "react-dom/client";
import { router } from "./router";
import QueryProvider from "./provider/query-provider";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./style/global-style";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </QueryProvider>,
);
