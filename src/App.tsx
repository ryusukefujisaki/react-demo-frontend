import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'

import Crud from '@/pages/crud/Crud'
import FrontendFramework from '@/pages/frontend_framework/FrontendFramework'

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path={''} element={<FrontendFramework />} />
          <Route path={'/crud'} element={<Crud />} />
          <Route path={'/frontend_framework'} element={<FrontendFramework />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
