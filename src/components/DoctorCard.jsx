
import React from 'react'

const DoctorCard = ({ doctor, setSelectedDoctor, showButton = true, layout = "vertical" }) => {

    // console.log(doctor)

    if (layout === "horizontal") {
        return (
            <div className='doctor-container doctor-container-horizontal'>
                <img src={doctor.doctorImg} alt="" />
                <div className=''>
                    <h5 className='doctor-name'>{doctor.doctorName}</h5>
                    <p className='title'>{doctor.title}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='doctor-container'>
            <img src={doctor.doctorImg} alt="" />
            <div>
                <h5 className='doctor-name'>{doctor.doctorName}</h5>
                <p className='title'>{doctor.title}</p>
            </div>

            {showButton && (
                <button
                    onClick={() => setSelectedDoctor(doctor)}>Add Patient</button>
            )}
        </div>
    )
}

export default DoctorCard