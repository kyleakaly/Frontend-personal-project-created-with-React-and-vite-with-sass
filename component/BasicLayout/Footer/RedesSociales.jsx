import React from 'react'
import './RedesSociales.scss'
import Logo from '../../../src/assets/SVG/logo.svg'
import facebook from '../../../src/assets/SVG/facebook.svg'
import instagram from '../../../src/assets/SVG/instagram.svg'
import twitter from '../../../src/assets/SVG/twitter.svg'



const RedesSociales = () => {
  return (
    <div className='redessoaciales'>
        <img src={Logo} alt="logoFooter" />
        <div className='LogosOrganizar'>
            <img className='imagen1' src={facebook} alt='facebook'/>
            <img className='imagen1' src={instagram} alt='instagram'/>
            <img className='imagen1' src={twitter} alt='twitter'/>
        </div>
    </div>


  )
}

export default RedesSociales