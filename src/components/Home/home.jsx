import { Link } from "react-router-dom";
import { UpdateContext, ReadContext } from "../../Context/context";

export default function Home() {
  const Update = UpdateContext();
  const { user } = ReadContext();
  const { email } = ReadContext();

  return (
    <>
      <h1>Home is working</h1>
      <p>Hello {user}</p>
      <p>Your email is {email}</p>
      <Link to="/profile">Go to profile</Link>
      <br />
      <br />
      <button onClick={() => Update.updateAuth()}>Log Out</button>
    </>
  );
}
