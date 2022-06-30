import { useState } from "react";
import Router from "./router";
import { Context } from "./context/context";

export default function ContextProvider() {
  const [auth, setAuth] = useState(false);
  const update = () => setAuth(!auth);

  console.log("Login state is", auth);

  return (
    <Context.Provider value={{ auth, update }}>
      <Router />
    </Context.Provider>
  );
}
