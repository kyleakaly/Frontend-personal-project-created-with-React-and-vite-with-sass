import React from 'react'
import './PaginaGeneral.scss'
import ImagenEjemplo from '../../src/assets/imagenejemplo.webp'
import categoria from '../../src/assets/imagenejemplo.webp'
import { Link } from 'react-router-dom'

const PaginaGeneral = () => {
  return (
    <div className='paginaGeneral'>

{/* descripciondel manga */}
<div className="detallesdelmanga">
    <img src={ImagenEjemplo} alt="cualquierimagen" />
    <div className="textoymas">
        <h2>El principe de notredan</h2>
        <p>Autor : <span>Juan Pablo Appleton</span>  </p>
        <div className="informaciongeneral">
            <p> <span className="material-symbols-outlined">
assistant
</span> Drama</p>
            <p><span style={{color:'green',padding:'2px'}} className="material-symbols-outlined">
radio_button_checked
</span>Emision</p>
            <p><span className="material-symbols-outlined">
calendar_add_on
</span>Nuevo capitulo: </p>
        </div>

<div className="descripcion">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, exercitationem autem, 
        reprehenderit voluptatibus qui maiores, facilis hic rerum iusto aperiam deserunt nihil 
         deleniti minima molestias aut iste quisquam soluta? Magnam!
         </p>
</div>

<div className="botones">
    <button className='comenzaraleer'><span className="material-symbols-outlined leer">
menu_book
</span> <span>Comenzar a leer</span> </button>
    <button className='agregarafavoritos'><span className="material-symbols-outlined">
collections_bookmark
</span> <span>Agregar a Favoritos</span></button>
</div>

    </div>
</div>

{/* termina la descripcion del manga */}

{/* empieza el listado de capitulos */}

<div className="listadodecapitulos">
    <h2>Lista De Capitulos</h2>
    <div className='numerodecapitulos'>
        <p>1-50</p>
        <p>50-100</p>
    </div>

    <div className="capitulos">
        <div className='capitulo'>
            <Link to={'/tierra504/pagina/1'}>
            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>1. </span>El Inicio</p>
        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>2. </span>El amor</p>

        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>3. </span>Conoci Mi principe</p>

        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>4. </span>Ella se Enamoro</p>

        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>5. </span>Por que a mi</p>

        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>6. </span>Siempre yo</p>

        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>7. </span>Quedare Solo</p>

        </div>

        <div className='capitulo'>
        <Link to={'/tierra504/pagina/1'}>

            <img src={categoria} alt="miniatura" />
            </Link>

            <p><span>8. </span>Ella era mi Amor</p>

        </div>

    </div>
</div>
{/* terminar lista de capitulos */}

{/* empieza contenido de sugeridos */}

<div className="sugeridos">
    <div className="informacion">
        <h3>Recomendaciones</h3>
        <p>ver mas</p>
    </div>
<div className="todoelsugerido">
<div className="backgroundimagen" style={{backgroundImage:`url(${categoria})`}}>
<div className="sombra">

<h3>Tierra 505</h3>
<p>Romance</p>
<p>capitulos 2</p>
</div>

</div>

<div className="backgroundimagen" style={{backgroundImage:`url(${categoria})`}}>
<div className="sombra">

<h3>amanecer</h3>
<p>Accion</p>
<p>capitulos 2</p>
</div>

</div>

<div className="backgroundimagen" style={{backgroundImage:`url(${categoria})`}}>
<div className="sombra">

<h3>descansar mar</h3>
<p>Drama</p>
<p>capitulos 2</p>
</div>

</div>

<div className="backgroundimagen" style={{backgroundImage:`url(${categoria})`}}>
<div className="sombra">
<h3>Ella se fue</h3>
<p>Vida</p>
<p>capitulos 2</p>
</div>

</div>

</div>



</div>

    </div>
  )
}

export default PaginaGeneral