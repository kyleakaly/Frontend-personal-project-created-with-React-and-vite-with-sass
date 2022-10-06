import React,{useState,useEffect} from 'react'
import imagen from '../../../src/assets/SVG/premium.svg'
import imagen2 from '../../../src/assets/SVG/meGusta.svg'

import './LosMasDestacados.scss'


import SecionContenidoSubido from '../SecionContenidoSubido/SecionContenidoSubido'
import InicioPersonaje from '../../../src/assets/iniciopersonaje.png'


const LosMasDestacados = () => {

  const [nombre,setNombre] = useState('')
  const [nombretitulo,setNombretitulo] = useState('')



  return (
      <div className="contenidocompleto">

        


<div className="arreglarcontenidoconimagen">

<img className='imagengrande' src={InicioPersonaje}/>

<div className='separacion4Contenidos'>

        <div className='contenidonumero1'>
            
            <SecionContenidoSubido nombre={nombre} setNombre={setNombre} />

<div className="organizarlinea">
    
<div className="linea"></div> <div className='icono'> <img src={imagen2} alt="hola" width={'60px'} height={'60px'}/></div> <div className="linea"></div>

    </div>

            <SecionContenidoSubido nombre={nombre} setNombre={setNombre} />

            <div className="organizarlinea">
    
<div className="linea"></div> <div className='icono'> <img src={imagen2} alt="hola" width={'60px'} height={'60px'}/></div> <div className="linea"></div>

    </div>

            <SecionContenidoSubido nombre={nombre} setNombre={setNombre} />

            <div className="organizarlinea">
    
<div className="linea"></div> <div className='icono'> <img src={imagen2} alt="hola" width={'60px'} height={'60px'}/></div> <div className="linea"></div>

    </div>

            <SecionContenidoSubido nombre={nombre} setNombre={setNombre} />

            <div className="organizarlinea">
    
<div className="linea"></div> <div className='icono'> <img src={imagen2} alt="hola" width={'60px'} height={'60px'}/></div> <div className="linea"></div>

    </div>
          

        </div>
    </div>

    

    

</div>

      </div>
      
    
  )
}

export default LosMasDestacados