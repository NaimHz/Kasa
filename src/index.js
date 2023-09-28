import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './pages/Home/Home'
import Room from './pages/Room/Room'
import Navbar from './components/Navbar/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/room" element={<Room />} />
    </Routes>
  </Router>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
