import React from 'react'
import { Link } from 'react-router-dom'


const MenuPrincipal = () => {
  return (
    
        <ul className="menuPrincipal">
            <li className="elementosMenuPrincipal">
           <Link to={'/'}>Web Comic</Link>
            </li>
            <li className="elementosMenuPrincipal">
             <Link to={'Novelas'}>Novelas</Link>
            </li>
            <li className="elementosMenuPrincipal">
              <Link to={'noticias'}>Noticias</Link>
            </li>
            <li className="elementosMenuPrincipal">
              <Link to={'categoria'}>Categorias</Link>
            </li>
            <li className="elementosMenuPrincipal">
            <Link to={'shop'}>Shop</Link>
            </li>

        </ul>
  )
}

export default MenuPrincipal