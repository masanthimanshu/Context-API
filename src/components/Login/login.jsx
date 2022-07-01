import { useState } from "react";
import { UpdateContext } from "../../Context/context";

export default function Login() {
  const update = UpdateContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    update.updateAuth();
    update.updateUser(name);
    update.updateMail(email);
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
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
