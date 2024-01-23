import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Product from './pages/product/Product'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/product'} element={<Product/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
