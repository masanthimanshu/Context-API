import { useContext } from "react";
import { Context } from "./createContext";

export function UpdateContext() {
  const { Update } = useContext(Context);
  const Updater = new Update();

  return Updater;
}

export function ReadContext() {
  const { auth } = useContext(Context);
  const { user } = useContext(Context);

  const value = {
    auth,
    user,
  };

  return value;
}
