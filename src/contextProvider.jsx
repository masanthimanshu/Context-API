import { useState } from "react";
import Router from "./router";
import { Context } from "./context/createContext";

export default function ContextProvider() {
  const [auth, setAuth] = useState(false);

  function Update() {
    this.updateAuth = () => setAuth(!auth);
  }

  console.log("Login state is : ", auth);

  return (
    <Context.Provider value={{ auth, Update }}>
      <Router />
    </Context.Provider>
  );
}
