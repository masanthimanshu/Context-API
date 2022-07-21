import { Link } from "react-router-dom";
import { ReadContext } from "../../context";

export default function Profile() {
  const { user } = ReadContext();
  const { email } = ReadContext();

  return (
    <>
      <h1>{user}'s Profile</h1>
      <p>Your email is {email}</p>
      <Link to="/">Go to home</Link>
    </>
  );
}
