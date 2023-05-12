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
import AddHistory from "./AddHistory";
import AddConsult from "./AddConsult";
import AddDischargeNote from "./AddDischargeNote";
import AddOperativeReport from "./AddOperativeReport";
import AddProcedureNote from "./AddProcedureNote";
import PatientRecords from "./PatientRecords";

function HealthCareSystemInterface() {
  const {user, setUser} = useContext(UserContext);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health_care_providers" element={<Providers />} />
        <Route path="/patient_appointments" element={<Appointments />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/patient_records" element={<PatientRecords />} />

        <Route path="/add_records/:patientId" element={<AddRecords />} />
        <Route path="/add_soap_note/:patientId/:chartId" element={<AddSoapNote />} />
        <Route path="/add_history/:patientId/:chartId" element={<AddHistory />} />
        <Route path="/add_consult/:patientId/:chartId" element={<AddConsult />} />
        <Route path="/add_discharge_note/:patientId/:chartId" element={<AddDischargeNote />} />
        <Route path="/add_operative_report/:patientId/:chartId" element={<AddOperativeReport />} />
        <Route path="/add_procedure_note/:patientId/:chartId" element={<AddProcedureNote />} />
      </Routes>
    </div>
  );
}

export default HealthCareSystemInterface;