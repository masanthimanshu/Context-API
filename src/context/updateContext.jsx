import { useContext } from "react";
import { Context } from "./createContext";

export default function UpdateContext() {
  const { Update } = useContext(Context);
  const Updater = new Update();

  return Updater;
}
