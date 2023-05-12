import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from './User'
import Histories from './Histories'
import ProgressNotes from './ProgressNotes'
import DischargeNotes from './DischargeNotes'
import Consults from './Consults'
import OperativeReports from './OperativeReports'
import ProcedureNotes from './ProcedureNotes'

// import DeletePatient from './DeletePatient'

function DisplayPatientRecords({patient}) {
    const {displayDateAsNumbers, patients, setPatients} = useContext(UserContext)
    const [display, setDisplay] = useState(false)
    const {id, first_name, last_name, birth_date, age} = patient
    const [chart, setChart] = useState({
        history_and_physicals: '',
        progress_notes: '',
        discharge_notes: '',
        consults: '',
        operative_reports: '',
        procedure_notes: '',
    })
    const {history_and_physicals, progress_notes, discharge_notes, consults, operative_reports, procedure_notes} = chart
    if (patient.chart) {
        useEffect(()=>{
            fetch(`/patient/${id}/charts`)
            .then(res=>res.json())
            .then(setChart)
    }, [])
    }

    if (!patient.chart) return null
  return (
    <div className='container-lg'>
        <div>
            <h5 onClick={()=>setDisplay(!display)}>
                {last_name}, {first_name} DOB: {displayDateAsNumbers(birth_date)} AGE: {age}
            </h5>
            {/* <DeletePatient patient={patient} patients={patients} setPatients={setPatients} /> */}
            {!display ? null : 
            (<div>
                <Histories history_and_physicals={history_and_physicals}/>
                <ProgressNotes progress_notes={progress_notes} />
                <DischargeNotes discharge_notes={discharge_notes} />
                <Consults consults={consults} />
                <OperativeReports operative_reports={operative_reports} />
                <ProcedureNotes procedure_notes={procedure_notes} />
            </div>)}
        </div>
    </div>
  )
}

export default DisplayPatientRecords