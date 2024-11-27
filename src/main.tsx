import { createRoot } from "react-dom/client";
import QueryProvider from "./provider/query-provider";
import GlobalStyle from "./style/global-style";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </QueryProvider>,
);
