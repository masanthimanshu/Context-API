import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { Context } from "./context/context";
import Redirect from "./components/Redirect/redirect";
import Login from "./components/Login/login";
import Home from "./components/Home/home";
import Profile from "./components/Profile/profile";

export default function Router() {
  const { auth } = useContext(Context);

  return (
    <Routes>
      <Route index element={<Redirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/">
        {auth ? (
          <>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </>
        ) : (
          <Route path="*" element={<Redirect />} />
        )}
      </Route>
    </Routes>
  );
}
