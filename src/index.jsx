import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context/context";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ContextProvider />
  </BrowserRouter>
);
