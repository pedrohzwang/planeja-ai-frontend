import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './features/Home/Home'
import { TopMenu } from './features/TopMenu/TopMenu'

function App() {
  return (
    <HashRouter>
      <TopMenu />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
