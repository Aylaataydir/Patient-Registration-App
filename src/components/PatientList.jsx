
import Filter from './Filter'
import PatientCard from './PatientCard'
import { FaClipboardList } from 'react-icons/fa'



const PatientList = ({ patientsData, setPatientsData, selectedDoctor, filtered, setFiltered, editing, setEditing }) => {

  const patientList = selectedDoctor ? patientsData.filter(patient => patient.myDoctor === selectedDoctor.doctorName) : patientsData

  const filteredList = patientList.filter(p => { 
    if(filtered === "Finished") return  p.isDone === true
    if(filtered === "Pending") return  p.isDone === false
    else return true
  })
  

  const deleteHandle = (id) => {
    setPatientsData(patientsData.filter(patient => patient.id !== id))
  }

  const handleToggleComplete = (id) => {

    setPatientsData(patientsData.map(patient => patient.id === id ? { ...patient, isDone: !patient.isDone } : patient))
    console.log(patientsData)

  }



  return (
    <div className='patients-container'>
      <div className='patients-header'>
        <h4><FaClipboardList className='patients-icon' /> PATIENTS LIST</h4>
        <Filter filtered={filtered} setFiltered={setFiltered} />
      </div>

      {filteredList.length > 0
        ?
        filteredList.map((patient, index) => {
          return (
            <PatientCard key={index} patient={patient} deleteHandle={deleteHandle} handleToggleComplete={handleToggleComplete} />
          )
        })
        : <p>No patients registered</p>}



    </div>
  )
}

export default PatientList