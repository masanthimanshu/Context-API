import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";

export default function Login() {
  const { update } = useContext(Context);

  return (
    <>
      <h1>Login is working!</h1>
      <Link to="/home">
        <button onClick={() => update()}>Login</button>
      </Link>
    </>
  );
}
