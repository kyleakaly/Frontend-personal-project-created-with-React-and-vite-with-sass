import React from 'react'
import MenuPrincipal from '../Header/MenuPrincipal'
import MenuDeRegistro from '../Header/MenuDeRegistro'
import LogoPrincipal from '../../src/assets/SVG/logo.svg'
import { Link } from 'react-router-dom'
import useWindowSize from '../../Hooks/useWindowSize'
import MenuMobil from '../Header/MenuRegistrado/MenuMobil'

const Header = () => {

  const {width} = useWindowSize()
  console.log(width)
  

  return (
    <div className='header'>

<nav className="nav">
  <Link to={'/'}>
<img src={LogoPrincipal} alt='logo' style={{height:'80px',width:'180px', fontWeight:'400',padding:'10px'}}/>
  </Link>

  {width <= 768 ? <MenuMobil/> : <MenuPrincipal/> }
        <MenuDeRegistro/>
      </nav>
    </div>
  )
}

export default Header