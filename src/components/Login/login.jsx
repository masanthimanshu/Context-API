import { useContext } from "react";
import { Context } from "../../context/context";

export default function Login() {
  const { update } = useContext(Context);

  return (
    <>
      <h1>Login is working!</h1>
        <button onClick={() => update()}>Login</button>
    </>
  );
}
