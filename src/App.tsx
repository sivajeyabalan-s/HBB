import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Banquet from './pages/Banquet/Banquet'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/banquet" element={<Banquet />} />
      </Routes>
    </>
  )
}

export default App
