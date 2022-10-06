import React from 'react'
import {Link} from 'react-router-dom'


const CategoriasInicio = () => {
  return (
    <div className='categoriasInicios'>
        
        <div className="organizarCategorias">
        <span className="material-symbols-outlined">arrow_right</span>
            <Link to={'/'}>Accion</Link>
            <Link to={'/'}>Aventura</Link>
            <Link to={'/'}>Misterio</Link>
            <Link to={'/'}>Drama</Link>
            <Link to={'/'}>Comedia</Link>
        </div>
        </div>
  )
}

export default CategoriasInicio