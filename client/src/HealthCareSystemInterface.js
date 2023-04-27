import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {UserContext} from "./User";

import Login from "./Login";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import SignOut from "./SignOut";

import Providers from "./Providers";
import Appointments from "./Appointments";
import AddRecords from "./AddRecords";
import AddSoapNote from "./AddSoapNote";
import UpdatePatient from "./UpdatePatient";
import AddHistory from "./AddHistory";
import AddConsult from "./AddConsult";
import AddDischargeNote from "./AddDischargeNote";
import AddOperativeReport from "./AddOperativeReport";
import AddProcedureNote from "./AddProcedureNote";

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
        <Route path="/add_records/:patientId" element={<AddRecords />} />
        <Route path="/add_soap_note/:patientId" element={<AddSoapNote />} />
        <Route path="/update_patient/:patientId" element={<UpdatePatient />} />
        <Route path="/add_history/:patientId" element={<AddHistory />} />
        <Route path="/add_consult/:patientId" element={<AddConsult />} />
        <Route path="/add_discharge_note/:patientId" element={<AddDischargeNote />} />
        <Route path="/add_operative_report/:patientId" element={<AddOperativeReport />} />
        <Route path="/add_procedure_note/:patientId" element={<AddProcedureNote />} />
      </Routes>
    </div>
  );
}

export default HealthCareSystemInterface;