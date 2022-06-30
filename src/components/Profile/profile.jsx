import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h1>Profile is working</h1>
      <Link to="/home">
        <button>Go to home</button>
      </Link>
    </>
  );
}
