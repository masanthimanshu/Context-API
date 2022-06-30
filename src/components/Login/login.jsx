import UpdateContext from "../../context/updateContext";

export default function Login() {
  const update = UpdateContext();

  return (
    <>
      <h1>Login is working!</h1>
      <button onClick={() => update.updateAuth()}>Login</button>
    </>
  );
}
