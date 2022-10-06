
//componentes
import SliderPrincipal from '../component/Inicio/SliderPrincipal/SliderPrincipal'
import CategoriasInicio from '../component/Inicio/CategoriasInicio/CategoriasInicio'
import Buscador from '../component/Inicio/Buscador/Buscador'
import LosMasDestacados from '../component/Inicio/LosMasDestacados/LosMasDestacados'


const Inicio = () => {


  return (
    <div className='inicio'>
      <div className="slider">
        <SliderPrincipal/>
      </div>

      <div className='CategoriasInicio otromas'>
        <CategoriasInicio />
        <Buscador/>
      </div>

      <div className='todoElcontenidoDeBusquedas'>

    <LosMasDestacados />


      </div>
    </div>
  )
}

export default Inicio