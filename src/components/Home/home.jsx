import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";

export default function Home() {
  const { update } = useContext(Context);

  return (
    <>
      <h1>Home is working</h1>
      <Link to="/profile">Go to profile</Link>
      <br />
      <br />
      <button onClick={() => update()}>Log Out</button>
    </>
  );
}
