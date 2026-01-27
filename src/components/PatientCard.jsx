
import { MdCancel } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const PatientCard = ({ patient, deleteHandle, handleToggleComplete }) => {

  const { id, patientName, day, myDoctor, isDone } = patient

  const newDay = new Date(day).toLocaleString()





  return (

    <div key={id} className="patient-card" >
      <div className= {isDone ? "patient-card-text done" : "patient-card-text"}>
        <div>
          <CiCircleCheck 
          onClick={() => handleToggleComplete(id) } 
          className="icon check-icon"  
          />
        </div>
        <div>
          <h5 className="patient-name">{patientName}</h5>
          <p className="date">{newDay}</p>
          <h5 className="patient-doctor-name">{myDoctor}</h5>
        </div>

      </div>
      <div style={{opacity: isDone ? "0.4" : "1"}}>
        <MdCancel
          onClick={() => deleteHandle(id)}
          className="icon cancel-icon" />
      </div>
    </div>

  )
}

export default PatientCard