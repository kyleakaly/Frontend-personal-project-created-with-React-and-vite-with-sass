import React,{useState} from 'react'
import './Buscador.scss'

const Buscador = () => {
    const [datosDelBuscador,setDatosDelBuscador] = useState('')

    const handlesubmit = (e) => {
e.preventDefault()
console.log(datosDelBuscador)
    }

  return (
    
    <form className='organizaresto'  onSubmit={handlesubmit}>
<span className="material-symbols-outlined">
search
</span>
<input className='inputbuscar' type="text" onChange={(e)=> setDatosDelBuscador(e.target.value) } placeholder='Escribe Busqueda' />
<button type='submit'>Ir</button>

    </form>

  )
}

export default Buscador