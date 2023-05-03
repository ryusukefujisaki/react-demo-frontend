import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'

import Top from '@/pages/top/Top'
import Crud from '@/pages/crud/Crud'
import FrontendFramework from '@/pages/frontend_framework/FrontendFramework'
import BackendFramework from '@/pages/backend_framework/BackendFramework'

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path={''} element={<Navigate replace to="/top" />} />
          <Route path={'/top'} element={<Top />} />
          <Route path={'/crud'} element={<Crud />} />
          <Route path={'/frontend_framework'} element={<FrontendFramework />} />
          <Route path={'/backend_framework'} element={<BackendFramework />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
