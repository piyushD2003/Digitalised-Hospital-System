import React from 'react'
const Doctors = (props) => {
    const {appointment} = props
    // console.log(appointment);
    return (
        <>
            <div className='col-md-3'>
                    <div className="card" style={{width: "18rem"}}>
                        <img src= {require(`../uploads/${appointment.image}`)} style={{height: "11rem"}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">{appointment.dname}</h4>
                                <h6 className="card-text">{appointment.specialist}</h6>
                                <h6 className="card-text">{appointment.study}</h6>
                                <h6 className="card-text">Contact: {appointment.mobile}</h6>
                                {/* <a href="#" className="btn btn-primary">Appoinment</a> */}
                            </div>
                    </div>
            </div>
        </>
    )
}

export default Doctors