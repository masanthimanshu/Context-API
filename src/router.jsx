import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { Context } from "./context/createContext";
import { Redirect, Login, Home, Profile } from "./components";

export default function Router() {
  const { auth } = useContext(Context);

  return (
    <Routes>
      <Route index element={auth ? <Home /> : <Login />} />

      {/* Protected Routes */}
      <Route path="/">
        {auth ? (
          <Route path="profile" element={<Profile />} />
        ) : (
          <Route path="*" element={<Redirect />} />
        )}
      </Route>
    </Routes>
  );
}
