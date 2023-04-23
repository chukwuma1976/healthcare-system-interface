import React from "react";
import { useContext } from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Providers from "./Providers";
import Appointments from "./Appointments";

import SignOut from "./SignOut";
import {UserContext} from "./User";

function HealthCareSystemInterface() {
  const {user, setUser} = useContext(UserContext);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default HealthCareSystemInterface;