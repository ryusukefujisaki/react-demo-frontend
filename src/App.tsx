import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'

import Crud from '@/pages/crud/Crud'
import FrontendFramework from '@/pages/frontend_framework/FrontendFramework'
import BackendFramework from '@/pages/backend_framework/BackendFramework'

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path={''} element={<Crud />} />
          <Route path={'/crud'} element={<Crud />} />
          <Route path={'/frontend_framework'} element={<FrontendFramework />} />
          <Route path={'/backend_framework'} element={<BackendFramework />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
