import DoctorCard from "./DoctorCard"



const DoctorList = ({ doctorsData, setSelectedDoctor }) => {


    return (
        <div className="doctors-container">
            {doctorsData.map(doctor => {
                return (
                    <DoctorCard key={doctor.id} doctor={doctor} setSelectedDoctor={setSelectedDoctor} />
                )
            })}
        </div>
    )
}

export default DoctorList