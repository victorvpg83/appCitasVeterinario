import React from 'react'
import PropTypes from 'prop-types'


const Appoinment = ({appoinment, deleteAppoinment}) => (
    <div className='cita'>
        <p>Mascota: <span>{appoinment.pet}</span> </p>
        <p>Dueño: <span>{appoinment.owner}</span> </p>
        <p>Fecha: <span>{appoinment.date}</span> </p>
        <p>Hora: <span>{appoinment.time}</span> </p>
        <p>Síntomas: <span>{appoinment.symptom}</span> </p>

        <button className='button eliminar u-full-width'
             onClick = { ()=>deleteAppoinment(appoinment.id) }        
        >Eliminar </button>
    </div>
)

Appoinment.propTypes = {
    appoinment: PropTypes.object.isRequired,
    deleteAppoinment: PropTypes.func.isRequired

}
export default Appoinment