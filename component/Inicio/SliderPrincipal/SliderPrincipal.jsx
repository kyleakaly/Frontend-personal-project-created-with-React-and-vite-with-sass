import React, {useState} from 'react'
import ImagenSlider from '../../../src/assets/imagenSliderMuestra.png'
import ImagenSlider1 from '../../../src/assets/imagen1.png'
import ImagenSlider2 from '../../../src/assets/imagen2.png'

const SliderPrincipal = () => {



 
const eventoSlider = (e) => {

  console.log(e)

  // const slideWidth = e.target.clientWidth;
  // console.log(slideWidth)
  // console.log(  e.target.parentNode.scrollLeft += slideWidth)
  // e.target.parentNode.scrollLeft += slideWidth;

}


 


  return (
    <div className='flexSlider' >
       <ul onLoad={eventoSlider} >
         
         <li><img className='imagenSlider ' src={ImagenSlider1} alt='algo'/></li>
         <li>
        <img className='imagenSlider slider1' src={ImagenSlider} alt='algo' />
         </li>
         <li>
        <img className='imagenSlider ' src={ImagenSlider2} alt='algo'/>
         </li>

         </ul> 
    </div>
  )
}

export default SliderPrincipal