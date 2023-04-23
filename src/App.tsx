import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import FrontendFramework from './pages/frontend_framework/FrontendFramework'

function App(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path={''} element={<FrontendFramework />} />
          <Route path={'/frontend_framework'} element={<FrontendFramework />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
