import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "../src/style/global-style";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider 
      router={router}
    />
    <App />
  </StrictMode>,
);
