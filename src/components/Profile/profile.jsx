import { Link } from "react-router-dom";
import { ReadContext } from "../../context";

export default function Profile() {
  const { user } = ReadContext();

  return (
    <>
      <h1>{user}'s Profile</h1>
      <Link to="/">Go to home</Link>
    </>
  );
}
