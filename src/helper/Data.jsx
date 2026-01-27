

import doctor1 from "../assets/doctor1.jpg"
import doctor2 from "../assets/doctor2.jpg"
import doctor3 from "../assets/doctor3.jpg"
import doctor4 from "../assets/doctor4.jpg"


export const pData = [
  {
    id: 1,
    patientName: "JOHNATHAN DOE",
    day: "2025-12-12T14:30:00",
    isDone: false,
    myDoctor: "Dr. James Anderson",
  },
  {
    id: 2,
    patientName: "ALICE WALKER",
    day: "2025-12-13T13:30:00",
    isDone: true,
    myDoctor: "Dr. Emily Carter",
  },
  {
    id: 3,
    patientName: "MICHAEL SMITH",
    day: "2025-12-14T15:00:00",
    isDone: false,
    myDoctor: "Dr. Sarah Jenkins",
  },
  {
    id: 4,
    patientName: "EMMA JOHNSON",
    day: "2025-12-12T14:30:00",
    isDone: false,
    myDoctor: "Dr. Robert Mitchell",
  },
  {
    id: 5,
    patientName: "WILLIAM BROWN",
    day: "2025-12-13T13:30:00",
    isDone: true,
    myDoctor: "Dr. Robert Mitchell",
  },
  {
    id: 6,
    patientName: "SOPHIA MILLER",
    day: "2025-12-14T15:00:00",
    isDone: false,
    myDoctor: "Dr. Sarah Jenkins",
  },
];

export const doctorsData = [

  {
    id: 2,
    doctorName: "Dr. Robert Mitchell",
    doctorImg: doctor3,
    title: "Specialist of Internal Medicine",
  },

  {
    id: 4,
    doctorName: "Dr. Emily Carter",
    doctorImg: doctor4,
    title: "Orthopedic Surgeon",
  },

  {
    id: 1,
    doctorName: "Dr. James Anderson",
    doctorImg: doctor2,
    title: "ENT Specialist",
  },

  {
    id: 3,
    doctorName: "Dr. Sarah Jenkins",
    doctorImg: doctor1,
    title: "Specialist of Ophthalmology",
  },

];
