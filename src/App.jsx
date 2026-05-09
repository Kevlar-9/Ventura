import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Footer from './components/Footer.jsx'

function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
