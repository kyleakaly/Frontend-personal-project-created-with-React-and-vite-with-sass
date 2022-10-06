import React from 'react'
import './LinksFooter.scss'
import { Link } from 'react-router-dom'

const LinksFooter = () => {
  return (
    <div className='linksfooter' >
        
        <div className="sobrenosotros">
        <h3>Compañia</h3>

<ul className='linksfooterul'>
  <li>
    <Link to={'/sobre-nosotros'}> Sobre Nosotros </Link>
  </li>
  <li>
    <Link to={'/mision'}>Mision y vision</Link>
  </li>
  <li>
    <Link to={'/team'}>Team</Link>
  </li>
</ul>
        </div>

        <div className="sobrenosotros">
        <h3>Ayuda</h3>

<ul className='linksfooterul'>
  <li>
    <Link to={'/sobre-nosotros'}>Centro De Atencion</Link>
  </li>
  <li>
    <Link to={'/mision'}>Preguntas Frecuentes</Link>
  </li>
  <li>
    <Link to={'/team'}>Publicar Mi Historia</Link>
  </li>
</ul>
        </div>

        <div className="sobrenosotros">
        <h3>Legal</h3>

<ul className='linksfooterul'>
  <li>
    <Link to={'/sobre-nosotros'}>Terminos Y Condiciones </Link>
  </li>
  <li>
    <Link to={'/mision'}>Politicas de Privacidad</Link>
  </li>
  <li>
    <Link to={'/team'}>Comunidad</Link>
  </li>
</ul>
        </div>

        <div className="sobrenosotros">


        <p>© 2022 maracustudios
Alle Rechte vorbehalten</p>
        </div>
     
    </div>
  )
}

export default LinksFooter