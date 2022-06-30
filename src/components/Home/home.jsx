import { Link } from "react-router-dom";
import UpdateContext from "../../context/updateContext";

export default function Home() {
  const Update = UpdateContext();

  return (
    <>
      <h1>Home is working</h1>
      <Link to="/profile">Go to profile</Link>
      <br />
      <br />
      <button onClick={() => Update.updateAuth()}>Log Out</button>
    </>
  );
}
