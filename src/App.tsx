import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontendFramework from './pages/frontend_framework/FrontendFramework'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={''} element={<FrontendFramework />} />
        <Route path={'/frontend_framework'} element={<FrontendFramework />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
