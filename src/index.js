import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Room from './pages/Room/Room'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'
import About from './pages/About/About'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
