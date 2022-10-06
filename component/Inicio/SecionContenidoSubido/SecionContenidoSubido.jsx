import React, { useEffect } from 'react'
import './SecionContenidoSubido.scss'
import Likes from './Likes/Likes'
import imagenSliderMuestra from '../../../src/assets/imagenSliderMuestra.png'
import imagen1 from '../../../src/assets/imagen2.png'
import imagen2 from '../../../src/assets/imagen1.png'
import imagen3 from '../../../src/assets/imagen3.png'
import { Link } from 'react-router-dom'

const SecionContenidoSubido = ({nombre,setNombre}) => {
    useEffect(()=>{

        setNombre('Nombrelargo')

    }, [nombre])
  return (
      //solo es uno pero para colocar contenido lo ponemos variso

      

    <div className='contenidonumero1organizar'>

<div className="contenidotexto">
    <h2>Recomendaciones</h2>
          <p>Aqui Encontraras los <span style={{fontWeight:'bold'}} >webcomic</span> en español mas destacados</p>
    </div>

        <div className="cajas">
        <a href='/manga/ejemplo'>


            <img className='tamanoDeImagen' src={imagenSliderMuestra} alt='imagenes' />
            <div className="contenidocompleto">
                <p className='nombre'>{nombre}</p>
                <Likes/>
            </div>
        </a>

        </div>

        <div className="cajas">
        <a href='/manga/ejemplo'>


            <img className='tamanoDeImagen' src={imagen1} alt='imagenes' />
            <div className="contenidocompleto">
                <p className='nombre'>{nombre}</p>
                <Likes/>
            </div>
        </a>

        </div>

        <div className="cajas">
        <a href='/manga/ejemplo'>

            <img className='tamanoDeImagen' src={imagen2} alt='imagenes' />
            <div className="contenidocompleto">
                <p className='nombre'>{nombre}</p>
                <Likes/>
            </div>
        </a>

        </div>

        <div className="cajas">
        <a href='/manga/ejemplo'>

            <img className='tamanoDeImagen' src={imagen3} alt='imagenes' />
            <div className="contenidocompleto">
                <p className='nombre'>{nombre}</p>
                <Likes/>
            </div>
        </a>

        </div>

    </div>
    



  )
}

export default SecionContenidoSubido