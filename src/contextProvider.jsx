import { useRef, useState } from "react";
import Router from "./router";
import { Context } from "./context/createContext";

export default function ContextProvider() {
  const [auth, setAuth] = useState(false);

  const username = useRef("");
  const user = username.current;

  class Update {
    constructor() {
      this.updateAuth = () => setAuth(!auth);
      this.updateUser = (data) => (username.current = data);
    }
  }

  return (
    <Context.Provider value={{ auth, user, Update }}>
      <Router />
    </Context.Provider>
  );
}
