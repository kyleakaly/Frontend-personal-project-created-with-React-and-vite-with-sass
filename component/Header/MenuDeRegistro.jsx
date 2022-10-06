import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../src/assets/SVG/login.svg'
import registroImagen from '../../src/assets/SVG/registrate.svg'
import AuthLogin from '../../Auth/Authlogin/AuthLogin'
import AuthRegistro from '../../Auth/AuthRegistro/AuthRegistro'
import MenuRegistrado from './MenuRegistrado/MenuRegistrado'

const MenuDeRegistro = () => {

  const [abrirmodalLogin,setAbrirmodalLogin] = useState(false)
  const [abrirmodalRegistro,setAbrirmodalRegistro] = useState(false)
  const [cambiarMenu,setCambiarMenu] = useState(false)


  const setAbrirmodalLoginn = () => {
    setAbrirmodalLogin(!abrirmodalLogin)
  }

  const setAbrirmodalRegistros = () => {
    setAbrirmodalRegistro(!abrirmodalRegistro)
  }

  return (
    <div className="menuInicio">

      {!cambiarMenu ? (

<ul>
  <li>
    <Link onClick={setAbrirmodalLoginn}> <img src={loginImage} alt="login" /> </Link>
  </li>
  <li>
    <Link onClick={setAbrirmodalRegistros}> <img src={registroImagen} alt="registro" /> </Link>
  </li>
</ul>

      ) : (<MenuRegistrado/>) }

{abrirmodalLogin && <AuthLogin setAbrirmodalLogin={setAbrirmodalLogin} setAbrirmodalRegistro={setAbrirmodalRegistro}/> }
{abrirmodalRegistro && <AuthRegistro setAbrirmodalRegistro={setAbrirmodalRegistro} setAbrirmodalLogin={setAbrirmodalLogin}/> }

    </div>
  )
}

export default MenuDeRegistro