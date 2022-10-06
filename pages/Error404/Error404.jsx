import React from 'react'
import ImagenError from '../../src/assets/Chibi-entregable.png'
import { Link } from 'react-router-dom'
import './Error404.scss'

const Error404 = () => {
  return (
    <div className='error404'>

      <h1>Error 404</h1>
      <p>ups esta pagina no existe ahora volver al <Link to={'/'}>Inicio</Link></p>
      <img src={ImagenError} className='imagen' alt="error404imagen" />
    </div>
  )
}

export default Error404