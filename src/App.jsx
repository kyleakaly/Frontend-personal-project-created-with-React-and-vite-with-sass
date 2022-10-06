
import BasicLayout from '../layout/BasicLayout'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Error404 from '../pages/Error404/Error404'
import PaginaGeneral from '../pages/PaginaGeneral/PaginaGeneral'
import Noticias from '../pages/Noticias/Noticias'
import Categorias from '../pages/Categorias/Categorias'
import Lecturamanga from '../pages/Lecturamanga/Lecturamanga'



function App() {

  return (

    <BrowserRouter>


    <Routes>
    
    <Route element={(<BasicLayout/>)}>
    
    <Route index path={'/'} exact={true} element={(<Inicio/>)} />
    <Route index path={'/:categorias/:nombreserie'} exact={true} element={(<PaginaGeneral/>)} />
    <Route index path={'/noticias'} exact={true} element={(<Noticias/>)} />
    <Route index path={'/categorias'} exact={true} element={(<Categorias/>)} />
    <Route index path={'*'} exact={false} element={(<Error404/>)} />
    
    </Route>
    
    {/* premium no premium */}

    <Route index path={'/:nombrehistoria/:Pagina/:id'} exact={true} element={(<Lecturamanga/>)} />

    </Routes>
    
      </BrowserRouter>        


  )
 
  
}

export default App
