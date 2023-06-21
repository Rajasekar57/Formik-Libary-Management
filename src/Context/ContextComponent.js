import React, {useState} from 'react'


export const userContext = React.createContext()

function ContextComponent({children}) {
    let [students, setStudents] = useState([
      {
        name: "Anoop",
        email: "anoop@gmail.com",
        mobile: "919100201",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "Ajith",
        email: "ajith@gmail.com",
        mobile: "8919989291",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "Ganesh",
        email: "ganesh@gmail.com",
        mobile: "80989019801",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "Gokul",
        email: "gokul@gmail.com",
        mobile: "782718189",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "Ajay",
        email: "ajay@gmail.com",
        mobile: "919100201",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "kumar",
        email: "kumar@gmail.com",
        mobile: "8919989291",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "vicky",
        email: "vk@gmail.com",
        mobile: "80989019801",
        course: "FSD",
        batch: "B46"
      },
      {
        name: "Mano",
        email: "mano@gmail.com",
        mobile: "782718189",
        course: "FSD",
        batch: "B46"
      }
      ]);
    
      const [teachers, setTeachers] = useState([
        {
          name: "Sathish",
          email: "sathish@gmail.com",
          mobile: "9876543210",
          expertise: "DSA"
        },
        {
          name: "Nagarajan",
          email: "nagarajan@gmail.com",
          mobile: "9876543511",
          expertise: "React"
        },
        {
          name: "SaiMohan",
          email: "ganesh@gmail.com",
          mobile: "80989019801",
          expertise: "Javascript"
        },
        {
          name: "Vignesh",
          email: "vicky@gmail.com",
          mobile: "9876543210",
          expertise: "DSA"
        },
        {
          name: "Naga",
          email: "naga@gmail.com",
          mobile: "9876543511",
          expertise: "React"
        },
        {
          name: "Mohan",
          email: "mohan@gmail.com",
          mobile: "80989019801",
          expertise: "Javascript"
        },
      ]);
    
     

  return (
    <div>
        <userContext.Provider value={{ students, setStudents, teachers, setTeachers }}>
            {children}
        </userContext.Provider>   
      
    </div>
  )
}

export default ContextComponent
