import React from 'react'
import { useState } from 'react'
import ContenidoNoPremium from '../../component/LecturaDeMangas/ContenidoNoPremium'
import ContenidoPremium from '../../component/LecturaDeMangas/ContenidoPremium'

const Lecturamanga = () => {
    const[usuariosPremium,setUsuariosPremium] = useState(false)
  return (
    <div className='LecturaManga'>{!usuariosPremium ? (<ContenidoNoPremium/>) : (<ContenidoPremium/>)}</div>
  )
}

export default Lecturamanga