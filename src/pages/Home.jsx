import { useEffect, useState } from "react"
import DoctorList from "../components/DoctorList"
import PatientList from "../components/PatientList"
import { pData, doctorsData } from "../helper/Data"
import DoctorPage from "../components/DoctorPage"
import Navbar from "../components/Navbar"


const Home = () => {

  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [filtered, setFiltered] = useState("All")
  const [editing, setEditing] = useState(null)
  const [patientsData, setPatientsData] = useState(() => {
    const savedData = localStorage.getItem("PDATA");
    return savedData ? JSON.parse(savedData) : pData;
  });



  useEffect(() => {

    localStorage.setItem("PDATA", JSON.stringify(patientsData))

  }, [patientsData])

  console.log(patientsData)


  return (
    <div>
      <Navbar />
      {
        selectedDoctor
          ? <DoctorPage selectedDoctor={selectedDoctor} setPatientsData={setPatientsData} patientsData={patientsData} setSelectedDoctor={setSelectedDoctor} filtered={filtered} setFiltered={setFiltered}/>
          :
          <>
            <DoctorList doctorsData={doctorsData} setSelectedDoctor={setSelectedDoctor} setPatientsData={setPatientsData} />
            <PatientList patientsData={patientsData} setPatientsData={setPatientsData} selectedDoctor={selectedDoctor} filtered={filtered} setFiltered={setFiltered} editing={editing} setEditing={setEditing} />
          </>
      }

    </div>
  )
}

export default Home