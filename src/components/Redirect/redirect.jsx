import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

export default function Redirect() {
  const navigate = useNavigate();
  const { auth } = useContext(Context);

  useEffect(() => {
    if (!auth) navigate("/login");
    else navigate("/home");
  });

  return <></>;
}
