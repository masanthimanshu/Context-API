import { useState } from "react";
import { UpdateContext } from "../../context";

export default function Login() {
  const update = UpdateContext();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    update.updateAuth();
    update.updateUser(name);
  };

  return (
    <>
      <h1>Login is working!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
          required
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
