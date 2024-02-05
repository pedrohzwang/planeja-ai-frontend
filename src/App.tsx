import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './features/Home/Home'
import { TopMenu } from './features/TopMenu/TopMenu'
import { Insights } from './features/Insights/Insights'

function App() {
  return (
    <HashRouter>
      <TopMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/insights' element={<Insights />} />
      </Routes>
    </HashRouter>
  )
}

export default App
