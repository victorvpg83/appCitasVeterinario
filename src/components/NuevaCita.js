import React, { Fragment, useState} from "react";
import uuid from 'uuid/v4';
import PropTypes from 'prop-types'


const NuevaCita = ({createAppoinment}) => {
        
    //state appoinment

    const [appoinment, actAppoinment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    })

    const [error, actError] = useState(false)

    const handleChange = e => {
        actAppoinment({
            ...appoinment,
            [e.target.name]: e.target.value
        })
    }

    //extract values

    const { pet, owner, date, time, symptom } = appoinment

    //send form

    const submitAppointment = e => {
        e.preventDefault()

        // Validation

        if (pet.trim() ==='' || owner.trim() ==='' || date.trim() ==='' || time.trim() ==='' || symptom.trim() ===''){
            actError(true)
            return
        } 

        // remove error message
        actError(false)

        //create id

        appoinment.id = uuid()

        // create appoinment

        createAppoinment(appoinment)

        // init Form
        actAppoinment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptom: ''
        })
    } 

  
        return (
                <Fragment>
                    <h2>Crear cita</h2>

                    {error? <p className='alerta-error'>Todos los campos son obligatorios</p>: null }

                    <form onSubmit ={submitAppointment} >
                            <label>Nombre mascota</label>
                            <input id='pet' type='text' className ='u-full-width' placeholder='Nombre mascota' name='pet' onChange={handleChange} value={pet}  ></input>

                            <label>Nombre dueño</label>
                            <input type='text' className ='u-full-width' placeholder='Nombre dueño mascota' name='owner' onChange={handleChange} value={owner} ></input>

                            <label>Fecha</label>
                            <input type='date' className ='u-full-width'  name='date' onChange={handleChange} value={date}></input>

                            <label>Hora</label>
                            <input type='time' className ='u-full-width'  name='time' onChange={handleChange} value={time} ></input>
  
                            <label>Síntomas</label>                       
                            <textarea className='u-full-width' name='symptom' placeholder ='describe los síntomas' onChange={handleChange} value={symptom}></textarea>

                            <button type='submit' className='u-full-width button-primary' value='add appointment' >Agregar cita</button>

                    </form>
                </Fragment>
        )
}

NuevaCita.propTypes = {
    createAppoinment: PropTypes.func.isRequired
}

export default NuevaCita