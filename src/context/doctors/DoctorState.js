import React, { useState } from 'react'
import DoctorContext from './doctorContext'

const DoctorState = (props) => {
    const host = "http://localhost:5000"
    const doctorinit=[]
    const [doctor, setDoctor] = useState(doctorinit)


    const getDoctors = async()=>{
        const response = await fetch(`${host}/api/list/fetchalldoctor`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const json = await response.json()
      
          setDoctor(json)
    }

    
  return (
    <DoctorContext.Provider value={{doctor, getDoctors}}>
        {props.childerns}
    </DoctorContext.Provider>
  )
}

export default DoctorState