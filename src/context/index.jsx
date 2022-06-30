import { useContext } from "react";
import { Context } from "./createContext";

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

  const value = {
    auth,
    user,
  };

  return value;
}
