import React from 'react'
import './AuthRegistro.scss'
import * as yup from 'yup'
import {useFormik} from 'formik'
import facebook from '../../src/assets/SVG/facebook.svg'

const AuthRegistro = ({setAbrirmodalRegistro,setAbrirmodalLogin}) => {

    const formik = useFormik({

        initialValues : {

username : '',
nombrecompleto : '',
email : '',
telefono : '',
password : '',
repetirpassword : '',
        },

        validationSchema : yup.object({

            username : yup.string().trim().required('el nombre de usuario es obligatorio'),
            nombrecompleto : yup.string().required('el nombre  completo es obigatorio'),
            email : yup.string().email().required("el nombre de usuario es obligatorio"),
            telefono : yup.number().required('el telefono es obligatorio'),
      password : yup.string().matches(/^[a-zA-Z0-9-]*$/,"Tu contrasena no debe tener espacios").required("la contraseña es obligatoria"),
      repetirpassword : yup.string().matches(/^[a-zA-Z0-9-]*$/,"la contraseña no son iguales").required("la contraseña es obligatoria"),


        }),

        onSubmit : async (formdata) => {

            try {

                console.log(formdata)
                
            } catch (error) {
                console.log(error)
            }

        }

    })

    const abrilogin = () => {
    setAbrirmodalRegistro(false)
    setAbrirmodalLogin(true)

      }

  return (

    <div className="organizarregistroylogin">

        <div className='fondoinputs registroheigt'>

<div className='cerrar'><span onClick={()=>{setAbrirmodalRegistro(false)}} className="material-symbols-outlined  cerrarr">
disabled_by_default
</span></div>
        <div className='titulo'>
        <h3>Registro</h3>
  
    </div>

    <form className='formulario' onSubmit={formik.handleSubmit}>

    <label htmlFor='username' className='label'>Nombre de Usuario</label>
    <input type='text' name='username' placeholder='Nombre de Usuario'  onChange={formik.handleChange}
    error={formik.errors.username}
    value={formik.values.username}/>

<label htmlFor='nombrecompleto' className='label'>Nombre Completo</label>
    <input type='text' name='nombrecompleto' placeholder='Nombre Completo'  onChange={formik.handleChange}
    error={formik.errors.nombrecompleto}
    value={formik.values.nombrecompleto}/>

<label htmlFor='email' className='label'>Email</label>
    <input type='email' name='email' placeholder='pon tu correo electronico'  onChange={formik.handleChange}
    error={formik.errors.email}
    value={formik.values.email}/>

<label htmlFor='password' className='label'>Contraseña</label>
    <input type='text' name='password' placeholder='Nombre de Usuario'  onChange={formik.handleChange}
    error={formik.errors.password}
    value={formik.values.password}/>

<input type="submit" value="Registrarme"/>

    </form>

    <div className='redesSociales'>
        <p>Iniciar sesion con </p>
        <img src={facebook} alt="facebook secion" />

    </div>

    <div className='registro'><p>tienes Cuenta Inicia sesion <span className='aqui' onClick={abrilogin}>Aqui</span></p></div>

        </div>
    </div>
  )
}

export default AuthRegistro