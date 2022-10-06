import React from 'react'
import { Link } from 'react-router-dom'
import './ContenidoNoPremium.scss'
import Imagendemuestra from '../../src/assets/imagen4.jpeg'

const ContenidoNoPremium = () => {
  return (
    <div className='contenidoNoSiPremiun'>

<div className='tendraTodoElContenido'>
<div className="menudevolver">
<Link to={'/nombre/novela'}>
<span className="material-symbols-outlined">
arrow_back
</span> <p>Volver</p>
</Link>

<div className='compartir'> <span className="material-symbols-outlined compartirr">
share_reviews
</span> </div>
</div>

<div className="sliderImagenes">
  <img src={Imagendemuestra} alt="imagendescripcion" className='imagenslider'/>
  <img src={Imagendemuestra} alt="imagendescripcion" className='imagenslider'/>
  <img src={Imagendemuestra} alt="imagendescripcion" className='imagenslider'/>
  <img src={Imagendemuestra} alt="imagendescripcion" className='imagenslider'/>
</div>

</div>

<div className="menuabajo">
  <div className="todoelcontenido">

<div className='siguienteAnterior'>

<div className="anterior"><span class="material-symbols-outlined">
skip_previous
</span></div>

    <div className="siguiente"><span class="material-symbols-outlined">
skip_next
</span></div>

</div>

<div className='listadecapitulos'>
  <p>capitulos</p>
<span class="material-symbols-outlined">
menu
</span>
</div>

 
<div className="fullscreen">
<span class="material-symbols-outlined">
fullscreen
</span>
</div>
  </div>
</div>

    </div>
  )
}

export default ContenidoNoPremium