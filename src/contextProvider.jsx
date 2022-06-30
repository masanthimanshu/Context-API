import { useState } from "react";
import Router from "./router";
import { Context } from "./context/createContext";

export default function ContextProvider() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");

  function Update() {
    this.updateAuth = () => setAuth(!auth);
    this.updateUser = (data) => setUser(data);
  }

  console.log("Login state is : ", auth);

  return (
    <Context.Provider value={{ auth, user, Update }}>
      <Router />
    </Context.Provider>
  );
}
