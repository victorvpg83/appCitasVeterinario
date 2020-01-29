import React, {Fragment, useState, useEffect} from 'react'
import NuevaCita from './components/NuevaCita';
import Appoinment from './components/Appoinment';


function App () {

  //appoinments in local storage

  let initAppoinments = JSON.parse(localStorage.getItem('appoinments'))

  if(!initAppoinments) {
    initAppoinments =[]
  }

  const [appoinments, saveAppoinment] = useState(initAppoinments)

  useEffect(()=>{
    if(initAppoinments){
      localStorage.setItem('appoinments', JSON.stringify(appoinments))
    } else {
      localStorage.setItem('appoinments', JSON.stringify([]))
    }
  },[appoinments,initAppoinments])

  //actual appoinments and new

  const createAppoinment = appoinment => {
    saveAppoinment([ ...appoinments, appoinment ])
  }

  //Delete appoinment by id
  const deleteAppoinment = id => {
    const newAppoinments = appoinments.filter(appoinment =>appoinment.id !== id)
    saveAppoinment(newAppoinments)
  }

  const title = appoinments.length === 0? 'No hay citas' : 'Administra tus citas'


    return (
      <Fragment>
        <h1>Pacientes Veterinario</h1>
      <div className = 'container'>
        <div className='row'>
          <div className='one-half column'>
            <NuevaCita createAppoinment={createAppoinment} />
          </div>
          <div className='one-half column'>
            <h2> {title} </h2>
            {appoinments.map(appoinment=>( 
              <Appoinment appoinment={appoinment} key={appoinment.id} deleteAppoinment={deleteAppoinment} />
            ))}
          </div>
        </div>
      </div>
      </Fragment>
    
    )
  }


export default App;
