import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Apps from './pages/Apps.jsx'
import Blog from './pages/Blog.jsx'
import Pricing from './pages/Pricing.jsx'
import Product from './pages/Product.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Apps" element={<Apps />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
