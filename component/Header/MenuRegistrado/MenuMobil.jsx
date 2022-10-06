import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './MenuMobil.scss'
import twitter from '../../../src/assets/SVG/twitter.svg'
import facebook from '../../../src/assets/SVG/facebook.svg'
import instagram from '../../../src/assets/SVG/instagram.svg'


const MenuMobil = () => {

    const [abrirMenu,SetabrirMenu] = useState(false)

    const abrirmenuhamburguesa = () => {

        SetabrirMenu(true)
        console.log(abrirMenu)

    }

    const cerrarmenuhamburguesa = () => {

        SetabrirMenu(false)


    }

  return (
    <div className='menumobil'>
        <div className={!abrirMenu ? "hamburguesa" : "hamburguesa hamburnegro"} onClick={!abrirMenu ? abrirmenuhamburguesa : cerrarmenuhamburguesa}>
            <div className='linea1'></div>
            <div className='linea2'></div>
            <div className='linea3'></div>
        </div>
        <ul className={ !abrirMenu ? 'organizarMenu' : 'organizarMenu abrirmenu' } >
            <li className='mobilmenu'>
           <Link onClick={cerrarmenuhamburguesa} to={'/'}>Web Comic</Link>
            </li>
            <li className='mobilmenu'>
             <Link onClick={cerrarmenuhamburguesa} to={'Webcomic'}>Novelas</Link>
            </li>
            <li className='mobilmenu'>
              <Link onClick={cerrarmenuhamburguesa} to={'noticias'}>Noticias</Link>
            </li>
            <li className='mobilmenu'>
              <Link onClick={cerrarmenuhamburguesa} to={'categoria'}>Categorias</Link>
            </li>
            <li className='mobilmenu'>
            <Link onClick={cerrarmenuhamburguesa} to={'shop'}>Shop</Link>
            </li>

            <li className='mobilmenu'>
                <ul className="redesSociales">
                <li> <img className='imagenesredessociales' src={instagram} alt="instagram" /></li>
                <li><img  className='imagenesredessociales' src={facebook} alt="facebook" /> </li>
                <li><img  className='imagenesredessociales' src={twitter} alt="twitter" /> </li>
                </ul>
            </li>
            </ul>

    </div>
  )
}

export default MenuMobil