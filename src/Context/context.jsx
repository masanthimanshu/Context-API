import { useRef, useState, createContext, useContext } from "react";
import Router from "../router";

// Context created here
const Context = createContext({});

// Context provider created below
export function ContextProvider() {
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

// Custom hook to update context data
export function UpdateContext() {
  const { Update } = useContext(Context);
  const Updater = new Update();

  return Updater;
}

// Custom hook to read context data
export function ReadContext() {
  const { auth } = useContext(Context);
  const { user } = useContext(Context);
  const { email } = useContext(Context);

  const value = {
    auth,
    user,
    email,
  };

  return value;
}
