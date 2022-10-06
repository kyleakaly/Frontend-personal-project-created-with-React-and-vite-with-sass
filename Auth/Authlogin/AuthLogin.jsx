import React, {useState} from 'react'
import './AuthLogin.scss'
import {useFormik} from 'formik'
import * as yup from 'yup'

import facebook from '../../src/assets/SVG/facebook.svg'


const AuthLogin = ({setAbrirmodalLogin,setAbrirmodalRegistro}) => {



    const formik = useFormik({

        initialValues: {

            email : '',
            password : '',

        },
    
        validationSchema : yup.object({
          email : yup.string().email().required("el nombre de usuario es obligatorio"),
          password : yup.string().matches(/^[a-zA-Z0-9-]*$/,"Tu nombre de usuario no debe contener espacios").required("la contraseña es obligatoria"),
    
        }),
    
        onSubmit: async (formdata) => {
    
       
    
          try {
            
           console.log(formdata)


          } catch (error) {
console.log(error.messages)
          }
        }
    })
        
  const abriregistro = () => {
    setAbrirmodalLogin(false)
setAbrirmodalRegistro(true)
  }

  return (

    <div className="organizarregistroylogin">

        <div className='fondoinputs'>

<div className='cerrar'><span onClick={()=>{setAbrirmodalLogin(false)}} className="material-symbols-outlined  cerrarr">
disabled_by_default
</span></div>
        <div className='titulo'>
        <h3>Login</h3>
  
    </div>

<form className='formulario' onSubmit={formik.handleSubmit}>

   

<label htmlFor='email' className='label'><span className="material-symbols-outlined">
contact_mail
</span>Email </label>
    <input type='email' name='email' placeholder='pon tu correo electronico'  onChange={formik.handleChange}
    error={formik.errors.email}
    value={formik.values.email}/>

<label htmlFor='password' className='label'><span className="material-symbols-outlined">
lock
</span>Contraseña</label>
    <input type='password' name='password' placeholder='Nombre de Usuario'  onChange={formik.handleChange}
    error={formik.errors.password}
    value={formik.values.password}/>

<input type="submit" value="Entrar"/>

    </form>

    <div className='redesSociales'>
        <p>Iniciar sesion con </p>
        <img src={facebook} alt="facebook secion" />

    </div>

    <div className='registro'><p>No tienes Cuenta registrate <span className='aqui'onClick={abriregistro}>Aqui</span></p></div>

        </div>
    </div>

    
  )
}

export default AuthLogin