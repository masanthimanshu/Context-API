import { useRef, useState } from "react";
import Router from "./router";
import { Context } from "./Context/context";

export default function ContextProvider() {
  const [auth, setAuth] = useState(false);

  const username = useRef("");
  const user = username.current;

  const mail = useRef("");
  const email = mail.current;

  class Update {
    constructor() {
      this.updateAuth = () => setAuth(!auth);
      this.updateUser = (data) => (username.current = data);
      this.updateMail = (data) => (mail.current = data);
    }
  }

  return (
    <Context.Provider value={{ auth, user, email, Update }}>
      <Router />
    </Context.Provider>
  );
}
