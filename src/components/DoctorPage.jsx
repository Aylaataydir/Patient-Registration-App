
import { useState } from "react"
import DoctorCard from "./DoctorCard"
import PatientList from "./PatientList"
import { FaArrowLeft } from "react-icons/fa"

const DoctorPage = ({ selectedDoctor, setPatientsData, patientsData, setSelectedDoctor, filtered, setFiltered }) => {

    const [nameValue, setNameValue] = useState("")
    const [dateValue, setDateValue] = useState("")

    const { doctorName } = selectedDoctor


    const handleSubmit = (e) => {

        e.preventDefault()

        if (nameValue && dateValue) {

            const newPatient = {
                id: new Date().getTime(),
                patientName: nameValue.toUpperCase(),
                day: dateValue,
                isDone: false,
                myDoctor: doctorName,
            }

            setPatientsData((prev) => [...prev, newPatient])
          
        }

    }

    console.log(patientsData)

    return (
        <div className="doctor-page">
            <button className="back-button" onClick={() => setSelectedDoctor(null)}>
                <FaArrowLeft /> Back to Doctors
            </button>
            <div>
                <div className="doctor-page-doctor">
                    <DoctorCard doctor={selectedDoctor} showButton={false}/>
                </div>
                <form className='form-control' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Patient Information</label>
                        <input
                            onChange={(e) => setNameValue(e.target.value)}
                            value={nameValue}
                            type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="date">Day & Time</label>
                        <input
                            onChange={(e) => setDateValue(e.target.value)}
                            value={dateValue}
                            type="datetime-local" />
                    </div>
                    <button type="submit">Add Patient to {doctorName}</button>
                </form>
            </div>
            <div className="doctor-page-list">
                <PatientList patientsData={patientsData} selectedDoctor={selectedDoctor} filtered={filtered} setFiltered={setFiltered} setPatientsData={setPatientsData}/>
            </div>

        </div>
    )
}

export default DoctorPage